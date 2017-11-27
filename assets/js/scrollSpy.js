(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './perfect', './util'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./perfect'), require('./util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.perfect, global.util);
    global.scrollSpy = mod.exports;
  }
})(this, function (exports, _perfect, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _perfect2 = _interopRequireDefault(_perfect);

  var _util2 = _interopRequireDefault(_util);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var getUuid = _util2.default.getUuid,
      isWheel = _util2.default.isWheel,
      offset = _util2.default.offset,
      position = _util2.default.position;


<<<<<<< HEAD
  var ScrollSpy = function (perfect) {
    var win = window;
    var doc = document;
    var _Array$prototype = Array.prototype,
        forEach = _Array$prototype.forEach,
        map = _Array$prototype.map;

    var ScrollSpy = function () {
      function ScrollSpy(element) {
        var _this = this;

        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, ScrollSpy);

        this.scrollEvent = function (event) {
          _this.process();
        };

        this.element = element;
        this.scrollElement = element.tagName === 'BODY' ? win : element;
        this.config = this.getConfig(config);
        var _config2 = this.config,
            menu = _config2.menu,
            menuClsPrefix = _config2.menuClsPrefix,
            extend = _config2.extend;

        // 菜单 目录 等选择器
        this.menuSelector = menu + ' .' + menuClsPrefix + '-title';
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;

        // 如果默认不展开，则用样式来控制
        if (!extend) {
          var extendStyle = doc.createElement('style');
          extendStyle.innerHTML = '\n          .menu-catalogue .menu-catalogue {\n            display: none;\n          }\n          .active + .menu-catalogue {\n            display: block;\n          }';
          doc.getElementsByTagName('head')[0].append(extendStyle);
        }

        // 添加事件，页面滚动时，处理目录和内容对应坐标
        this.scrollElement.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.scrollEvent, false);
        var _config3 = this.config,
            immedLoad = _config3.immedLoad,
            initMenus = _config3.initMenus,
            anchor = _config3.anchor;

        // 需要根据内容动态创建菜单列表
        if (initMenus) {
          this.generateMenus();
        }

        // 菜单面板
        this.menuPanel = menu + ' .' + menuClsPrefix + '.' + menuClsPrefix + '-catalogue';
        this.$menuPanel = doc.querySelector(this.menuPanel);

        // 不用锚点处理的情况
        if (anchor === false) {
          // fixme 待改进，改成 事件代理模式
          var menuElements = doc.querySelectorAll(this.menuSelector);
          forEach.call(menuElements, function (element) {
            element.addEventListener('click', function (e) {
              e.preventDefault();
              e.stopPropagation();
              var el = e.currentTarget;
              var menu = el.dataset.menu;
              var _config4 = _this.config,
                  offsetMethod = _config4.offsetMethod,
                  container = _config4.container;

              var offsetXY = _this.config.offset;

              var targetEl = doc.querySelector(container + ' [data-target="' + menu + '"]').parentNode;
              var top = offsetMethod === 'offset' ? offset(targetEl).top : position(targetEl).top;
              var offsetBase = offsetMethod === 'position' ? _this.getScrollTop() : 0;

              // fixme
              _this.scrollElement.scrollTo(0, top + offsetBase - offsetXY);
              el.blur();
              _this.process();
            }, false);
          });
        }

        // 加载插件
        var pluginConfig = this.config.pluginConfig;
        var plugins = this.config.plugins;

        if (plugins) {
          if (!Array.isArray(plugins)) {
            plugins = [plugins];
          }
          this.plugins = [];
          var container = this.config.container;

          plugins.forEach(function (plugin) {
            // 把当前实例传给插件
            var instance = new plugin(_this, pluginConfig);
            instance.mount();
            _this.plugins.push(instance);
          });
        }

        // 显示菜单
        doc.querySelector(menu).style.display = 'block';
        if (immedLoad) {
          this.refresh();
          this.process();
        }
      }

      _createClass(ScrollSpy, [{
        key: 'getConfig',
        value: function getConfig(config) {
          var _config = _extends({}, ScrollSpy.defaultConfig, config);

          var menu = _config.menu;
          var container = _config.container;


          if (typeof menu !== 'string') {
            var id = menu.id;

            if (!id) {
              id = getUuid('scrollspy');
              menu.id = id;
            }
            _config.menu = '#' + id;
          }

          if (!container) {
            container = doc.body; // 默认取 body
          }
          if (typeof container !== 'string') {
            var _container = container,
                _id = _container.id;

            if (!_id) {
              _id = getUuid('scrollspy');
              container.id = _id;
            }
            _config.container = '#' + _id;
          }

          var autoMethod = this.scrollElement !== this.scrollElement.window ? 'position' : 'offset';

          var offsetMethod = _config.method === 'auto' ? autoMethod : _config.method;

          _config.offsetMethod = offsetMethod;

          return _config;
        }
      }, {
        key: 'generateMenus',
        value: function generateMenus() {
          var menus = this.element.querySelectorAll('h1,h2,h3,h4,h5,h6');
          // 初始化根节点
          var entries = {
            level: 0,
            children: [],
            depth: 0,
            parent: null,
            text: null,
            root: true
          };

          // 前一个元素 level
          var prevLevel = 0;
          // 上一个节点
          var lastNode = null;

          forEach.call(menus, function (el, index) {
            var entry = null;
            var level = 7 - parseInt(el.tagName[1], 10);
            var text = el.innerHTML;

            if (index === 0) {
              // 初始化第一个元素
              entry = {
                level: level,
                children: [],
                depth: 1,
                parent: entries,
                text: text,
                el: el
              };
              entries.children.push(entry);
            } else {
              if (level === prevLevel) {
                // 相等的话
                entry = {
                  level: level,
                  children: [],
                  depth: lastNode.depth,
                  parent: lastNode.parent,
                  text: text,
                  el: el
                };
                lastNode.parent.children.push(entry);
              } else if (level < prevLevel) {
                // 如果当前级别小于前一个
                entry = {
                  level: level,
                  children: [],
                  depth: lastNode.depth + 1,
                  parent: lastNode,
                  text: text,
                  el: el
                };
                lastNode.children.push(entry);
              } else {
                // 如果当前级别大于前一个 查找祖先节点
                var ancestor = lastNode.parent;
                while (ancestor.level <= level && !ancestor.root) {
                  ancestor = ancestor.parent;
                }
                entry = {
                  level: level,
                  children: [],
                  depth: ancestor.depth + 1,
                  parent: ancestor,
                  text: text,
                  el: el
                };
                ancestor.children.push(entry);
              }
            }
            lastNode = entry;
            prevLevel = level;
          });

          var html = this.generateMenusHtml(entries.children, this.config.prefix);
          doc.querySelector(this.config.menu).innerHTML = html;
        }
      }, {
        key: 'generateMenusHtml',
        value: function generateMenusHtml(nodes, prefix) {
          var _config5 = this.config,
              menuClsPrefix = _config5.menuClsPrefix,
              menuCls = _config5.menuCls;

          var html = '';
          if (nodes && nodes.length > 0) {
            html = '<ul class="' + menuClsPrefix + ' ' + menuClsPrefix + '-catalogue' + (menuCls ? ' ' + menuCls : '') + '">';
            for (var i = 0, len = nodes.length; i < len; i++) {
              var node = nodes[i];
              // 为对应的内容加锚点
              var newChild = document.createElement('a');
              newChild.id = prefix + (i + 1);
              newChild.className = menuClsPrefix + '-anchor';
              if (this.config.anchor) {
                newChild.href = '#' + (prefix + (i + 1));
              } else {
                newChild.dataset.menu = '' + (prefix + (i + 1));
              }

              newChild.setAttribute('aria-hidden', true);
              node.el.insertBefore(newChild, node.el.firstChild);

              html += '<li>';
              if (this.config.anchor) {
                html += '<a class="' + menuClsPrefix + '-title" href="#' + prefix + (i + 1) + '">' + node.text + '</a>';
              } else {
                // 用 data-target 来控制，需要结合 js 来控制
                html += '<a class="' + menuClsPrefix + '-title" data-target="' + prefix + (i + 1) + '" href="#">' + node.text + '</a>';
              }
              if (node.children && node.children.length > 0) {
                html += this.generateMenusHtml(node.children, '' + prefix + (i + 1) + '-');
              }
              html += '</li>';
            }
            html += '</ul>';
          }
          return html;
        }
      }, {
        key: 'refresh',
        value: function refresh() {
          var _this2 = this;

          var offsetMethod = this.config.offsetMethod;

          var offsetBase = offsetMethod === 'position' ? this.getScrollTop() : 0;

          this.offsets = [];
          this.targets = [];
          this.scrollHeight = this.getScrollHeight();

          // 把滚动监听的元素和坐标保存到offsets和targets中
          var menuElements = doc.querySelectorAll(this.menuSelector);

          map.call(menuElements, function (element) {
            // 目标元素
            var target = null;
            var _config6 = _this2.config,
                anchor = _config6.anchor,
                container = _config6.container;

            var selector = anchor ? element.getAttribute('href') : element.dataset.menu;
            var targetSelector = anchor ? element.getAttribute('href') : container + ' [data-target="' + element.dataset.menu + '"]';

            if (targetSelector) {
              target = doc.querySelector(targetSelector).parentNode;
              var targetBCR = target.getBoundingClientRect();
              if (targetBCR.width || targetBCR.height) {
                return [(offsetMethod === 'offset' ? offset(target).top : position(target).top) + offsetBase, selector];
              }
            }
            return null;
          }).sort(function (a, b) {
            if (!a || !b) {
              return 0;
            }
            return a[0] - b[0];
          }).forEach(function (item) {
            if (item) {
              _this2.offsets.push(item[0]);
              _this2.targets.push(item[1]);
            }
          });
        }
      }, {
        key: 'process',
        value: function process() {
          var scrollTop = this.getScrollTop() + this.config.offset;
          var scrollHeight = this.getScrollHeight();
          var maxScroll = this.config.offset + scrollHeight - this.getOffsetHeight();

          // 不相等的话，重新刷新，比如改变页面窗口后
          if (this.scrollHeight !== scrollHeight) {
            this.refresh();
          }

          // 滑到底部
          if (scrollTop >= maxScroll) {
            // 取最后一个
            var target = this.targets[this.targets.length - 1];

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

          for (var i = this.offsets.length; i--;) {
            var isActiveTarget = this.activeTarget !== this.targets[i] && scrollTop >= this.offsets[i] && (this.offsets[i + 1] === undefined || scrollTop < this.offsets[i + 1]);

            if (isActiveTarget) {
              this.activate(this.targets[i]);
            }
          }
        }
      }, {
        key: 'activate',
        value: function activate(target) {
          this.activeTarget = target;

          this.clearActiveCls();

          var anchor = this.config.anchor;

          var queries = this.menuSelector.split(',');
          var lastSelector = []; // 最后一个菜单项，即当前的子节点
          // 当前选中的和父目录都添加活动样式
          var parentEls = target.split('-');
          queries = queries.map(function (query) {
            var selector = [];
            var catalog = '';
            parentEls.forEach(function (it, index) {
              if (index === 0) {
                catalog += it;
              } else {
                catalog += '-' + it;
                selector.push(anchor ? query + '[href="' + catalog + '"]' : query + '[data-menu="' + catalog + '"]');
              }
            });
            lastSelector.push(selector[selector.length - 1]);
            return selector.join(',');
          });

          var $link = doc.querySelectorAll(queries.join(','));

          for (var i = 0, len = $link.length; i < len; i++) {
            $link[i].classList.add('active');
          }

          this.plugins.forEach(function (plugin) {
            if (typeof plugin.scrollMenu === 'function') {
              plugin.scrollMenu(lastSelector);
            }
          });

          // todo 事件，待补充

          /* $(this._scrollElement).trigger(Event.ACTIVATE, {
           relatedTarget: target
           }) */
        }
      }, {
        key: 'clearActiveCls',
        value: function clearActiveCls() {
          // 删除当前活动样式
          var activeEls = doc.querySelectorAll(this.menuSelector + '.active');
          if (activeEls) {
            for (var i = 0, len = activeEls.length; i < len; i++) {
              activeEls[i].classList.remove('active');
            }
          }
        }
      }, {
        key: 'unmount',
        value: function unmount() {
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
            this.plugins.forEach(function (plugin) {
              plugin.unmount();
            });
            this.plugins = null;
          }
        }
      }, {
        key: 'getScrollTop',
        value: function getScrollTop() {
          return this.scrollElement === win ? this.scrollElement.pageYOffset : this.scrollElement.scrollTop;
        }
      }, {
        key: 'getScrollHeight',
        value: function getScrollHeight() {
          return this.scrollElement.scrollHeight || Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
        }
      }, {
        key: 'getOffsetHeight',
        value: function getOffsetHeight() {
          return this.scrollElement === win ? win.innerHeight : this.scrollElement.getBoundingClientRect().height;
        }
      }]);

      return ScrollSpy;
    }();

    ScrollSpy.defaultConfig = {
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
      extend: false // 默认菜单没有展开
    };


    perfect.ScrollSpy = ScrollSpy;
    return ScrollSpy;
=======
  var win = window;
  var doc = document;
  var _Array$prototype = Array.prototype,
      forEach = _Array$prototype.forEach,
      map = _Array$prototype.map;

  var _ScrollSpy = function () {
    function _ScrollSpy(element) {
      var _this = this;

      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, _ScrollSpy);

      this.scrollEvent = function (event) {
        _this.process();
      };

      this.element = element;
      this.scrollElement = element.tagName === 'BODY' ? win : element;
      this.config = this.getConfig(config);
      var _config2 = this.config,
          menu = _config2.menu,
          menuClsPrefix = _config2.menuClsPrefix,
          extend = _config2.extend;

      // 菜单 目录 等选择器
      this.menuSelector = menu + ' .' + menuClsPrefix + '-title';
      this.offsets = [];
      this.targets = [];
      this.activeTarget = null;
      this.scrollHeight = 0;

      // 如果默认不展开，则用样式来控制
      if (!extend) {
        var extendStyle = doc.createElement('style');
        extendStyle.innerHTML = '\n          .menu-catalogue .menu-catalogue {\n            display: none;\n          }\n          .active + .menu-catalogue {\n            display: block;\n          }';
        doc.getElementsByTagName('head')[0].append(extendStyle);
      }

      // 添加事件，页面滚动时，处理目录和内容对应坐标
      this.scrollElement.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.scrollEvent, false);
      var _config3 = this.config,
          immedLoad = _config3.immedLoad,
          initMenus = _config3.initMenus,
          anchor = _config3.anchor;

      // 需要根据内容动态创建菜单列表
      if (initMenus) {
        this.generateMenus();
      }

      // 菜单面板
      this.menuPanel = menu + ' .' + menuClsPrefix + '.' + menuClsPrefix + '-catalogue';
      this.$menuPanel = doc.querySelector(this.menuPanel);

      // 不用锚点处理的情况
      if (anchor === false) {
        // fixme 待改进，改成 事件代理模式
        var menuElements = doc.querySelectorAll(this.menuSelector);
        forEach.call(menuElements, function (element) {
          element.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var el = e.currentTarget;
            var menu = el.dataset.menu;
            var _config4 = _this.config,
                offsetMethod = _config4.offsetMethod,
                container = _config4.container;

            var offsetXY = _this.config.offset;

            var targetEl = doc.querySelector(container + ' [data-target="' + menu + '"]').parentNode;
            var top = offsetMethod === 'offset' ? offset(targetEl).top : position(targetEl).top;
            var offsetBase = offsetMethod === 'position' ? _this.getScrollTop() : 0;

            // fixme
            _this.scrollElement.scrollTo(0, top + offsetBase - offsetXY);
            el.blur();
            _this.process();
          }, false);
        });
      }

      // 加载插件
      var pluginConfig = this.config.pluginConfig;
      var plugins = this.config.plugins;

      if (plugins) {
        if (!Array.isArray(plugins)) {
          plugins = [plugins];
        }
        this.plugins = [];
        var container = this.config.container;

        plugins.forEach(function (plugin) {
          // 把当前实例传给插件
          var instance = new plugin(_this, pluginConfig);
          instance.mount();
          _this.plugins.push(instance);
        });
      }

      // 显示菜单
      // doc.querySelector(menu).style.display = 'block';
      if (immedLoad) {
        this.refresh();
        this.process();
      }
    }

    _createClass(_ScrollSpy, [{
      key: 'getConfig',
      value: function getConfig(config) {
        var _config = _extends({}, _ScrollSpy.defaultConfig, config);

        var menu = _config.menu;
        var container = _config.container;


        if (typeof menu !== 'string') {
          var id = menu.id;

          if (!id) {
            id = getUuid('scrollspy');
            menu.id = id;
          }
          _config.menu = '#' + id;
        }

        if (!container) {
          container = doc.body; // 默认取 body
        }
        if (typeof container !== 'string') {
          var _container = container,
              _id = _container.id;

          if (!_id) {
            _id = getUuid('scrollspy');
            container.id = _id;
          }
          _config.container = '#' + _id;
        }

        var autoMethod = this.scrollElement !== this.scrollElement.window ? 'position' : 'offset';

        var offsetMethod = _config.method === 'auto' ? autoMethod : _config.method;

        _config.offsetMethod = offsetMethod;

        return _config;
      }
    }, {
      key: 'generateMenus',
      value: function generateMenus() {
        var menus = this.element.querySelectorAll('h1,h2,h3,h4,h5,h6');
        // 初始化根节点
        var entries = {
          level: 0,
          children: [],
          depth: 0,
          parent: null,
          text: null,
          root: true
        };

        // 前一个元素 level
        var prevLevel = 0;
        // 上一个节点
        var lastNode = null;

        forEach.call(menus, function (el, index) {
          var entry = null;
          var level = 7 - parseInt(el.tagName[1], 10);
          var text = el.innerHTML;

          if (index === 0) {
            // 初始化第一个元素
            entry = {
              level: level,
              children: [],
              depth: 1,
              parent: entries,
              text: text,
              el: el
            };
            entries.children.push(entry);
          } else {
            if (level === prevLevel) {
              // 相等的话
              entry = {
                level: level,
                children: [],
                depth: lastNode.depth,
                parent: lastNode.parent,
                text: text,
                el: el
              };
              lastNode.parent.children.push(entry);
            } else if (level < prevLevel) {
              // 如果当前级别小于前一个
              entry = {
                level: level,
                children: [],
                depth: lastNode.depth + 1,
                parent: lastNode,
                text: text,
                el: el
              };
              lastNode.children.push(entry);
            } else {
              // 如果当前级别大于前一个 查找祖先节点
              var ancestor = lastNode.parent;
              while (ancestor.level <= level && !ancestor.root) {
                ancestor = ancestor.parent;
              }
              entry = {
                level: level,
                children: [],
                depth: ancestor.depth + 1,
                parent: ancestor,
                text: text,
                el: el
              };
              ancestor.children.push(entry);
            }
          }
          lastNode = entry;
          prevLevel = level;
        });

        var html = this.generateMenusHtml(entries.children, this.config.prefix);
        doc.querySelector(this.config.menu).innerHTML = html;
      }
    }, {
      key: 'generateMenusHtml',
      value: function generateMenusHtml(nodes, prefix) {
        var _config5 = this.config,
            menuClsPrefix = _config5.menuClsPrefix,
            menuCls = _config5.menuCls;

        var html = '';
        if (nodes && nodes.length > 0) {
          html = '<ul class="' + menuClsPrefix + ' ' + menuClsPrefix + '-catalogue' + (menuCls ? ' ' + menuCls : '') + '">';
          for (var i = 0, len = nodes.length; i < len; i++) {
            var node = nodes[i];
            // 为对应的内容加锚点
            var newChild = document.createElement('a');
            newChild.id = prefix + (i + 1);
            newChild.className = menuClsPrefix + '-anchor';
            if (this.config.anchor) {
              newChild.href = '#' + (prefix + (i + 1));
            } else {
              newChild.dataset.menu = '' + (prefix + (i + 1));
            }

            newChild.setAttribute('aria-hidden', true);
            node.el.insertBefore(newChild, node.el.firstChild);

            html += '<li>';
            if (this.config.anchor) {
              html += '<a class="' + menuClsPrefix + '-title" href="#' + prefix + (i + 1) + '">' + node.text + '</a>';
            } else {
              // 用 data-target 来控制，需要结合 js 来控制
              html += '<a class="' + menuClsPrefix + '-title" data-target="' + prefix + (i + 1) + '" href="#">' + node.text + '</a>';
            }
            if (node.children && node.children.length > 0) {
              html += this.generateMenusHtml(node.children, '' + prefix + (i + 1) + '-');
            }
            html += '</li>';
          }
          html += '</ul>';
        }
        return html;
      }
    }, {
      key: 'refresh',
      value: function refresh() {
        var _this2 = this;

        var offsetMethod = this.config.offsetMethod;

        var offsetBase = offsetMethod === 'position' ? this.getScrollTop() : 0;

        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();

        // 把滚动监听的元素和坐标保存到offsets和targets中
        var menuElements = doc.querySelectorAll(this.menuSelector);

        map.call(menuElements, function (element) {
          // 目标元素
          var target = null;
          var _config6 = _this2.config,
              anchor = _config6.anchor,
              container = _config6.container;

          var selector = anchor ? element.getAttribute('href') : element.dataset.menu;
          var targetSelector = anchor ? element.getAttribute('href') : container + ' [data-target="' + element.dataset.menu + '"]';

          if (targetSelector) {
            target = doc.querySelector(targetSelector).parentNode;
            var targetBCR = target.getBoundingClientRect();
            if (targetBCR.width || targetBCR.height) {
              return [(offsetMethod === 'offset' ? offset(target).top : position(target).top) + offsetBase, selector];
            }
          }
          return null;
        }).sort(function (a, b) {
          if (!a || !b) {
            return 0;
          }
          return a[0] - b[0];
        }).forEach(function (item) {
          if (item) {
            _this2.offsets.push(item[0]);
            _this2.targets.push(item[1]);
          }
        });
      }
    }, {
      key: 'process',
      value: function process() {
        // 需要加 1 微调
        var scrollTop = this.getScrollTop() + this.config.offset + 1;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.config.offset + scrollHeight - this.getOffsetHeight();

        // 不相等的话，重新刷新，比如改变页面窗口后
        if (this.scrollHeight !== scrollHeight) {
          this.refresh();
        }

        // 滑到底部
        if (scrollTop >= maxScroll) {
          // 取最后一个
          var target = this.targets[this.targets.length - 1];

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

        for (var i = this.offsets.length; i--;) {
          var isActiveTarget = this.activeTarget !== this.targets[i] && scrollTop >= this.offsets[i] && (this.offsets[i + 1] === undefined || scrollTop < this.offsets[i + 1]);

          if (isActiveTarget) {
            this.activate(this.targets[i]);
          }
        }
      }
    }, {
      key: 'activate',
      value: function activate(target) {
        this.activeTarget = target;

        this.clearActiveCls();

        var anchor = this.config.anchor;

        var queries = this.menuSelector.split(',');
        var lastSelector = []; // 最后一个菜单项，即当前的子节点
        // 当前选中的和父目录都添加活动样式
        var parentEls = target.split('-');
        queries = queries.map(function (query) {
          var selector = [];
          var catalog = '';
          parentEls.forEach(function (it, index) {
            if (index === 0) {
              catalog += it;
            } else {
              catalog += '-' + it;
              selector.push(anchor ? query + '[href="' + catalog + '"]' : query + '[data-menu="' + catalog + '"]');
            }
          });
          lastSelector.push(selector[selector.length - 1]);
          return selector.join(',');
        });

        var $link = doc.querySelectorAll(queries.join(','));

        for (var i = 0, len = $link.length; i < len; i++) {
          $link[i].classList.add('active');
        }

        this.plugins.forEach(function (plugin) {
          if (typeof plugin.scrollMenu === 'function') {
            plugin.scrollMenu(lastSelector);
          }
        });

        // todo 事件，待补充

        /* $(this._scrollElement).trigger(Event.ACTIVATE, {
         relatedTarget: target
         }) */
      }
    }, {
      key: 'clearActiveCls',
      value: function clearActiveCls() {
        // 删除当前活动样式
        var activeEls = doc.querySelectorAll(this.menuSelector + '.active');
        if (activeEls) {
          for (var i = 0, len = activeEls.length; i < len; i++) {
            activeEls[i].classList.remove('active');
          }
        }
      }
    }, {
      key: 'unmount',
      value: function unmount() {
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
          this.plugins.forEach(function (plugin) {
            plugin.unmount();
          });
          this.plugins = null;
        }
      }
    }, {
      key: 'getScrollTop',
      value: function getScrollTop() {
        return this.scrollElement === win ? this.scrollElement.pageYOffset : this.scrollElement.scrollTop;
      }
    }, {
      key: 'getScrollHeight',
      value: function getScrollHeight() {
        return this.scrollElement.scrollHeight || Math.max(doc.body.scrollHeight, doc.documentElement.scrollHeight);
      }
    }, {
      key: 'getOffsetHeight',
      value: function getOffsetHeight() {
        return this.scrollElement === win ? win.innerHeight : this.scrollElement.getBoundingClientRect().height;
      }
    }]);

    return _ScrollSpy;
  }();

  _ScrollSpy.defaultConfig = {
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
    extend: false // 默认菜单没有展开
  };


  var ScrollSpy = function (perfect) {
    perfect.ScrollSpy = _ScrollSpy;
    return _ScrollSpy;
>>>>>>> 274d71830943ddf222d83be4859ecf2552378ea5
  }(_perfect2.default);

  exports.default = ScrollSpy;
});
//# sourceMappingURL=scrollSpy.js.map
