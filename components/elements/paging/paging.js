import Component from '../../base/component';

// 定义常量
// class 样式
export const classes = {
  PAGING_ITEM: 'paging-item',
  DISABLED: 'disabled',
  ACTIVE: 'active',
};

export const strings = {};

class Paging extends Component {

  /**
   * pagingControl 控制是否显示数据信息 {Boolean}
   * recordPerPage 是否显示改变每页记录数 {Boolean}
   * jumpControl 是否显示跳至某一页 {Boolean}
   * @type {{pagingControl: boolean, recordPerPage: boolean, jumpControl: boolean}}
   */
  static defaultConfig = {
    pagingControl: true,
    recordPerPage: true,
    jumpControl: true,
  };

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
    super(element, {...Paging.defaultConfig, ...config});
    // 当前页，从1开始，默认1
    if (this.pageNum === undefined) {
      this.pageNum = 1;
    }

    // 每页条数，默认10
    if (this.pageSize === undefined) {
      this.pageSize = 10;
    }

    // 总页码
    // this.totalPages

    // 总记录数
    // this.totalCount

    // 加载数据回调函数
    // this.loadPageData = function() {}

    // 控制是否显示数据信息 {Boolean}
    // this.pagingControl

    // 是否显示改变每页记录数 {Boolean}
    // this.recordPerPage

    // 是否显示跳至某一页 {Boolean}
    // this.jumpControl

    // 创建适配器
    this.adapter = this.createAdapter();

    this.render();
  }

  /**
   * 封装适配器方法
   * @return {object}
   */
  createAdapter() {
    return {};
  }

  init() {
  }

  render() {
    this.addEventListeners();
    this.loadData();
  }

  unmount() {
    this.removeEventListeners();
  }

  // 设置监听事件
  addEventListeners() {
    this.element.addEventListener('click', this.handleSwitchPage);
    this.element.addEventListener('change', this.handleChangePerPage);
  }

  // 删除事件
  removeEventListeners() {
    this.element.removeEventListener('click', this.handleSwitchPage);
    this.element.addEventListener('change', this.handleChangePerPage);
  }

  handleSwitchPage = (evt) => {
    evt.preventDefault();
    const {target} = evt;

    const {classList} = target;

    if (classList.contains(classes.PAGING_ITEM)) { // 切换下一页逻辑
      const pageNum = parseInt(target.dataset.pagenum, 10);
      this.handleChangePage(pageNum);
    } else if (classList.contains('js-jump-btn')) {
      const input = target.parentNode.previousElementSibling.children[0].children[0];
      const pageNum = parseInt(input.value, 10);
      if (!Number.isNaN(pageNum)) {
        this.handleChangePage(pageNum);
      }
    }
  };

  handleChangePerPage = (evt) => {
    evt.preventDefault();
    const {target} = evt;

    const {classList} = target;

    if (classList.contains('select-inner')) { // 切换下一页逻辑
      const pageSize = parseInt(target.value, 10);
      this.pageSize = pageSize;
      this.loadData();
    }
  };

  loadData(pageNum = 1) {
    // 渲染数据
    if (this.loadPageData && typeof this.loadPageData === 'function') {
      this.loadPageData(pageNum, this.pageSize).then((json) => {
        const {totalCount, totalPages} = json.data;
        this.totalPages = totalPages;
        this.pageNum = pageNum;
        this.totalCount = totalCount;
        this.renderPaging();
      });
    } else {
      this.pageNum = pageNum;
      this.renderPaging();
    }
  }

  handleChangePage(pageNum) {
    if (this.totalPages === 1) {
      return;
    }
    if (pageNum <= 1) {
      pageNum = 1;
    }

    if (pageNum >= this.totalPages) {
      pageNum = this.totalPages;
    }

    this.loadData(pageNum);
  }

  /**
   * 计算页码显示算法，返回一个页码数组
   * @returns {Array}
   */
  calculatePage() {
    const totalPages = this.totalPages;
    const pageNum = this.pageNum;

    const pageArray = [];
    if (totalPages < 8) {
      for (let i = 1; i <= totalPages; i++) {
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
      } else if (pageNum >= 4 && totalPages - pageNum >= 3) {
        for (let i = pageNum - 2; i <= pageNum + 2; i++) {
          pageArray.push(i);
        }
      } else {
        for (let i = totalPages - 4; i < totalPages; i++) {
          pageArray.push(i);
        }
      }

      //总页码 - 当前页 大于 3 显示
      if (totalPages - pageNum > 3) {
        pageArray.push('...');
      }
      pageArray.push(totalPages);
    }

    return pageArray;
  }

  renderPaging() {
    const pageArray = this.calculatePage();

    let html = '<ul class="paging-items">';
    html += `<li class="paging-item${this.pageNum === 1 ? ` ${classes.DISABLED}` : ''}" data-pagenum="${this.pageNum - 1}">上一页</li>`;
    const pageItems = pageArray.map((item, index) => {
      if (item === '...') {
        return '<li class="paging-item paging-more"></li>';
      }
      return `<li class="paging-item${this.pageNum === item ? ` ${classes.ACTIVE}` : ''}" data-pagenum="${item}">${item}</li>`;

    });
    html += pageItems.join('');
    html += `<li class="paging-item${this.pageNum === this.totalPages ? ` ${classes.DISABLED}` : ''}" data-pagenum="${this.pageNum + 1}">下一页</li>`;
    html += '</ul>';

    if (this.pagingControl) {
      html += this.renderPagingControl();
    }
    this.element.innerHTML = html;
  }

  renderPagingControl() {
    let html = '<ul class="paging-control">';
    html += `<li class="paging-control-item">共${this.totalPages}页${this.totalCount || 0}条记录,</li>`;

    if (this.recordPerPage) {
      html += `<li class="paging-control-item">
        每页
        <div class="select">
        <select class="select-inner">
          <option value="5"${this.pageSize === 5 ? ' selected' : ''}>5</option>
          <option value="10"${this.pageSize === 10 ? ' selected' : ''}>10</option>
          <option value="20"${this.pageSize === 20 ? ' selected' : ''}>20</option>
          <option value="50"${this.pageSize === 50 ? ' selected' : ''}>50</option>
          <option value="100"${this.pageSize === 100 ? ' selected' : ''}>100</option>
        </select>
        </div>
      条,
    </li>`;
    }

    if (this.jumpControl) {
      html += `<li class="paging-control-item">
        跳至
        <div class="input">
          <input type="text" class="input-field"/>
        </div>
        页
      </li>
      <li class="paging-control-item">
        <a href="" class="btn btn-raised btn-primary btn-sm js-jump-btn">确定</a>
      </li>`;
    }

    html += '</ul>';

    return html;
  }
}

export default Paging;
