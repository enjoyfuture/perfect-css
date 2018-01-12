import Component from '../../../base/component';
import {getTransformPropertyName, clamp, bezierProgress, getElementIndexOfParent} from './util';
import {isWheel} from '../../../base/util';

const win = window;
const dom = document;
const body = dom.body;

const reg = /translateY\(([-\w]+)\)/;

// 定义常量
// class 样式
const classes = {
  ELEMENT: 'list-menu',
  LIST_MENU_ITEMS: 'list-menu-items',
  OPEN: 'list-menu-open',
  ANIMATING: 'list-menu-animating',
  TOP_RIGHT: 'list-menu-top-right',
  BOTTOM_LEFT: 'list-menu-bottom-left',
  BOTTOM_RIGHT: 'list-menu-bottom-right',
  LIST_ITEM: 'list-item',
  ACTIVE: 'active',
  EXPANDED: 'expanded',
};

/** @enum {string} */
const strings = {
  ITEMS_SELECTOR: '.list-menu > .list-menu-items', // 第一层 items
  LIST_ITEM_SELECTOR: '.list-menu > .list-menu-items > .list-item', // 第一层 item
  LIST_ITEM_BRANCH_SELECTOR: '.list-item[aria-level="branch"]', // 所有分支节点
  LIST_ITEM_LEAF_SELECTOR: '.list-item:not([aria-level="branch"])', // 所有叶子节点
  SELECTED_EVENT: 'listmenu:selected',
  CANCEL_EVENT: 'listmenu:cancel',
  ARIA_DISABLED_ATTR: 'aria-disabled',
  ARIA_CONTROLS_ATTR: 'aria-controls',
  ARIA_CONTROLS_CLICK: 'click',
  ARIA_LEVEL_ATTR: 'aria-level',
  ARIA_LEVEL_BRANCH: 'branch',
  EXPANDED: '.expanded',
};

const numbers = {
  // 打开列表菜单延迟时间
  SELECTED_TRIGGER_DELAY: 50,
  // 展开菜单动画持续时间
  TRANSITION_DURATION_MS: 300,
  // 菜单开始动画时 scaleX 值，取值为 (0 - 1)
  TRANSITION_SCALE_ADJUSTMENT_X: 0.5,
  // 菜单开始动画时 scaleY 值，取值为 (0 - 1)
  TRANSITION_SCALE_ADJUSTMENT_Y: 0.2,
  // 动画贝塞尔曲线参数，参见 ./animation/_variable.scss $animation-ease-out (cubic-bezier(0, 0, 0.2, 1)).
  TRANSITION_X1: 0,
  TRANSITION_Y1: 0,
  TRANSITION_X2: 0.2,
  TRANSITION_Y2: 1,
};

class ListMenu extends Component {

  static get classes() {
    return classes;
  }

  static get strings() {
    return strings;
  }

  static get numbers() {
    return numbers;
  }

  /**
   * 静态方法实例化 ListMenu 组件
   * @param element
   * @param config
   * @returns {ListMenu}
   */
  static mount(element, config = {filterDivider: 'list-divider'}) {
    return new ListMenu(element, config);
  }

  /** @return {boolean} */
  get open() {
    return this.isOpen;
  }

  /** @param {boolean} value */
  set open(value) {
    if (value) {
      this.show();
    } else {
      this.hide();
    }
  }

  constructor(element, config) {
    super(element, config);

    // 是否过滤掉分隔符 list-divider，默认过滤
    if (this.filterDivider === undefined) {
      this.filterDivider = 'list-divider';
    }

    // 如果没有已选中的 option，是否默认选中第一个
    if (this.selectedFirstOption === undefined) {
      this.selectedFirstOption = true;
    }

    // 定义上一个获取焦点的元素
    this.previousFocus = null;

    // 创建适配器
    this.adapter = this.createAdapter();

    /** @private {boolean} */
    this.isOpen = false;
    /** @private {number} */
    this.startScaleX = 0;
    /** @private {number} */
    this.startScaleY = 0;
    /** @private {number} */
    this.targetScale = 1;
    /** @private {number} */
    // 缩放 X 大小
    this.scaleX = 0;
    /** @private {number} */
    // 缩放 Y 大小
    this.scaleY = 0;
    /** @private {boolean} */
    // 判断 menu 是否在打开或关闭过程中
    this.running = false;
    /** @private {number} */
    this.selectedTriggerTimerId = 0;
    /** @private {number} */
    this.animationRequestId = 0;
    /** @private {!{ width: number, height: number }} */
    // 返回菜单 items 大小
    this.dimensions = null;
    /** @private {number} */
    // 开始时间
    this.startTime = 0;
    /** @private {number} */
    // item 高度
    this.itemHeight = 0;

    this.previousActiveItems = null; // 记录当前选择的元素，对于级联菜单，包括从第一层到最里层
    this.previousActiveItemsIndex = null; // 记录当前选择的元素 index

    this.render();
  }

