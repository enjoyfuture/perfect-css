import Component from '../../base/component';
import ListMenu from '../../elements/menu/list-menu/list-menu';

const win = window;
const dom = document;
const body = dom.body;

// 返回已选中的根 root option
function getRootSelectedOption(el) {
  const parentEl = el.parentNode.parentNode;
  if (parentEl.classList.contains('list-menu')) {
    return el;
  }
  return getRootSelectedOption(parentEl);
}

// 定义常量
// class 样式
export const classes = {
  ELEMENT: 'select',
  DISABLED: 'select-disabled',
  OPEN: 'select-open',
  SCROLL_LOCK: 'select-scroll-lock',
};

export const strings = {
  SELECT_INNER: '.select-inner',
  CHANGE_EVENT: 'select:change',
  SELECT_MENU: '.select-menu',
  SELECT_SELECTED_TEXT: '.select-selected-text',
};

const openerKeys = [
  {key: 'ArrowUp', keyCode: 38, forType: 'keydown'},
  {key: 'ArrowDown', keyCode: 40, forType: 'keydown'},
  {key: 'Space', keyCode: 32, forType: 'keyup'},
];

class Select extends Component {

  static get classes() {
    return classes;
  }

  static get strings() {
    return strings;
  }

  /**
   * 静态方法实例化 Select 组件
   * @param element
   * @returns {Select}
   */
  static mount(element) {
    return new Select(element);
  }

  get value() {
    return this.getSelectedValue ? this.getSelectedValue() : '';
  }

  get options() {
    // 返回叶子节点作为 options
    return this.menu.leafItems;
  }

  // 返回已经选中的 select option，只处理可以多选的 select，FIXME
  get selectedOptions() {
    return this.element.querySelectorAll('[aria-selected]');
  }

  constructor(element, config) {
    super(element, config);

    // 创建适配器
    this.adapter = this.createAdapter();

    this.selectedIndex = -1; // 已选的 select option，指叶子节点索引
    this.disabled = false; // 是否禁用
    this.isFocused = false; // 获取焦点

    // 提供一个默认获取 select value 方法
    if (!this.getSelectedValue) {
      this.getSelectedValue = () => {
        const {selectedIndex} = this;
        if (selectedIndex > -1) {
          // 返回叶子节点 data-value 设置的值
          return this.options[selectedIndex].dataset.value;
        }
        return '';
      };
    }

    this.render();
    this.initialSyncWithDOM();
  }

  /**
   * 封装适配器方法
   * @return {object}
   */
  createAdapter() {
    return {
      addClass: (className) => this.element.classList.add(className),
      removeClass: (className) => this.element.classList.remove(className),
      setAttr: (attr, value) => this.element.setAttribute(attr, value),
      rmAttr: (attr) => this.element.removeAttribute(attr),
      computeBoundingRect: () => this.selectInner.getBoundingClientRect(),
      focus: () => this.selectInner.focus(),
      makeTabbable: () => {
        this.selectInner.tabIndex = 0;
      },
      makeUntabbable: () => {
        this.selectInner.tabIndex = -1;
      },
      setMenuElStyle: (propertyName, value) => this.menuEl.style.setProperty(propertyName, value),
      setMenuElAttr: (attr, value) => this.menuEl.setAttribute(attr, value),
      rmMenuElAttr: (attr) => this.menuEl.removeAttribute(attr),
      getMenuElOffsetHeight: () => this.menuEl.offsetHeight,
      openMenu: (focusIndex) => this.menu.show({focusIndex}),
      isMenuOpen: () => this.menu.open,
      setSelectedTextContent: (selectedTextContent) => {
        this.selectedText.textContent = selectedTextContent;
      },
      getNumberOfOptions: () => this.options.length,
      getTextForOptionAtIndex: (index) => this.options[index].textContent,
      setAttrForOptionAtIndex: (index, attr, value) => this.options[index].setAttribute(attr, value),
      rmAttrForOptionAtIndex: (index, attr) => this.options[index].removeAttribute(attr),
      getLeafOptionIndex: (item) => {
        const len = this.options.length;
        for (let i = 0; i < len; i++) {
          if (this.options[i] === item) {
            return i;
          }
        }
        return -1;
      },
      notifyChange: () => {
        const menu = this.menu;
        this.emit(strings.CHANGE_EVENT, {
          index: menu.previousActiveItemsIndex,
          items: menu.previousActiveItems,
          value: this.value,
        });
      },
      getWindowInnerHeight: () => win.innerHeight,
      addBodyClass: (className) => body.classList.add(className),
      removeBodyClass: (className) => body.classList.remove(className),
    };
  }

