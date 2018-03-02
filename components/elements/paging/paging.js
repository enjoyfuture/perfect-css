import Component from '../../base/component';

const win = window;
const dom = document;
const body = dom.body;

// 定义常量
// class 样式
export const classes = {
  PAGING_ITEM: 'paging-item',
  DISABLED: 'select-disabled',
  OPEN: 'select-open',
  SCROLL_LOCK: 'select-scroll-lock',
  SELECT_MENU_FIXED: 'select-menu-fixed',
};

export const strings = {
  SELECT_INNER: '.select-inner',
  CHANGE_EVENT: 'select:change',
  SELECT_MENU: '.select-menu',
  SELECT_SELECTED_TEXT: '.select-selected-text',
};

class Paging extends Component {

  static get classes() {
    return classes;
  }

  static get strings() {
    return strings;
  }

  /**
   * 静态方法实例化 Paging 组件
   * @param element
   * @param config
   * @returns {Select}
   */
  static mount(element, config) {
    return new Paging(element, config);
  }

  constructor(element, config) {
    super(element, config);
    // 当前页，从1开始，默认1
    if (this.pageNum === undefined) {
      this.pageNum = 1;
    }

    // 每页条数，默认10
    if (this.pageSize === undefined) {
      this.pageSize = 10;
    }

    // 总页码
    if (this.totalPage === undefined) {
      this.totalPage = 1;
    }

    // 加载数据回调函数
    // this.loadPageData = function() {}

    // 创建适配器
    this.adapter = this.createAdapter();

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
          valueText: this.valueText,
        });
      },
      getWindowInnerHeight: () => win.innerHeight,
      addBodyClass: (className) => body.classList.add(className),
      removeBodyClass: (className) => body.classList.remove(className),
    };
  }

  init() {
  }

  render() {
    this.addEventListeners();
    this.renderPage();
  }

  unmount() {
    this.removeEventListeners();
  }

  // 设置监听事件
  addEventListeners() {
    this.element.addEventListener('click', this.handleSwitchPage);
  }

  // 删除事件
  removeEventListeners() {
    this.selectInner.removeEventListener('click', this.handleSwitchPage);
  }

  handleSwitchPage = (evt) => {
    evt.preventDefault();
    const {target} = evt;

    const {classList} = target;

    if (classList.contains(classes.PAGING_ITEM)) { // 切换下一页逻辑
      const pageNum = parseInt(target.dataset.pagenum, 10);
      this.handleChangePage(pageNum);
    }
  };

  handleChangePage(pageNum) {
    if (pageNum <= 0 || pageNum > this.totalPage || this.totalPage === 1) {
      return;
    }

    if (this.loadPageData && typeof this.loadPageData === 'function') {
      this.loadPageData(pageNum).then(({totalPage, pageNum}) => {
        this.totalPage = totalPage;
        this.pageNum = pageNum;
        this.renderPage();
      });
    } else {
      this.pageNum = pageNum;
      this.renderPage();
    }
  }

  /**
   * 计算页码显示算法，返回一个页码数组
   * @returns {Array}
   */
  calculatePage() {
    const totalPage = this.totalPage;
    const pageNum = this.pageNum;

    const pageArray = [];
    if (totalPage < 8) {
      for (let i = 1; i <= totalPage; i++) {
        pageArray.push(i);
      }
    } else {
      pageArray.push(1);
      if (pageNum > 4) {
        pageArray.push('...');
      }

      if (pageNum < 4) {
        for (let i = 2; i <= 6; i++) {
          pageArray.push(i);
        }
      } else if (pageNum >= 4 && totalPage - pageNum >= 3) {
        for (let i = pageNum - 2; i <= pageNum + 2; i++) {
          pageArray.push(i);
        }
      } else {
        for (let i = totalPage - 4; i < totalPage; i++) {
          pageArray.push(i);
        }
      }

      //总页码 - 当前页 大于 3 显示
      if (totalPage - pageNum > 3) {
        pageArray.push('...');
      }
      pageArray.push(totalPage);
    }

    return pageArray;
  }

  renderPage() {
    const pageArray = this.calculatePage();

    let html = '<ul class="paging-items">';
    html += `<li class="paging-item${this.pageNum === 1 ? ' disabled' : ''}" data-pagenum="${this.pageNum - 1}">上一页</li>`;
    const pageItems = pageArray.map((item, index) => {
      if (item === '...') {
        return '<li class="paging-item paging-more"></li>';
      }
      return `<li class="paging-item${this.pageNum === item ? ' active' : ''}" data-pagenum="${item}">${item}</li>`;

    });
    html += pageItems.join('');
    html += `<li class="paging-item${this.pageNum === this.totalPage ? ' disabled' : ''}" data-pagenum="${this.pageNum + 1}">下一页</li>`;
    html += '</ul>';

    this.element.innerHTML = html;
  }
}

export default Paging;