  /**
   * 封装适配器方法
   * @return {object}
   */
  createAdapter() {
    return {
      addClass: (className) => this.element.classList.add(className),
      removeClass: (className) => this.element.classList.remove(className),
      hasClass: (className) => this.element.classList.contains(className),
      hasNecessaryDom: () => Boolean(this.itemsContainer),
      eventTargetHasClass: (target, className) => target.classList.contains(className),
      getInnerDimensions: () => {
        const {itemsContainer} = this;
        return {width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight};
      },
      hasAnchor: () => this.element.parentElement && this.element.parentElement.classList.contains('menu-anchor'),
      getAnchorDimensions: () => this.element.parentElement.getBoundingClientRect(),
      getWindowDimensions: () => {
        return {width: win.innerWidth, height: win.innerHeight};
      },
      setScale: (x, y) => {
        this.element.style[getTransformPropertyName(win)] = `scale(${x}, ${y})`;
      },
      setInnerScale: (x, y) => {
        this.itemsContainer.style[getTransformPropertyName(win)] = `scale(${x}, ${y})`;
      },
      getNumberOfItems: () => this.items.length,
      getYParamsForItemAtIndex: (index) => {
        const {offsetTop: top, offsetHeight: height} = this.items[index];
        return {top, height};
      },
      setTransitionDelayForItemAtIndex: (index, value) =>
        this.items[index].style.setProperty('transition-delay', value),
      setActiveItemAtIndex: (index) => {
        if (this.previousActiveItems) {
          this.previousActiveItems.forEach((el) => {
            el.classList.remove(classes.ACTIVE);
          });
        }

        this.leafItems[index].classList.add(classes.ACTIVE);

        this.previousActiveItems = [];
        this.previousActiveItemsIndex = []; // 记录活动元素 index

        this.previousActiveItems.push(this.leafItems[index]);
        this.previousActiveItemsIndex.push(getElementIndexOfParent(this.leafItems[index], this.filterDivider));
        let parentNode = this.leafItems[index].parentNode.parentNode;

        // 分支节点也设置 ACTIVE
        while (parentNode && parentNode.classList.contains(classes.LIST_ITEM)) {
          parentNode.classList.add(classes.ACTIVE);
          this.previousActiveItems.unshift(parentNode);
          this.previousActiveItemsIndex.unshift(getElementIndexOfParent(parentNode, this.filterDivider));
          parentNode = parentNode.parentNode.parentNode;
        }
      }, // 设置当前活动 item 样式
      clearActiveItem: () => {
        this.leafItems.forEach((item) => {
          item.classList.remove(classes.ACTIVE);
        });
      }, // 清空活动 item
      removeExpandClass: () => {
        this.element.querySelectorAll(strings.LIST_ITEM_BRANCH_SELECTOR).forEach((el) => {
          el.classList.remove(classes.EXPANDED);
        });
      },
      notifySelected: () => {
        this.emit(strings.SELECTED_EVENT, {
          index: this.previousActiveItemsIndex,
          leafIndex: this.activeItemIndex, // 叶子节点活动的 id
          items: this.previousActiveItems,
        });
      }, // 选中某一 item，通过注册的事件调用该方法
      notifyCancel: () => this.emit(strings.CANCEL_EVENT, {}),
      saveFocus: () => {
        this.previousFocus = dom.activeElement;
      },
      restoreFocus: () => {
        if (this.previousFocus) {
          this.previousFocus.focus();
        }
      },
      isFocused: () => dom.activeElement === this.element,
      focus: () => this.element.focus(),
      getFocusedItemIndex: () => this.items.indexOf(dom.activeElement),
      focusItemAtIndex: (index) => this.leafItems[index].focus(),
      setTransformOrigin: (origin) => {
        this.element.style[`${getTransformPropertyName(win)}-origin`] = origin;
      },
      setPosition: (position) => {
        this.element.style.left = 'left' in position ? position.left : null;
        this.element.style.right = 'right' in position ? position.right : null;
        this.element.style.top = 'top' in position ? position.top : null;
        this.element.style.bottom = 'bottom' in position ? position.bottom : null;
      },
      getAccurateTime: () => win.performance.now(), // 系统时间
    };
  }

