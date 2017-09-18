import perfect from './perfect';
import util from './util';
const {getUuid, isWheel, offset, position} = util;

const ScrollSpy = ((perfect) => {
  const win = window;
  const doc = document;
  const {forEach, map} = Array.prototype;

  class ScrollSpy {
    static defaultConfig = {
      offset: 0,
      method: 'auto',
      menu: '', // 菜单导航
      menuCls: null, // 自定义菜单样式
      menuClsPrefix: 'menu', // 菜单样式前缀
      container: null, // 需要监听的内容容器
      immedLoad: true, // 是否立即监听，如果设为 false， 则通过滑动鼠标来激活监听
      prefix: 'menu-', // 导航目录前缀
      anchor: true, // 是否用锚点来控制，默认用锚点处理
      animation: true, // 是否开启动画
      extend: false, // 默认菜单没有展开
    };

    constructor(element, config = {}) {
      this.element = element;
      this.scrollElement = element.tagName === 'BODY' ? win : element;
      this.config = this.getConfig(config);
      const {menu, menuClsPrefix, extend} = this.config;
      // 菜单 目录 等选择器
      this.menuSelector = `${menu} .${menuClsPrefix}-title`;
      this.offsets = [];
      this.targets = [];
      this.activeTarget = null;
      this.scrollHeight = 0;

      // 如果默认不展开，则用样式来控制
      if (!extend) {
        const extendStyle = doc.createElement('style');
        extendStyle.innerHTML = `
          .menu-catalogue .menu-catalogue {
            display: none;
          }
          .active + .menu-catalogue {
            display: block;
          }`;
        doc.getElementsByTagName('head')[0].append(extendStyle);
      }

      // 添加事件，页面滚动时，处理目录和内容对应坐标
      this.scrollElement.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.scrollEvent, false);
      const {immedLoad, initMenus, anchor} = this.config;
      // 需要根据内容动态创建菜单列表
      if (initMenus) {
        this.generateMenus();
      }

      // 菜单面板
      this.menuPanel = `${menu} .${menuClsPrefix}.${menuClsPrefix}-catalogue`;
      this.$menuPanel = doc.querySelector(this.menuPanel);

      // 不用锚点处理的情况
      if (anchor === false) {
        // fixme 待改进，改成 事件代理模式
        const menuElements = doc.querySelectorAll(this.menuSelector);
        forEach.call(menuElements, (element) => {
          element.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const el = e.currentTarget;
            const {menu} = el.dataset;
            const {offsetMethod, container} = this.config;
            const offsetXY = this.config.offset;

            const targetEl = doc.querySelector(`${container} [data-target="${menu}"]`).parentNode;
            const top = offsetMethod === 'offset' ? offset(targetEl).top : position(targetEl).top;
            const offsetBase = offsetMethod === 'position' ? this.getScrollTop() : 0;

            // fixme
            this.scrollElement.scrollTo(0, top + offsetBase - offsetXY);
            el.blur();
            this.process();
          }, false);
        });
      }

      // 加载插件
      const {pluginConfig} = this.config;
      let {plugins} = this.config;
      if (plugins) {
        if (!Array.isArray(plugins)) {
          plugins = [plugins];
        }
        this.plugins = [];
        const {container} = this.config;
        plugins.forEach((plugin) => {
          // 把当前实例传给插件
          const instance = new plugin(this, pluginConfig);
          instance.mount();
          this.plugins.push(instance);
        });
      }

      // 显示菜单
      // doc.querySelector(menu).style.display = 'block';
      if (immedLoad) {
        this.refresh();
        this.process();
      }
    }

    getConfig(config) {
      const _config = {...ScrollSpy.defaultConfig, ...config};

      const {menu} = _config;
      let {container} = _config;

      if (typeof menu !== 'string') { // dom 对象
        let {id} = menu;
        if (!id) {
          id = getUuid('scrollspy');
          menu.id = id;
        }
        _config.menu = `#${id}`;
      }

      if (!container) {
        container = doc.body; // 默认取 body
      }
      if (typeof container !== 'string') {
        let {id} = container;
        if (!id) {
          id = getUuid('scrollspy');
          container.id = id;
        }
        _config.container = `#${id}`;
      }

      const autoMethod = this.scrollElement !== this.scrollElement.window ?
        'position' :
        'offset';

      const offsetMethod = _config.method === 'auto' ?
        autoMethod :
        _config.method;

      _config.offsetMethod = offsetMethod;

      return _config;
    }

    /**
     * 动态创建菜单
     */
    generateMenus() {
      const menus = this.element.querySelectorAll('h1,h2,h3,h4,h5,h6');
      // 初始化根节点
      const entries = {
        level: 0,
        children: [],
        depth: 0,
        parent: null,
        text: null,
        root: true
      };

      // 前一个元素 level
      let prevLevel = 0;
      // 上一个节点
      let lastNode = null;

      forEach.call(menus, (el, index) => {
        let entry = null;
        const level = 7 - parseInt(el.tagName[1], 10);
        const text = el.innerHTML;

        if (index === 0) {
          // 初始化第一个元素
          entry = {
            level,
            children: [],
            depth: 1,
            parent: entries,
            text,
            el
          };
          entries.children.push(entry);
        } else {
          if (level === prevLevel) { // 相等的话
            entry = {
              level,
              children: [],
              depth: lastNode.depth,
              parent: lastNode.parent,
              text,
              el
            };
            lastNode.parent.children.push(entry);
          } else if (level < prevLevel) { // 如果当前级别小于前一个
            entry = {
              level,
              children: [],
              depth: lastNode.depth + 1,
              parent: lastNode,
              text,
              el
            };
            lastNode.children.push(entry);
          } else { // 如果当前级别大于前一个 查找祖先节点
            let ancestor = lastNode.parent;
            while (ancestor.level <= level && !ancestor.root) {
              ancestor = ancestor.parent;
            }
            entry = {
              level,
              children: [],
              depth: ancestor.depth + 1,
              parent: ancestor,
              text,
              el
            };
            ancestor.children.push(entry);
          }
        }
        lastNode = entry;
        prevLevel = level;
      });

      const html = this.generateMenusHtml(entries.children, this.config.prefix);
      doc.querySelector(this.config.menu).innerHTML = html;
    }

    /**
     * 根据 nodes 节点 生成 html
     * @param nodes
     * @param prefix
     * @return {string}
     */
    generateMenusHtml(nodes, prefix) {
      const {menuClsPrefix, menuCls} = this.config;
      let html = '';
      if (nodes && nodes.length > 0) {
        html = `<ul class="${menuClsPrefix} ${menuClsPrefix}-catalogue${menuCls ? ` ${menuCls}` : ''}">`;
        for (let i = 0, len = nodes.length; i < len; i++) {
          const node = nodes[i];
          // 为对应的内容加锚点
          const newChild = document.createElement('a');
          newChild.id = prefix + (i + 1);
          newChild.className = `${menuClsPrefix}-anchor`;
          if (this.config.anchor) {
            newChild.href = `#${prefix + (i + 1)}`;
          } else {
            newChild.dataset.menu = `${prefix + (i + 1)}`;
          }

          newChild.setAttribute('aria-hidden', true);
          node.el.insertBefore(newChild, node.el.firstChild);

          html += '<li>';
          if (this.config.anchor) {
            html += `<a class="${menuClsPrefix}-title" href="#${prefix}${i + 1}">${node.text}</a>`;
          } else { // 用 data-target 来控制，需要结合 js 来控制
            html += `<a class="${menuClsPrefix}-title" data-target="${prefix}${i + 1}" href="#">${node.text}</a>`;
          }
          if (node.children && node.children.length > 0) {
            html += this.generateMenusHtml(node.children, `${prefix}${i + 1}-`);
          }
          html += '</li>';
        }
        html += '</ul>';
      }
      return html;
    }

    /**
     * 滚动页面时，刷新相关数据
     */
    refresh() {
      const {offsetMethod} = this.config;
      const offsetBase = offsetMethod === 'position' ? this.getScrollTop() : 0;

      this.offsets = [];
      this.targets = [];
      this.scrollHeight = this.getScrollHeight();


      // 把滚动监听的元素和坐标保存到offsets和targets中
      const menuElements = doc.querySelectorAll(this.menuSelector);

      map.call(menuElements, (element) => {
        // 目标元素
        let target = null;
        const {anchor, container} = this.config;
        const selector = anchor ? element.getAttribute('href') : element.dataset.menu;
        const targetSelector = anchor ?
          element.getAttribute('href') :
          `${container} [data-target="${element.dataset.menu}"]`;

        if (targetSelector) {
          target = doc.querySelector(targetSelector).parentNode;
          const targetBCR = target.getBoundingClientRect();
          if (targetBCR.width || targetBCR.height) {
            return [
              (offsetMethod === 'offset' ? offset(target).top : position(target).top) + offsetBase,
              selector
            ];
          }
        }
        return null;
      }).sort((a, b) => {
        if (!a || !b) {
          return 0;
        }
        return a[0] - b[0];
      }).forEach((item) => {
        if (item) {
          this.offsets.push(item[0]);
          this.targets.push(item[1]);
        }
      });
    }

    // 鼠标滚动事件
    scrollEvent = (event) => {
      this.process();
    };

    /**
     * 滚动时触发该方法
     * @returns {boolean|*}
     */
    process() {
      // 需要加 1 微调
      const scrollTop = this.getScrollTop() + this.config.offset + 1;
      const scrollHeight = this.getScrollHeight();
      const maxScroll = this.config.offset
        + scrollHeight
        - this.getOffsetHeight();

      // 不相等的话，重新刷新，比如改变页面窗口后
      if (this.scrollHeight !== scrollHeight) {
        this.refresh();
      }

      // 滑到底部
      if (scrollTop >= maxScroll) {
        // 取最后一个
        const target = this.targets[this.targets.length - 1];

        if (this.activeTarget !== target) {
          this.activate(target);
        }
        return;
      }

      // 滑到头部
      if (this.activeTarget && scrollTop < this.offsets[0] && this.offsets[0] > 0) {
        this.activeTarget = null;
        this.clearActiveCls();
        return;
      }

      for (let i = this.offsets.length; i--;) {
        const isActiveTarget = this.activeTarget !== this.targets[i]
          && scrollTop >= this.offsets[i]
          && (this.offsets[i + 1] === undefined ||
          scrollTop < this.offsets[i + 1]);

        if (isActiveTarget) {
          this.activate(this.targets[i]);
        }
      }
    }

    /**
     * 设置当前活动的内容
     * @param target
     */
    activate(target) {
      this.activeTarget = target;

      this.clearActiveCls();

      const {anchor} = this.config;
      let queries = this.menuSelector.split(',');
      const lastSelector = []; // 最后一个菜单项，即当前的子节点
      // 当前选中的和父目录都添加活动样式
      const parentEls = target.split('-');
      queries = queries.map((query) => {
        const selector = [];
        let catalog = '';
        parentEls.forEach((it, index) => {
          if (index === 0) {
            catalog += it;
          } else {
            catalog += `-${it}`;
            selector.push(anchor ? `${query}[href="${catalog}"]` : `${query}[data-menu="${catalog}"]`);
          }
        });
        lastSelector.push(selector[selector.length - 1]);
        return selector.join(',');
      });

      const $link = doc.querySelectorAll(queries.join(','));

      for (let i = 0, len = $link.length; i < len; i++) {
        $link[i].classList.add('active');
      }

      this.plugins.forEach((plugin) => {
        if (typeof plugin.scrollMenu === 'function') {
          plugin.scrollMenu(lastSelector);
        }
      });

      // todo 事件，待补充

      /* $(this._scrollElement).trigger(Event.ACTIVATE, {
       relatedTarget: target
       }) */
    }

    clearActiveCls() {
      // 删除当前活动样式
      const activeEls = doc.querySelectorAll(`${this.menuSelector}.active`);
      if (activeEls) {
        for (let i = 0, len = activeEls.length; i < len; i++) {
          activeEls[i].classList.remove('active');
        }
      }
    }

    // 卸载
    unmount() {
      // $.removeData(this._element, DATA_KEY)
      this.scrollElement.removeEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.scrollEvent, false);

      this.element = null;
      this.scrollElement = null;
      this.config = null;
      this.menu = null;
      this.menuSelector = null;
      this.container = null;
      this.offsets = null;
      this.targets = null;
      this.activeTarget = null;
      this.scrollHeight = null;

      // 卸载插件
      if (this.plugins) {
        this.plugins.forEach((plugin) => {
          plugin.unmount();
        });
        this.plugins = null;
      }
    }

    getScrollTop() {
      return this.scrollElement === win ?
        this.scrollElement.pageYOffset :
        this.scrollElement.scrollTop;
    }

    getScrollHeight() {
      return this.scrollElement.scrollHeight ||
        Math.max(
          doc.body.scrollHeight,
          doc.documentElement.scrollHeight
        );
    }

    getOffsetHeight() {
      return this.scrollElement === win ?
        win.innerHeight :
        this.scrollElement.getBoundingClientRect().height;
    }

  }

  perfect.ScrollSpy = ScrollSpy;
  return ScrollSpy;
})(perfect);

export default ScrollSpy;