  // 默认 menuFactory 为 ListMenu
  init(menuFactory = (el) => new ListMenu(el)) {
    this.selectInner = this.element.querySelector(strings.SELECT_INNER);
    this.selectedText = this.element.querySelector(strings.SELECT_SELECTED_TEXT);
    this.menuEl = this.element.querySelector(strings.SELECT_MENU);
    this.menu = menuFactory(this.menuEl);
  }

  initialSyncWithDOM() {
    const selectedOption = this.selectedOptions[0];
    const idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
    if (idx > -1) {
      this.selectedIndex = idx;
    }

    if (this.element.getAttribute('aria-disabled') === 'true') {
      this.disabled = true;
    }
  }

  render() {
    this.addEventListeners();
  }

  unmount() {
    this.removeEventListeners();
  }

  // 设置监听事件
  addEventListeners() {
    this.selectInner.addEventListener('click', this.displayHandler);
    this.selectInner.addEventListener('keydown', this.handleDisplayKeyboard);
    this.selectInner.addEventListener('keyup', this.handleDisplayKeyboard);

    // 监听 ListMenu 事件
    this.menu.listen(ListMenu.strings.SELECTED_EVENT, this.selectionHandler);
    this.menu.listen(ListMenu.strings.CANCEL_EVENT, this.cancelHandler);

  }

  // 删除事件
  removeEventListeners() {
    this.selectInner.removeEventListener('click', this.displayHandler);
    this.selectInner.removeEventListener('keydown', this.handleDisplayKeyboard);
    this.selectInner.removeEventListener('keyup', this.handleDisplayKeyboard);

    // 监听 ListMenu 事件
    this.menu.unlisten(ListMenu.strings.SELECTED_EVENT, this.selectionHandler);
    this.menu.unlisten(ListMenu.strings.CANCEL_EVENT, this.cancelHandler);

  }

  item(index) {
    return this.options[index] || null;
  }

  displayHandler = (evt) => {
    evt.preventDefault();
    if (!this.adapter.isMenuOpen()) {
      this.open();
    }
  };

  handleDisplayKeyboard(evt) {
    // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
    // global.
    const EVENT_PHASE_AT_TARGET = 2;
    if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
      return;
    }

    // Prevent pressing space down from scrolling the page
    const isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
    if (isSpaceDown) {
      evt.preventDefault();
    }

    const isOpenerKey = openerKeys.some(({key, keyCode, forType}) => {
      return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
    });