  init() {
    const {ITEMS_SELECTOR, LIST_ITEM_SELECTOR, LIST_ITEM_LEAF_SELECTOR} = strings;

    // 返回菜单 item 根容器
    this.itemsContainer = this.element.querySelector(ITEMS_SELECTOR);
    // 返回菜单第一层 items 中的所有 item
    this.items = [].slice.call(this.itemsContainer.querySelectorAll(LIST_ITEM_SELECTOR));

    // 返回菜单 items 中的所有叶子节点item
    this.leafItems = [].slice.call(this.itemsContainer.querySelectorAll(LIST_ITEM_LEAF_SELECTOR));

    if (this.activeItemIndex === undefined && this.selectedFirstOption) {
      this.activeItemIndex = 0;
    }
  }

  // 渲染组件
  render() {
    const {ELEMENT, OPEN} = classes;

    if (!this.adapter.hasClass(ELEMENT)) {
      throw new Error(`列表菜单根节点需要设置 class ${ELEMENT}.`);
    }

    if (!this.adapter.hasNecessaryDom()) {
      throw new Error('列表菜单需要设置 items 元素节点.');
    }

    // 有 OPEN 样式时，表示打开状态
    if (this.adapter.hasClass(OPEN)) {
      this.isOpen = true;
    }

    // 先清空已经设置的 active
    this.adapter.clearActiveItem();
    // 设置当前活动的 item
    if (this.activeItemIndex !== undefined) {
      this.adapter.setActiveItemAtIndex(this.activeItemIndex);
    }

    this.addEventListeners();
  }

  unmount() {
    clearTimeout(this.selectedTriggerTimerId);
    // 取消当前进行的动画
    cancelAnimationFrame(this.animationRequestId);
    this.removeEventListeners();
  }

  // 设置监听事件
  addEventListeners() {
    this.element.addEventListener('click', this.handleClickMenu);
    this.element.addEventListener('keyup', this.handleKeyboardUp);
    this.element.addEventListener('keydown', this.handleKeyboardDown);
  }

  // 删除事件
  removeEventListeners() {
    this.element.removeEventListener('click', this.handleClickMenu);
    this.element.removeEventListener('keyup', this.handleKeyboardUp);
    this.element.removeEventListener('keydown', this.handleKeyboardDown);
    body.removeEventListener('click', this.handleDocumentClick);
    this.itemsContainer.removeEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleItemScroll);
  }

  // 设置活动的元素
  setActiveItemAtIndex(index) {
    if (index !== undefined && index !== null) {
      this.activeItemIndex = index;
      this.adapter.setActiveItemAtIndex(index);
    }
  }

  /**
   * @param {!Event} e
   * @private
   */
  handleClickMenu = (e) => {
    const {target} = e;
    const {ARIA_DISABLED_ATTR, ARIA_LEVEL_ATTR, ARIA_LEVEL_BRANCH} = strings;
    // disabled 返回
    if (target.getAttribute(ARIA_DISABLED_ATTR) === 'true') {
      return;
    }

    // 点击分支节点
    if (target.getAttribute(ARIA_LEVEL_ATTR) === ARIA_LEVEL_BRANCH) {
      // 删除兄弟节点展开样式
      let node = target.parentNode.firstElementChild;
      while (node) {
        node.classList.remove(classes.EXPANDED);
        node = node.nextElementSibling;
      }
      target.classList.add(classes.EXPANDED);
      return;
    }

    // 如果点击的是其他非叶子节点，则返回
    const targetIndex = this.leafItems.indexOf(target);
    if (targetIndex < 0) {
      return;
    }

    // 防抖处理，防止多次点击
    if (this.selectedTriggerTimerId) {
      return;
    }

    // 动画结束后隐藏
    this.selectedTriggerTimerId = setTimeout(() => {
      this.selectedTriggerTimerId = 0;
      this.hide();

      // 去掉展开的级联节点
      this.adapter.removeExpandClass();
      this.adapter.setActiveItemAtIndex(targetIndex);
      this.adapter.notifySelected();
    }, numbers.SELECTED_TRIGGER_DELAY);
  };

  /**
   * 处理键盘事件，对于 Enter, Space, Escape 需特殊处理
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  handleKeyboardUp = (evt) => {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const {keyCode, key} = evt;
    const isEnter = key === 'Enter' || keyCode === 13;
    const isSpace = key === 'Space' || keyCode === 32;
    const isEscape = key === 'Escape' || keyCode === 27;

    if (isEnter || isSpace) {
      this.handleClickMenu(evt);
    }

    if (isEscape) {
      this.adapter.notifyCancel();
      this.close();
    }

    return true;
  };

  /**
   * 处理键盘事件 tab 和 arrows
   * @param {!Event} evt
   * @return {boolean}
   * @private
   */
  /*eslint-disable complexity*/
  handleKeyboardDown = (evt) => {
    // Do nothing if Alt, Ctrl or Meta are pressed.
    if (evt.altKey || evt.ctrlKey || evt.metaKey) {
      return true;
    }

    const {keyCode, key, shiftKey} = evt;
    const isTab = key === 'Tab' || keyCode === 9;
    const isArrowUp = key === 'ArrowUp' || keyCode === 38;
    const isArrowDown = key === 'ArrowDown' || keyCode === 40;
    const isSpace = key === 'Space' || keyCode === 32;

    const focusedItemIndex = this.adapter.getFocusedItemIndex();
    const lastItemIndex = this.adapter.getNumberOfItems() - 1;

    if (shiftKey && isTab && focusedItemIndex === 0) {
      this.adapter.focusItemAtIndex(lastItemIndex);
      evt.preventDefault();
      return false;
    }

    if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
      this.adapter.focusItemAtIndex(0);
      evt.preventDefault();
      return false;
    }

    // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
    if (isArrowUp || isArrowDown || isSpace) {
      evt.preventDefault();
    }

    if (isArrowUp) {
      if (focusedItemIndex === 0 || this.adapter.isFocused()) {
        this.adapter.focusItemAtIndex(lastItemIndex);
      } else {
        this.adapter.focusItemAtIndex(focusedItemIndex - 1);
      }
    } else if (isArrowDown) {
      if (focusedItemIndex === lastItemIndex || this.adapter.isFocused()) {
        this.adapter.focusItemAtIndex(0);
      } else {
        this.adapter.focusItemAtIndex(focusedItemIndex + 1);
      }
    }

    return true;
  };

  /**
   * 当点击非菜单区域时，隐藏菜单列表
   * @param {!Event} evt
   * @private
   */
  handleDocumentClick = (evt) => {
    let el = evt.target;

    while (el && el !== dom.documentElement) {
      if (this.adapter.eventTargetHasClass(el, classes.LIST_ITEM)) {
        return;
      }
      el = el.parentNode;
    }

    this.adapter.notifyCancel();

    const expandedEl = this.element.querySelectorAll(strings.EXPANDED);

    [].forEach.call(expandedEl, (el) => {
      el.classList.remove(classes.EXPANDED);
    });

    this.items.forEach((el) => {
      el.style.removeProperty('display');
    });

    this.hide(evt);
  };

  /**
   * 滚动菜单列表时触发
   * @param evt
   */
  handleItemScroll = (evt) => {
    const step = 10;

    if (this.visibleItemHeight <= this.maxItemHeight) {
      evt.preventDefault();
      evt.stopPropagation();
    }

    // 判断鼠标滑轮向上还是向下滑动
    let upDown;
    const {detail, wheelDelta} = evt;
    if (detail) {
      if (detail < 0) { // up
        upDown = 'up';
      } else if (detail > 0) { // down
        upDown = 'down';
      }
    } else if (wheelDelta) { //
      if (wheelDelta > 0) { // up
        upDown = 'up';
      }
      if (wheelDelta < 0) { // down
        upDown = 'down';
      }
    }

    const {transform} = this.itemsContainer.style;

    let y = reg.exec(transform);
    y = y ? parseFloat(y[1], 10) : 0;

    if ((upDown === 'up' && y === 0) || (upDown === 'down' && Math.abs(y) === this.maxOffset)) {
      return;
    }

    if (upDown === 'up' && y < 0) {
      this.itemsContainer.style.transform = `translateY(${Math.min(y + step, 0)}px)`;
    } else if (upDown === 'down' && Math.abs(y) < this.maxOffset) {
      this.itemsContainer.style.transform = `translateY(${Math.max(y - step, -this.maxOffset)}px)`;
    }
  };

  /** @param {{focusIndex: ?number}=} options */
  show({focusIndex = null} = {}) {
    // 设置当前焦点元素
    this.adapter.saveFocus();
    this.adapter.addClass(classes.ANIMATING);
    this.animationRequestId = requestAnimationFrame(() => {
      this.dimensions = this.adapter.getInnerDimensions();
      this.adjustMenuMaxHeight();
      this.applyTransitionDelays();
      this.autoPosition();
      this.animateMenu();
      this.adapter.addClass(classes.OPEN);
      this.focusOnOpen(focusIndex);

      // 添加 document 事件
      body.addEventListener('click', this.handleDocumentClick);
      // http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
      this.itemsContainer.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleItemScroll);
    });
    this.isOpen = true;
  }

  /**
   *  关闭隐藏菜单
   * @param {Event=} evt
   */
  hide(evt = null) {
    const disabled = evt ?
      evt.target.getAttribute(strings.ARIA_DISABLED_ATTR) === 'true' :
      false;

    if (disabled) {
      return;
    }

    body.removeEventListener('click', this.handleDocumentClick);
    // 添加动画 class
    this.adapter.addClass(classes.ANIMATING);

    requestAnimationFrame(() => {
      this.removeTransitionDelays();
      this.animateMenu();
      this.adapter.removeClass(classes.OPEN);
    });
    this.isOpen = false;
    // 把焦点定位到上一个焦点
    this.adapter.restoreFocus();
  }

  /**
   * 计算 Item 的高度
   */
  calcItemHeight() {
    const property = window.getComputedStyle(this.items[0]);
    const lineHeight = property.getPropertyValue('line-height');
    const paddingTop = property.getPropertyValue('padding-top');
    const paddingBottom = property.getPropertyValue('padding-bottom');

    return parseInt(lineHeight, 10) + parseInt(paddingTop, 10) + parseInt(paddingBottom, 10);
  }

  /**
   * 调整菜单高度
   */
  adjustMenuMaxHeight() {
    const rect = this.itemsContainer.getBoundingClientRect();
    const {height} = this.adapter.getWindowDimensions();
    const itemHeight = this.calcItemHeight();
    const maxHeight = height - rect.top;
    const visibleItemNum = Math.floor(maxHeight / itemHeight);
    this.visibleItemHeight = visibleItemNum * itemHeight;
    this.maxItemHeight = this.items.length * itemHeight;

    this.itemsContainer.style.setProperty('height', `${this.visibleItemHeight}px`);
    // 隐藏多余的 item
    for (let i = visibleItemNum; i < this.items.length; i++) {
      this.items[i].style.setProperty('display', 'none');
    }
  }

  /**
   * Calculates transition delays for individual menu items, so that they fade in one at a time.
   * @private
   */
  applyTransitionDelays() {
    const {BOTTOM_LEFT, BOTTOM_RIGHT} = classes;
    const numItems = this.adapter.getNumberOfItems();
    const {height} = this.dimensions;
    const transitionDuration = numbers.TRANSITION_DURATION_MS / 1000;
    const start = numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

    for (let index = 0; index < numItems; index++) {
      const {top: itemTop, height: itemHeight} = this.adapter.getYParamsForItemAtIndex(index);
      this.itemHeight = itemHeight;
      let itemDelayFraction = itemTop / height;
      if (this.adapter.hasClass(BOTTOM_LEFT) || this.adapter.hasClass(BOTTOM_RIGHT)) {
        itemDelayFraction = ((height - itemTop - itemHeight) / height);
      }
      const itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
      // Use toFixed() here to normalize CSS unit precision across browsers
      this.adapter.setTransitionDelayForItemAtIndex(index, `${itemDelay.toFixed(3)}s`);
    }
  }

  /** @private */
  // 自动计算位置
  autoPosition() {
    if (!this.adapter.hasAnchor()) {
      return;
    }

    // Defaults: open from the top left.
    let vertical = 'top';
    let horizontal = 'left';

    const anchor = this.adapter.getAnchorDimensions();
    const windowDimensions = this.adapter.getWindowDimensions();

    const topOverflow = anchor.top + this.dimensions.height - windowDimensions.height;
    const bottomOverflow = this.dimensions.height - anchor.bottom;
    const extendsBeyondTopBounds = topOverflow > 0;

    if (extendsBeyondTopBounds) {
      if (bottomOverflow < topOverflow) {
        vertical = 'bottom';
      }
    }

    const leftOverflow = anchor.left + this.dimensions.width - windowDimensions.width;
    const rightOverflow = this.dimensions.width - anchor.right;
    const extendsBeyondLeftBounds = leftOverflow > 0;

    if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
      horizontal = 'right';
    }

    const position = {
      [horizontal]: '0',
      [vertical]: '0',
    };

    this.adapter.setTransformOrigin(`${vertical} ${horizontal}`);
    this.adapter.setPosition(position);
  }

  /**
   * @param {?number} focusIndex
   * @private
   */
  focusOnOpen(focusIndex) {
    if (focusIndex === null) {
      // First, try focusing the menu.
      this.adapter.focus();
      // If that doesn't work, focus first item instead.
      if (!this.adapter.isFocused()) {
        this.adapter.focusItemAtIndex(0);
      }
    } else {
      this.adapter.focusItemAtIndex(focusIndex);
    }
  }

  /**
   * 删除菜单动画延迟，设置 transition-delay 为 null
   * @private
   */
  removeTransitionDelays() {
    const numItems = this.adapter.getNumberOfItems();
    for (let i = 0; i < numItems; i++) {
      this.adapter.setTransitionDelayForItemAtIndex(i, null);
    }
  }

  /**
   * 设置打开或关闭菜单动画
   * @private
   */
  animateMenu() {
    this.startTime = this.adapter.getAccurateTime();
    this.startScaleX = this.scaleX;
    this.startScaleY = this.scaleY;

    this.targetScale = this.isOpen ? 1 : 0;

    // 处理菜单动画
    if (!this.running) {
      this.running = true;
      this.animationRequestId = requestAnimationFrame(() => this.animationLoop());
    }
  }

  /**
   * 循环处理菜单动画
   * @private
   */
  animationLoop() {
    const time = this.adapter.getAccurateTime();
    const {
      TRANSITION_DURATION_MS, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2,
      TRANSITION_SCALE_ADJUSTMENT_X, TRANSITION_SCALE_ADJUSTMENT_Y,
    } = numbers;

    const currentTime = clamp((time - this.startTime) / TRANSITION_DURATION_MS);

    // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
    let currentTimeX = clamp(
      (currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X),
    );
    // No time-shifting on the Y axis when closing.
    let currentTimeY = currentTime;

    let startScaleY = this.startScaleY;
    if (this.targetScale === 1) {
      // Start with the menu at the height of a single item.
      if (this.itemHeight) {
        startScaleY = Math.max(this.itemHeight / this.dimensions.height, startScaleY);
      }
      // X axis moves faster, so time-shift forward.
      currentTimeX = clamp(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
      // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
      currentTimeY = clamp(
        (currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y),
      );
    }

    // 为 X 和 Y 轴方向设置贝塞尔曲线
    const easeX = bezierProgress(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
    const easeY = bezierProgress(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

    // Calculate the scales to apply to the outer container and inner container.
    this.scaleX = this.startScaleX + (this.targetScale - this.startScaleX) * easeX;
    const invScaleX = 1 / (this.scaleX === 0 ? 1 : this.scaleX);
    this.scaleY = startScaleY + (this.targetScale - startScaleY) * easeY;
    const invScaleY = 1 / (this.scaleY === 0 ? 1 : this.scaleY);

    // 改变 scale
    this.adapter.setScale(this.scaleX, this.scaleY);
    this.adapter.setInnerScale(invScaleX, invScaleY);

    // Stop animation when we've covered the entire 0 - 1 range of time.
    // 如果不在 0 到 1 之间则停止动画
    if (currentTime < 1) {
      this.animationRequestId = requestAnimationFrame(() => this.animationLoop());
    } else {
      this.animationRequestId = 0;
      this.running = false;
      this.adapter.removeClass(classes.ANIMATING);
    }
  }

}

export default ListMenu;