    if (isOpenerKey) {
      this.displayHandler(evt);
    }
  }

  // ListMenu SELECTED_EVENT 事件
  selectionHandler = ({detail}) => {
    const {index, items} = detail;

    // 如果不相等
    if (!this.compareSelectedIndex(index)) {
      const len = items.length;
      const leafIndex = this.adapter.getLeafOptionIndex(items[len - 1]);
      this.setSelectedIndex(leafIndex);
      this.adapter.notifyChange();
    }
    this.close();
  };

  cancelHandler = () => {
    this.close();
  };

  getSelectedIndex() {
    return this.selectedIndex;
  }

  setSelectedIndex(index) {
    // 先删除上一次选择的 option
    const prevSelectedIndex = this.selectedIndex;
    if (prevSelectedIndex >= 0) {
      this.adapter.rmAttrForOptionAtIndex(this.selectedIndex, 'aria-selected');
    }

    this.selectedIndex = index >= 0 && index < this.adapter.getNumberOfOptions() ? index : -1;
    let selectedTextContent = '';
    if (this.selectedIndex >= 0) {
      selectedTextContent = this.adapter.getTextForOptionAtIndex(this.selectedIndex).trim();
      this.adapter.setAttrForOptionAtIndex(this.selectedIndex, 'aria-selected', 'true');
    }
    this.adapter.setSelectedTextContent(selectedTextContent);
  }

  isDisabled() {
    return this.disabled;
  }

  setDisabled(disabled) {
    const {DISABLED} = classes;
    this.disabled = disabled;
    if (this.disabled) {
      this.adapter.addClass(DISABLED);
      this.adapter.setAttr('aria-disabled', 'true');
      this.adapter.makeUntabbable();
    } else {
      this.adapter.removeClass(DISABLED);
      this.adapter.rmAttr('aria-disabled');
      this.adapter.makeTabbable();
    }
  }


  open() {
    this.disableScroll();
    const {OPEN} = classes;
    // 根据已选的叶子节点 this.selectedIndex 拿到第一层 select item
    const focusIndex = this.selectedIndex < 0 ? 0 : this.selectedIndex;
    const selectedRootOption = getRootSelectedOption(this.options[focusIndex]);

    this.setMenuStylesForOpen(selectedRootOption);
    this.adapter.addClass(OPEN);
    this.adapter.openMenu(focusIndex);
    this.isFocused = true;
  }


  close() {
    const {OPEN} = classes;
    this.adapter.removeClass(OPEN);
    this.adapter.focus();
    this.enableScroll();
  }

  setMenuStylesForOpen(selectedRootOption) {
    const innerHeight = this.adapter.getWindowInnerHeight();
    const {left, top} = this.adapter.computeBoundingRect();

    this.adapter.setMenuElAttr('aria-hidden', 'true');
    this.adapter.setMenuElStyle('display', 'block');
    const menuHeight = this.adapter.getMenuElOffsetHeight();
    const itemOffsetTop = selectedRootOption.offsetTop;
    this.adapter.setMenuElStyle('display', '');
    this.adapter.rmMenuElAttr('aria-hidden');

    let adjustedTop = top - itemOffsetTop;
    const overflowsTop = adjustedTop < 0;
    const overflowsBottom = adjustedTop + menuHeight > innerHeight;
    if (overflowsTop) {
      adjustedTop = 0;
    } else if (overflowsBottom) {
      adjustedTop = Math.max(0, innerHeight - menuHeight);
    }

    this.adapter.setMenuElStyle('left', `${left}px`);
    this.adapter.setMenuElStyle('top', `${adjustedTop}px`);
    this.adapter.setMenuElStyle('transform-origin', `center ${itemOffsetTop}px`);
  }

  nameditem(key) {
    // NOTE: IE11 precludes us from using Array.prototype.find
    for (let i = 0, options = this.options, option; (option = options[i]); i++) {
      if (option.id === key || option.getAttribute('name') === key) {
        return option;
      }
    }
    return null;
  }

  disableScroll() {
    this.adapter.addBodyClass(classes.SCROLL_LOCK);
  }

  enableScroll() {
    this.adapter.removeBodyClass(classes.SCROLL_LOCK);
  }

  compareSelectedIndex(index) {
    if (!this.selectedIndex || !index) {
      return false;
    }
    if (this.selectedIndex.length !== index.length) {
      return false;
    }
    const len = index.length;
    for (let i = 0; i < len; i++) {
      if (this.selectedIndex[i] !== index[i]) {
        return false;
      }
    }
    return true;
  }
}

export default Select;
