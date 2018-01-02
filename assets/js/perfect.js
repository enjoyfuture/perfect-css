(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["perfect"] = factory();
	else
		root["perfect"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUuid = getUuid;
exports.offset = offset;
exports.position = position;
// 提供工具类方法

var MAX_UUID = 1000000;

function isWindow(elem) {
  return elem != null && elem === elem.window;
}

function getWindow(elem) {
  return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
}

/**
 * getStyles
 * @param {type} element
 * @param {type} property
 * @returns {styles}
 */
function getStyles(element, property, extra) {
  var styles = element.ownerDocument.defaultView.getComputedStyle(element, null);
  if (property) {
    var cssValue = styles.getPropertyValue(property) || styles[property];
    if (extra) {
      var num = parseFloat(cssValue);
      return extra === true || isFinite(num) ? num || 0 : cssValue;
    }
    return cssValue;
  }
  return styles;
}

function getOffsetParent(elem) {
  /* eslint-disable prefer-destructuring */
  var offsetParent = elem.offsetParent;

  while (offsetParent && elem.tagName.toLowerCase() !== 'html' && getStyles(offsetParent, 'position') === 'static') {
    offsetParent = offsetParent.offsetParent;
  }
  return offsetParent || document.documentElement;
}

/**
 * @description 生成唯一的 dom uuid
 * @param {string} prefix 前缀
 * @return {*} uuid
 */
function getUuid(prefix) {
  var _prefix = prefix;
  do {
    // eslint-disable-next-line no-bitwise
    _prefix += ~~(Math.random() * MAX_UUID); // "~~" acts like a faster Math.floor() here
  } while (document.getElementById(_prefix));

  return _prefix;
}

// 根据浏览器设置其鼠标滑轮事件
var isWheel = exports.isWheel = function () {
  // compatibility: mouse wheel event
  // http://www.w3help.org/zh-cn/causes/SD9015
  var ua = navigator.userAgent;
  // ie 11 /gecko/i.test(ua) value is true ,so need to judge /firefox/i.test(ua)
  if (/gecko/i.test(ua) && !/webkit/i.test(ua) && /firefox/i.test(ua)) {
    // Firefox
    return false;
  }
  // IE Safari Chrome Opera
  return true;
}();

/**
 * 返回元素 offset
 * 不支持隐藏的元素
 * 参考 jQuery 实现
 * https://github.com/jquery/jquery/blob/master/src/offset.js
 * @param el
 * @returns {*}
 */
function offset(el) {
  if (!el) {
    return;
  }

  var docElem = void 0,
      win = void 0,
      doc = void 0;

  // Support: IE <=11 only
  // Running getBoundingClientRect on a
  // disconnected node in IE throws an error
  if (!el.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  var rect = el.getBoundingClientRect();

  // Make sure element is not hidden (display: none)
  if (rect.width || rect.height) {
    doc = el.ownerDocument;
    win = getWindow(doc);
    docElem = doc.documentElement;

    return {
      top: rect.top + win.pageYOffset - docElem.clientTop,
      left: rect.left + win.pageXOffset - docElem.clientLeft
    };
  }
  return rect;
}

/**
 * 返回其 position 坐标
 * @param elem
 * @return {*}
 */
function position(elem) {
  if (!elem) {
    return null;
  }

  var offsetParent = void 0,
      offsetXY = void 0,
      parentOffset = { top: 0, left: 0 };

  if (getStyles(elem, 'position') === 'fixed') {
    offsetXY = elem.getBoundingClientRect();
  } else {
    offsetParent = getOffsetParent(elem);
    offsetXY = offset(elem);
    if (elem.tagName.toLowerCase() !== 'html') {
      parentOffset = offset(offsetParent);
    }
    parentOffset.top += getStyles(offsetParent, 'borderTopWidth', true);
    parentOffset.left += getStyles(offsetParent, 'borderLeftWidth', true);
  }

  return {
    top: offsetXY.top - parentOffset.top - getStyles(elem, 'marginTop', true),
    left: offsetXY.left - parentOffset.left - getStyles(elem, 'marginLeft', true)
  };
}

var util = {
  getUuid: getUuid,
  isWheel: isWheel,
  offset: offset,
  position: position
};

exports.default = util;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 组件接口，所有的组件都应该继承该组件
 */
var Component = function () {
  _createClass(Component, null, [{
    key: 'mount',


    /**
     * 提供静态方法，用来挂载实例化组件
     * 子组件可以覆盖该方法
     * @param element
     * @returns {Component}
     */
    value: function mount(element) {
      return new Component(element);
    }
  }]);

  function Component(element) {
    var _this = this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Component);

    this.element = element;
    // 设置 config 到 this 上
    Object.keys(config).forEach(function (key) {
      _this[key] = config[key];
    });

    this.init();
  }

  _createClass(Component, [{
    key: 'init',
    value: function init() {}
    // 初始化
    // 子组件可以覆盖该方法，具体实现要初始化的内容


    // 卸载组件

  }, {
    key: 'unmount',
    value: function unmount() {}
    // 子组件可以盖该方法


    /**
     * 公共方法，添加注册事件
     * @param evtType
     * @param handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.element.addEventListener(evtType, handler);
    }

    /**
     * 公共方法，卸载已注册的事件
     * @param evtType
     * @param handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.element.removeEventListener(evtType, handler);
    }

    /**
     * 公共方法，创建并分发事件
     * @param evtType 事件名称
     * @param detail 当事件初始化时传递的数据
     * @param bubbles 表明该事件是否会冒泡
     * @param cancelable 表明该事件是否可以被取消
     */

  }, {
    key: 'emit',
    value: function emit(evtType, detail) {
      var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: detail,
          bubbles: bubbles,
          cancelable: cancelable
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, bubbles, cancelable, detail);
      }

      this.element.dispatchEvent(evt);
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = exports.ListMenu = exports.Ripple = exports.CatalogueSpy = exports.ScrollSpy = undefined;

var _scrollSpy = __webpack_require__(3);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _catalogueSpy = __webpack_require__(4);

var _catalogueSpy2 = _interopRequireDefault(_catalogueSpy);

var _ripple = __webpack_require__(5);

var _ripple2 = _interopRequireDefault(_ripple);

var _listMenu = __webpack_require__(7);

var _listMenu2 = _interopRequireDefault(_listMenu);

var _select = __webpack_require__(9);

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ScrollSpy = _scrollSpy2.default;
exports.CatalogueSpy = _catalogueSpy2.default;
exports.Ripple = _ripple2.default;
exports.ListMenu = _listMenu2.default;
exports.Select = _select2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
    this.scrollElement.addEventListener(_util.isWheel ? 'mousewheel' : 'DOMMouseScroll', this.scrollEvent, false);
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
          var top = offsetMethod === 'offset' ? (0, _util.offset)(targetEl).top : (0, _util.position)(targetEl).top;
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

  _createClass(ScrollSpy, [{
    key: 'getConfig',
    value: function getConfig(config) {
      var _config = _extends({}, ScrollSpy.defaultConfig, config);

      var menu = _config.menu;
      var container = _config.container;


      if (typeof menu !== 'string') {
        // dom 对象
        var id = menu.id;

        if (!id) {
          id = (0, _util.getUuid)('scrollspy');
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
          _id = (0, _util.getUuid)('scrollspy');
          container.id = _id;
        }
        _config.container = '#' + _id;
      }

      var autoMethod = this.scrollElement !== this.scrollElement.window ? 'position' : 'offset';

      var offsetMethod = _config.method === 'auto' ? autoMethod : _config.method;

      _config.offsetMethod = offsetMethod;

      return _config;
    }

    /**
     * 动态创建菜单
     */

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

    /**
     * 根据 nodes 节点 生成 html
     * @param nodes
     * @param prefix
     * @return {string}
     */

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

    /**
     * 滚动页面时，刷新相关数据
     */

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
            return [(offsetMethod === 'offset' ? (0, _util.offset)(target).top : (0, _util.position)(target).top) + offsetBase, selector];
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

    // 鼠标滚动事件

  }, {
    key: 'process',


    /**
     * 滚动时触发该方法
     * @returns {boolean|*}
     */
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

    /**
     * 设置当前活动的内容
     * @param target
     */

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

    // 卸载

  }, {
    key: 'unmount',
    value: function unmount() {
      // $.removeData(this._element, DATA_KEY)
      this.scrollElement.removeEventListener(_util.isWheel ? 'mousewheel' : 'DOMMouseScroll', this.scrollEvent, false);

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
exports.default = ScrollSpy;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = __webpack_require__(0);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isWheel = _util2.default.isWheel;


var win = window;
var doc = document;
var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';

var reg = /translateY\(([-\w]+)\)/;

var CatalogueSpy = function () {
  function CatalogueSpy(scrollSpy) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, CatalogueSpy);

    _initialiseProps.call(this);

    this.scrollSpy = scrollSpy;
    this.config = _extends({}, CatalogueSpy.defaultConfig, config);

    var menuHeight = this.config.menuHeight;

    if (!menuHeight) {
      menuHeight = document.documentElement.clientHeight - 64;
      this.config.menuHeight = menuHeight;
    }

    var $menuPanel = scrollSpy.$menuPanel;

    $menuPanel.style.transform = 'translateY(0)';
    $menuPanel.style.maxHeight = menuHeight + 'px';
    this.$menuPanel = $menuPanel;

    win.addEventListener(resizeEvt, this.adjustMenuHeight, false);
  }

  // 调整菜单最大高度


  _createClass(CatalogueSpy, [{
    key: 'mount',
    value: function mount() {
      // fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
      // http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
      this.$menuPanel.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleScroll(true), false);
    }

    // 当定位到某一个菜单项时，而由于限制了高度，该菜单有可能不在可视范围内

  }, {
    key: 'unmount',
    value: function unmount() {
      console.info('待补充');
      win.removeEventListener(resizeEvt, this.adjustMenuHeight, false);
    }
  }]);

  return CatalogueSpy;
}();

CatalogueSpy.defaultConfig = {
  menuHeight: null, // 设置菜单高度，如果不设置，则取当前浏览器可视高度
  step: 30 // 滚动鼠标，菜单滑动步长
};

var _initialiseProps = function _initialiseProps() {
  var _this = this;

  this.adjustMenuHeight = function () {
    var menuHeight = doc.documentElement.clientHeight - 64;
    _this.$menuPanel.style.maxHeight = menuHeight + 'px';
  };

  this.handleScroll = function (prevent) {
    return function (event) {
      var _$menuPanel = _this.$menuPanel,
          scrollHeight = _$menuPanel.scrollHeight,
          clientHeight = _$menuPanel.clientHeight;
      var step = _this.config.step;

      _this.maxOffset = scrollHeight - clientHeight; // 最大滚动的高度

      if (prevent && _this.maxOffset > 0) {
        event.preventDefault();
        event.stopPropagation();
      }

      // 判断鼠标滑轮向上还是向下滑动
      var upDown = void 0;
      var detail = event.detail,
          wheelDelta = event.wheelDelta;

      if (detail) {
        if (detail < 0) {
          // up
          upDown = 'up';
        } else if (detail > 0) {
          // down
          upDown = 'down';
        }
      } else if (wheelDelta) {
        //
        if (wheelDelta > 0) {
          // up
          upDown = 'up';
        }
        if (wheelDelta < 0) {
          // down
          upDown = 'down';
        }
      }

      var transform = _this.$menuPanel.style.transform;


      var y = reg.exec(transform);
      y = y ? parseFloat(y[1], 10) : 0;

      if (upDown === 'up' && y === 0 || upDown === 'down' && Math.abs(y) === _this.maxOffset) {
        return;
      }

      if (upDown === 'up' && y < 0) {
        _this.$menuPanel.style.transform = 'translateY(' + Math.min(y + step, 0) + 'px)';
      } else if (upDown === 'down' && Math.abs(y) < _this.maxOffset) {
        _this.$menuPanel.style.transform = 'translateY(' + Math.max(y - step, -_this.maxOffset) + 'px)';
      }
    };
  };

  this.scrollMenu = function (lastSelector) {
    var step = _this.config.step;
    var $menuPanel = _this.$menuPanel;
    var scrollHeight = $menuPanel.scrollHeight,
        clientHeight = $menuPanel.clientHeight;

    var maxOffset = scrollHeight - clientHeight; // 最大滚动的高度
    if (maxOffset === 0) {
      return;
    }
    maxOffset += 1; // 由于计算偏差，需要微调1个像素
    // 如果当前菜单项隐藏，则向上拉
    // Fixme 注意这里还需计算 $menuPanel.parentElement padding 和 border 的值，待处理
    var menuRect = $menuPanel.parentElement.getBoundingClientRect();
    var currentTarget = doc.querySelectorAll(lastSelector.join(','));
    if (currentTarget) {
      Array.prototype.forEach.call(currentTarget, function (el) {
        var rect = el.getBoundingClientRect();
        while (rect.top > 0 && rect.bottom > 0 && (rect.top < menuRect.top || rect.bottom > menuRect.bottom)) {
          // 向上移动
          var transform = $menuPanel.style.transform;

          var y = reg.exec(transform);
          y = y ? parseFloat(y[1], 10) : 0;
          if (rect.top < menuRect.top) {
            $menuPanel.style.transform = 'translateY(' + Math.min(y + step, 0) + 'px)';
          } else {
            $menuPanel.style.transform = 'translateY(' + Math.max(y - step, -maxOffset) + 'px)';
          }
          rect = el.getBoundingClientRect();
        }
      });
    }
  };
};

exports.default = CatalogueSpy;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 定义常量
var classes = {
  ELEMENT: 'ripple-impact',
  UNBOUNDED: 'ripple-unbounded',
  FOCUSED: 'ripple-impact-focused',
  ACTIVE: 'ripple-impact-active',
  INACTIVE: 'ripple-impact-inactive'
};

var strings = {
  VAR_SIZE: '--ripple-size',
  VAR_LEFT: '--ripple-left',
  VAR_TOP: '--ripple-top',
  VAR_SCALE: '--ripple-scale',
  VAR_TRANSLATE_START: '--ripple-translate-start',
  VAR_TRANSLATE_END: '--ripple-translate-end'
};

var numbers = {
  PADDING: 10, // 波纹 padding
  INITIAL_ORIGIN_SCALE: 0.6, // 初始波纹缩放比例
  DEACTIVATION_TIMEOUT_MS: 225, // 从活动状态到结束持续的时间，看 scss 变量 $ripple-translate-duration
  DEACTIVATION_MS: 150 // 非活动状态到结束持续的时间，看 scss 变量 $ripple-fade-out-duration
};

// 非活动状态和活动状态对应
var DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus'
};

var Ripple = function (_Component) {
  _inherits(Ripple, _Component);

  _createClass(Ripple, null, [{
    key: 'mount',


    /**
     * 静态方法实例化 Ripple 组件
     * @param element
     * @param unbounded
     * @returns {Ripple}
     */
    value: function mount(element) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$unbounded = _ref.unbounded,
          unbounded = _ref$unbounded === undefined ? undefined : _ref$unbounded;

      var ripple = new Ripple(element);
      if (unbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */unbounded;
      }
      return ripple;
    }

    /**
     * @param {Ripple} instance
     * @return {RippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var matches = (0, _util.getMatchesProperty)(HTMLElement.prototype);

      // 封装一些适配器方法
      return {
        isSupportsCssVars: function isSupportsCssVars() {
          return (0, _util.supportsCssVariables)(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isActive: function isActive() {
          return instance.element[matches](':active');
        },
        isDisabled: function isDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.element.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.element.classList.remove(className);
        },
        registerImpactHandler: function registerImpactHandler(evtType, handler) {
          return instance.element.addEventListener(evtType, handler, (0, _util.applyPassive)());
        },
        deregisterImpactHandler: function deregisterImpactHandler(evtType, handler) {
          return instance.element.removeEventListener(evtType, handler, (0, _util.applyPassive)());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.element.style.setProperty(varName, value);
        },
        removeCssVariable: function removeCssVariable(varName) {
          return instance.element.style.removeProperty(varName);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.element.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }

    /**
     * 重置 Ripple 活动状态
     * @returns {}
     */

  }, {
    key: 'resetActivationState',
    value: function resetActivationState() {
      return {
        isActivated: false, // 当前是否为活动状态
        hasDeactivationUXRun: false, // 是否有取消激活运行状态
        wasActivatedByPointer: false, // 是否是通过鼠标或触摸来激活(也可以调用方法激活)
        wasElementMadeActive: false, // 元素是否处于活动状态，即 element.matches(':active') 为 true
        activationStartTime: 0, // 开始时间
        activationEvent: null, // 当前事件对象 event
        isProgrammatic: false // 是否在当前活动进程中
      };
    }
  }, {
    key: 'classes',
    get: function get() {
      return classes;
    }
  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }]);

  function Ripple(element, config) {
    _classCallCheck(this, Ripple);

    // 用来处理是否设置了 disabled
    /* config.disabled */
    var _this = _possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this, element, config));

    _this.disabled = _this.disabled || false;

    // 是否是无界限的 Ripple
    _this.unbounded = _this.unbounded || false;

    // 创建适配器
    _this.adapter = Ripple.createAdapter(_this);

    // 用来处理 requestAnimationFrame 返回的值
    _this.layoutFrame = 0;

    // Ripple Rect size
    _this.rippleSize = { width: 0, height: 0 };

    // 初始化 Ripple 默认活动状态
    _this.activationState = Ripple.resetActivationState();

    // 动画持续的时长
    _this.duration = 0;

    // 波纹初始大小
    _this.initialSize = 0;

    // 波纹扩散最大的圆弧
    _this.maxRadius = 0;

    // 无解限制坐标
    _this.unboundedCoords = {
      left: 0,
      top: 0
    };

    // 缩放比例
    _this.scale = 0;

    // activation setTimeout Id
    _this.activationTimer = null;

    // deactivation removal setTimeout Id
    _this.deactivationRemovalTimer = null;

    // 动画是否结束
    _this.activationAnimationHasEnded = false;

    // activation setTimeout 函数
    _this.activationTimerCallback = function () {
      _this.activationAnimationHasEnded = true;
      _this.runDeactivationAnimation();
    };

    // 事件与监听函数名称对应
    _this.listenerInfos = [{ activate: 'touchstart', deactivate: 'touchend' }, { activate: 'pointerdown', deactivate: 'pointerup' }, { activate: 'mousedown', deactivate: 'mouseup' }, { activate: 'keydown', deactivate: 'keyup' }, { focus: 'focus', blur: 'blur' }];

    // 监听函数 Map
    _this.listeners = {
      activate: function activate(e) {
        return _this.activate(e);
      },
      deactivate: function deactivate(e) {
        return _this.deactivate(e);
      },
      focus: function focus() {
        return requestAnimationFrame(function () {
          return _this.adapter.addClass(classes.FOCUSED);
        });
      },
      blur: function blur() {
        return requestAnimationFrame(function () {
          return _this.adapter.removeClass(classes.FOCUSED);
        });
      }
    };

    _this._init();
    return _this;
  }

  // 是否支持 css 变量


  _createClass(Ripple, [{
    key: 'isSupported',
    value: function isSupported() {
      return this.adapter.isSupportsCssVars();
    }

    // 初始化组件

  }, {
    key: '_init',
    value: function _init() {
      var _this2 = this;

      if (!this.isSupported()) {
        return;
      }

      this.addEventListeners();

      var ELEMENT = classes.ELEMENT,
          UNBOUNDED = classes.UNBOUNDED;

      requestAnimationFrame(function () {
        _this2.adapter.addClass(ELEMENT);
        if (_this2.adapter.isUnbounded()) {
          _this2.adapter.addClass(UNBOUNDED);
        }
        _this2.layoutInternal();
      });
    }

    /**
     * 重新布局，重置波纹参数
     * 比如当窗口改变时，调用该方法
     */

  }, {
    key: 'layout',
    value: function layout() {
      var _this3 = this;

      if (this.layoutFrame) {
        cancelAnimationFrame(this.layoutFrame);
      }
      this.layoutFrame = requestAnimationFrame(function () {
        _this3.layoutInternal();
        _this3.layoutFrame = 0;
      });
    }

    // 初始化波纹个参数

  }, {
    key: 'layoutInternal',
    value: function layoutInternal() {
      this.rippleRect = this.adapter.computeBoundingRect();
      var _rippleRect = this.rippleRect,
          width = _rippleRect.width,
          height = _rippleRect.height;

      // 元素大小

      var maxDim = Math.max(width, height);
      // 波纹直径
      var diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

      // 初始波纹大小，取元素大小的 60%
      this.initialSize = maxDim * numbers.INITIAL_ORIGIN_SCALE;

      // 波纹扩散圆弧，直径 + padding
      this.maxRadius = diameter + numbers.PADDING;
      // 计算缩放比例
      this.scale = this.maxRadius / this.initialSize;
      this.duration = 1000 * Math.sqrt(this.maxRadius / 1024);
      this.updateCssVariableValue();
    }
  }, {
    key: 'updateCssVariableValue',
    value: function updateCssVariableValue() {
      var VAR_SIZE = strings.VAR_SIZE,
          VAR_LEFT = strings.VAR_LEFT,
          VAR_TOP = strings.VAR_TOP,
          VAR_SCALE = strings.VAR_SCALE;


      this.adapter.updateCssVariable(VAR_SIZE, this.initialSize + 'px');
      this.adapter.updateCssVariable(VAR_SCALE, this.scale);

      if (this.adapter.isUnbounded()) {
        var _rippleRect2 = this.rippleRect,
            width = _rippleRect2.width,
            height = _rippleRect2.height;

        this.unboundedCoords = {
          left: Math.round(width / 2 - this.initialSize / 2),
          top: Math.round(height / 2 - this.initialSize / 2)
        };

        this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + 'px');
        this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + 'px');
      }
    }

    // 设置监听事件

  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      var _this4 = this;

      this.listenerInfos.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this4.adapter.registerImpactHandler(info[k], _this4.listeners[k]);
        });
      });

      // 注册 resize 事件
      this.adapter.registerResizeHandler(this.layout);
    }

    // 删除事件

  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      var _this5 = this;

      this.listenerInfos.forEach(function (info) {
        Object.keys(info).forEach(function (k) {
          _this5.adapter.deregisterImpactHandler(info[k], _this5.listeners[k]);
        });
      });
      this.adapter.deregisterResizeHandler(this.layout);
    }

    /**
     * 当 Ripple 处于活动状态时
     * 对应的事件有 touchstart pointerdown mousedown keydown
     * @param {Event} e
     * @private
     */

  }, {
    key: 'activate',
    value: function activate(e) {
      var _this6 = this;

      if (this.adapter.isDisabled()) {
        return;
      }

      var activationState = this.activationState;

      if (activationState.isActivated) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === null;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';
      activationState.activationStartTime = Date.now();

      requestAnimationFrame(function () {
        // 对于 keydown 事件需要判断是否当前为活动状态，即 element.matches(':active')
        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
        activationState.wasElementMadeActive = e && e.type === 'keydown' ? _this6.adapter.isActive() : true;
        if (activationState.wasElementMadeActive) {
          _this6.animateActivation();
        } else {
          // 如果元素没有被激活，重置 Ripple 状态
          _this6.activationState = Ripple.resetActivationState();
        }
      });
    }

    // 处理 Ripple 动画

  }, {
    key: 'animateActivation',
    value: function animateActivation() {
      var _this7 = this;

      var VAR_TRANSLATE_START = strings.VAR_TRANSLATE_START,
          VAR_TRANSLATE_END = strings.VAR_TRANSLATE_END;
      var ACTIVE = classes.ACTIVE,
          INACTIVE = classes.INACTIVE;
      var DEACTIVATION_TIMEOUT_MS = numbers.DEACTIVATION_TIMEOUT_MS;


      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter.isUnbounded()) {
        var _getTranslationCoords = this.getTranslationCoords(),
            startPoint = _getTranslationCoords.startPoint,
            endPoint = _getTranslationCoords.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter.updateCssVariable(VAR_TRANSLATE_START, translateStart);
      this.adapter.updateCssVariable(VAR_TRANSLATE_END, translateEnd);
      // 取消进行中的 activation 和 deactivation
      clearTimeout(this.activationTimer);
      clearTimeout(this.deactivationRemovalTimer);
      this.rmActivationClasses();
      this.adapter.removeClass(INACTIVE);

      // 强制重绘，触发动画
      this.adapter.computeBoundingRect();
      this.adapter.addClass(ACTIVE);
      this.activationTimer = setTimeout(function () {
        return _this7.activationTimerCallback();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * 返回Translation 开始和结束坐标
     * @returns {{startPoint: ({x: number, y: number}|*), endPoint: {x: number, y: number}}}
     */

  }, {
    key: 'getTranslationCoords',
    value: function getTranslationCoords() {
      var activationState = this.activationState;
      var activationEvent = activationState.activationEvent,
          wasActivatedByPointer = activationState.wasActivatedByPointer;
      var _rippleRect3 = this.rippleRect,
          width = _rippleRect3.width,
          height = _rippleRect3.height;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
      } else {
        startPoint = {
          x: width / 2,
          y: height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };

      var endPoint = {
        x: width / 2 - this.initialSize / 2,
        y: height / 2 - this.initialSize / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /**
     * 运行 Deactivation 动画
     */

  }, {
    key: 'runDeactivationAnimation',
    value: function runDeactivationAnimation() {
      var _this8 = this;

      var INACTIVE = classes.INACTIVE;
      var _activationState = this.activationState,
          hasDeactivationUXRun = _activationState.hasDeactivationUXRun,
          isActivated = _activationState.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded) {
        this.rmActivationClasses();
        this.adapter.addClass(INACTIVE);
        this.deactivationRemovalTimer = setTimeout(function () {
          _this8.adapter.removeClass(INACTIVE);
        }, numbers.DEACTIVATION_MS);
      }
    }

    /**
     * 删除活动状态
     */

  }, {
    key: 'rmActivationClasses',
    value: function rmActivationClasses() {
      var ACTIVE = classes.ACTIVE;

      this.adapter.removeClass(ACTIVE);
      this.activationAnimationHasEnded = false;
      this.adapter.computeBoundingRect();
    }

    /**
     * 取消活动状态事件
     * @param e
     * @private
     */

  }, {
    key: 'deactivate',
    value: function deactivate(e) {
      var _this9 = this;

      var activationState = this.activationState;
      // 如果当前不是活动状态，则取消

      if (!activationState.isActivated) {
        return;
      }
      // 如果是进行中的取消过程
      if (activationState.isProgrammatic) {
        var evtObject = null;
        var _state = _extends({}, activationState);
        requestAnimationFrame(function () {
          return _this9.animateDeactivation(evtObject, _state);
        });
        this.activationState = Ripple.resetActivationState();
        return;
      }

      var actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
      var expectedActivationType = activationState.activationEvent.type;
      // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
      // Essentially, what we need to do here is decouple the deactivation UX from the actual
      // deactivation state itself. This way, touch/pointer events in sequence do not trample one
      // another.
      var needsDeactivationUX = actualActivationType === expectedActivationType;
      var needsActualDeactivation = needsDeactivationUX;
      if (activationState.wasActivatedByPointer) {
        needsActualDeactivation = e.type === 'mouseup';
      }

      var state = _extends({}, activationState);
      requestAnimationFrame(function () {
        if (needsDeactivationUX) {
          _this9.activationState.hasDeactivationUXRun = true;
          _this9.animateDeactivation(e, state);
        }

        if (needsActualDeactivation) {
          _this9.activationState = Ripple.resetActivationState();
        }
      });
    }

    /**
     * @param {Event} e
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation',
    value: function animateDeactivation(e, _ref2) {
      var wasActivatedByPointer = _ref2.wasActivatedByPointer,
          wasElementMadeActive = _ref2.wasElementMadeActive;
      var FOCUSED = classes.FOCUSED;

      if (wasActivatedByPointer || wasElementMadeActive) {
        // Remove class left over by element being focused
        this.adapter.removeClass(FOCUSED);
        this.runDeactivationAnimation();
      }
    }
  }]);

  return Ripple;
}(_component2.default);

exports.default = Ripple;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * 是否支持 css 变量（css 自定义属性）
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * 是否支持事件 passive
 * https://www.cnblogs.com/ziyunfei/p/5545439.html
 * https://github.com/WICG/EventListenerOptions
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * 对于 Edge 15 浏览器，伪类设置 css 变量存在 bug
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'ripple-test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * 判断是否支持 css 变量
 * https://caniuse.com/#feat=css-variables
 * 当前支持的浏览器有：
 * Edge 15+ (15对于伪类有 bug)、Firefox 31+ 、Chrome 49+ 、Safari 9.1+、Opera 36+
 * IOS Safari 9.3+ 、(Android 5+: Chromium 62+ Opera 37+ Chrome 62+ FireFox 57+ )
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables_;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables_ = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables_ = false;
  }
  return supportsCssVariables_;
}

/**
 * 判断浏览器是否支持 passive 事件监听，如果支持，则使用
 * https://www.cnblogs.com/ziyunfei/p/5545439.html
 * https://github.com/WICG/EventListenerOptions
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|{passive: boolean}}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      /*eslint-disable getter-return*/
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
        } });
    } catch (e) {
      /* 不支持*/
    }

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? { passive: true } : false;
}

/**
 * 使用 matches (老版本使用 webkitMatchesSelector, msMatchesSelector) 来测试一个选择器是否被浏览器支持，比如 :active 等
 * @param {!Object} HTMLElementPrototype
 * @return {!Array<string>}
 */
function getMatchesProperty(HTMLElementPrototype) {
  return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
    return p in HTMLElementPrototype;
  }).pop();
}

/**
 * 返回事件基于元素左上角偏移坐标值
 * @param {!Event} ev
 * @param {!{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {!{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _util = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var win = window;
var dom = document;
var body = dom.body;

// 定义常量
// class 样式
var classes = {
  ELEMENT: 'list-menu',
  LIST_MENU_ITEMS: 'list-menu-items',
  OPEN: 'list-menu-open',
  ANIMATING: 'list-menu-animating',
  TOP_RIGHT: 'list-menu-top-right',
  BOTTOM_LEFT: 'list-menu-bottom-left',
  BOTTOM_RIGHT: 'list-menu-bottom-right',
  LIST_ITEM: 'list-item',
  ACTIVE: 'active',
  EXPANDED: 'expanded'
};

/** @enum {string} */
var strings = {
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
  ARIA_LEVEL_BRANCH: 'branch'
};

var numbers = {
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
  TRANSITION_Y2: 1
};

var ListMenu = function (_Component) {
  _inherits(ListMenu, _Component);

  _createClass(ListMenu, [{
    key: 'open',


    /** @return {boolean} */
    get: function get() {
      return this.isOpen;
    }

    /** @param {boolean} value */
    ,
    set: function set(value) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    }
  }], [{
    key: 'mount',


    /**
     * 静态方法实例化 ListMenu 组件
     * @param element
     * @param config
     * @returns {ListMenu}
     */
    value: function mount(element) {
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { filterDivider: 'list-divider' };

      return new ListMenu(element, config);
    }
  }, {
    key: 'classes',
    get: function get() {
      return classes;
    }
  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return numbers;
    }
  }]);

  function ListMenu(element, config) {
    _classCallCheck(this, ListMenu);

    // 是否过滤掉分隔符 list-divider，默认过滤
    var _this = _possibleConstructorReturn(this, (ListMenu.__proto__ || Object.getPrototypeOf(ListMenu)).call(this, element, config));

    _this.handleClickMenu = function (e) {
      var target = e.target;
      var ARIA_DISABLED_ATTR = strings.ARIA_DISABLED_ATTR,
          ARIA_LEVEL_ATTR = strings.ARIA_LEVEL_ATTR,
          ARIA_LEVEL_BRANCH = strings.ARIA_LEVEL_BRANCH;
      // disabled 返回

      if (target.getAttribute(ARIA_DISABLED_ATTR) === 'true') {
        return;
      }

      // 点击分支节点
      if (target.getAttribute(ARIA_LEVEL_ATTR) === ARIA_LEVEL_BRANCH) {
        // 删除兄弟节点展开样式
        var node = target.parentNode.firstElementChild;
        while (node) {
          node.classList.remove(classes.EXPANDED);
          node = node.nextElementSibling;
        }
        target.classList.add(classes.EXPANDED);
        return;
      }

      // 如果点击的是其他非叶子节点，则返回
      var targetIndex = _this.leafItems.indexOf(target);
      if (targetIndex < 0) {
        return;
      }

      // 防抖处理，防止多次点击
      if (_this.selectedTriggerTimerId) {
        return;
      }

      // 动画结束后隐藏
      _this.selectedTriggerTimerId = setTimeout(function () {
        _this.selectedTriggerTimerId = 0;
        _this.hide();

        // 去掉展开的级联节点
        _this.adapter.removeExpandClass();
        _this.adapter.setActiveItemAtIndex(targetIndex);
        _this.adapter.notifySelected();
      }, numbers.SELECTED_TRIGGER_DELAY);
    };

    _this.handleKeyboardUp = function (evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key;

      var isEnter = key === 'Enter' || keyCode === 13;
      var isSpace = key === 'Space' || keyCode === 32;
      var isEscape = key === 'Escape' || keyCode === 27;

      if (isEnter || isSpace) {
        _this.handleClickMenu(evt);
      }

      if (isEscape) {
        _this.adapter.notifyCancel();
        _this.close();
      }

      return true;
    };

    _this.handleKeyboardDown = function (evt) {
      // Do nothing if Alt, Ctrl or Meta are pressed.
      if (evt.altKey || evt.ctrlKey || evt.metaKey) {
        return true;
      }

      var keyCode = evt.keyCode,
          key = evt.key,
          shiftKey = evt.shiftKey;

      var isTab = key === 'Tab' || keyCode === 9;
      var isArrowUp = key === 'ArrowUp' || keyCode === 38;
      var isArrowDown = key === 'ArrowDown' || keyCode === 40;
      var isSpace = key === 'Space' || keyCode === 32;

      var focusedItemIndex = _this.adapter.getFocusedItemIndex();
      var lastItemIndex = _this.adapter.getNumberOfItems() - 1;

      if (shiftKey && isTab && focusedItemIndex === 0) {
        _this.adapter.focusItemAtIndex(lastItemIndex);
        evt.preventDefault();
        return false;
      }

      if (!shiftKey && isTab && focusedItemIndex === lastItemIndex) {
        _this.adapter.focusItemAtIndex(0);
        evt.preventDefault();
        return false;
      }

      // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling
      if (isArrowUp || isArrowDown || isSpace) {
        evt.preventDefault();
      }

      if (isArrowUp) {
        if (focusedItemIndex === 0 || _this.adapter.isFocused()) {
          _this.adapter.focusItemAtIndex(lastItemIndex);
        } else {
          _this.adapter.focusItemAtIndex(focusedItemIndex - 1);
        }
      } else if (isArrowDown) {
        if (focusedItemIndex === lastItemIndex || _this.adapter.isFocused()) {
          _this.adapter.focusItemAtIndex(0);
        } else {
          _this.adapter.focusItemAtIndex(focusedItemIndex + 1);
        }
      }

      return true;
    };

    _this.handleDocumentClick = function (evt) {
      var el = evt.target;

      while (el && el !== dom.documentElement) {
        if (_this.adapter.eventTargetHasClass(el, classes.LIST_ITEM)) {
          return;
        }
        el = el.parentNode;
      }

      _this.adapter.notifyCancel();
      _this.hide(evt);
    };

    if (_this.filterDivider === undefined) {
      _this.filterDivider = 'list-divider';
    }

    // 定义上一个获取焦点的元素
    _this.previousFocus = null;

    // 创建适配器
    _this.adapter = _this.createAdapter();

    /** @private {boolean} */
    _this.isOpen = false;
    /** @private {number} */
    _this.startScaleX = 0;
    /** @private {number} */
    _this.startScaleY = 0;
    /** @private {number} */
    _this.targetScale = 1;
    /** @private {number} */
    // 缩放 X 大小
    _this.scaleX = 0;
    /** @private {number} */
    // 缩放 Y 大小
    _this.scaleY = 0;
    /** @private {boolean} */
    // 判断 menu 是否在打开或关闭过程中
    _this.running = false;
    /** @private {number} */
    _this.selectedTriggerTimerId = 0;
    /** @private {number} */
    _this.animationRequestId = 0;
    /** @private {!{ width: number, height: number }} */
    // 返回菜单 items 大小
    _this.dimensions = null;
    /** @private {number} */
    // 开始时间
    _this.startTime = 0;
    /** @private {number} */
    // item 高度
    _this.itemHeight = 0;

    _this.previousActiveItems = null; // 记录当前选择的元素，对于级联菜单，包括从第一层到最里层
    _this.previousActiveItemsIndex = null; // 记录当前选择的元素 index

    _this.render();
    return _this;
  }

  _createClass(ListMenu, [{
    key: 'init',
    value: function init() {
      var ITEMS_SELECTOR = strings.ITEMS_SELECTOR,
          LIST_ITEM_SELECTOR = strings.LIST_ITEM_SELECTOR,
          LIST_ITEM_LEAF_SELECTOR = strings.LIST_ITEM_LEAF_SELECTOR;

      // 返回菜单 item 根容器

      this.itemsContainer = this.element.querySelector(ITEMS_SELECTOR);
      // 返回菜单第一层 items 中的所有 item
      this.items = [].slice.call(this.itemsContainer.querySelectorAll(LIST_ITEM_SELECTOR));

      // 返回菜单 items 中的所有叶子节点item
      this.leafItems = [].slice.call(this.itemsContainer.querySelectorAll(LIST_ITEM_LEAF_SELECTOR));

      if (this.activeItemIndex === undefined) {
        this.activeItemIndex = 0;
      }
    }

    /**
     * 封装适配器方法
     * @return {object}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter() {
      var _this2 = this;

      return {
        addClass: function addClass(className) {
          return _this2.element.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.element.classList.remove(className);
        },
        hasClass: function hasClass(className) {
          return _this2.element.classList.contains(className);
        },
        hasNecessaryDom: function hasNecessaryDom() {
          return Boolean(_this2.itemsContainer);
        },
        eventTargetHasClass: function eventTargetHasClass(target, className) {
          return target.classList.contains(className);
        },
        getInnerDimensions: function getInnerDimensions() {
          var itemsContainer = _this2.itemsContainer;

          return { width: itemsContainer.offsetWidth, height: itemsContainer.offsetHeight };
        },
        hasAnchor: function hasAnchor() {
          return _this2.element.parentElement && _this2.element.parentElement.classList.contains('menu-anchor');
        },
        getAnchorDimensions: function getAnchorDimensions() {
          return _this2.element.parentElement.getBoundingClientRect();
        },
        getWindowDimensions: function getWindowDimensions() {
          return { width: win.innerWidth, height: win.innerHeight };
        },
        setScale: function setScale(x, y) {
          _this2.element.style[(0, _util.getTransformPropertyName)(win)] = 'scale(' + x + ', ' + y + ')';
        },
        setInnerScale: function setInnerScale(x, y) {
          _this2.itemsContainer.style[(0, _util.getTransformPropertyName)(win)] = 'scale(' + x + ', ' + y + ')';
        },
        getNumberOfItems: function getNumberOfItems() {
          return _this2.items.length;
        },
        getYParamsForItemAtIndex: function getYParamsForItemAtIndex(index) {
          var _items$index = _this2.items[index],
              top = _items$index.offsetTop,
              height = _items$index.offsetHeight;

          return { top: top, height: height };
        },
        setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(index, value) {
          return _this2.items[index].style.setProperty('transition-delay', value);
        },
        setActiveItemAtIndex: function setActiveItemAtIndex(index) {
          if (_this2.previousActiveItems) {
            _this2.previousActiveItems.forEach(function (el) {
              el.classList.remove(classes.ACTIVE);
            });
          }

          _this2.leafItems[index].classList.add(classes.ACTIVE);

          _this2.previousActiveItems = [];
          _this2.previousActiveItemsIndex = []; // 记录活动元素 index

          _this2.previousActiveItems.push(_this2.leafItems[index]);
          _this2.previousActiveItemsIndex.push((0, _util.getElementIndexOfParent)(_this2.leafItems[index], _this2.filterDivider));
          var parentNode = _this2.leafItems[index].parentNode.parentNode;
          while (parentNode && parentNode.classList.contains(classes.LIST_ITEM)) {
            parentNode.classList.add(classes.ACTIVE);
            _this2.previousActiveItems.unshift(parentNode);
            _this2.previousActiveItemsIndex.unshift((0, _util.getElementIndexOfParent)(parentNode, _this2.filterDivider));
            parentNode = parentNode.parentNode.parentNode;
          }
        }, // 设置当前活动 item 样式
        clearActiveItem: function clearActiveItem() {
          _this2.leafItems.forEach(function (item) {
            item.classList.remove(classes.ACTIVE);
          });
        }, // 清空活动 item
        removeExpandClass: function removeExpandClass() {
          _this2.element.querySelectorAll(strings.LIST_ITEM_BRANCH_SELECTOR).forEach(function (el) {
            el.classList.remove(classes.EXPANDED);
          });
        },
        notifySelected: function notifySelected() {
          _this2.emit(strings.SELECTED_EVENT, {
            index: _this2.previousActiveItemsIndex,
            items: _this2.previousActiveItems
          });
        }, // 选中某一 item，通过注册的事件调用该方法
        notifyCancel: function notifyCancel() {
          return _this2.emit(strings.CANCEL_EVENT, {});
        },
        saveFocus: function saveFocus() {
          _this2.previousFocus = dom.activeElement;
        },
        restoreFocus: function restoreFocus() {
          if (_this2.previousFocus) {
            _this2.previousFocus.focus();
          }
        },
        isFocused: function isFocused() {
          return dom.activeElement === _this2.element;
        },
        focus: function focus() {
          return _this2.element.focus();
        },
        getFocusedItemIndex: function getFocusedItemIndex() {
          return _this2.items.indexOf(dom.activeElement);
        },
        focusItemAtIndex: function focusItemAtIndex(index) {
          return _this2.leafItems[index].focus();
        },
        setTransformOrigin: function setTransformOrigin(origin) {
          _this2.element.style[(0, _util.getTransformPropertyName)(win) + '-origin'] = origin;
        },
        setPosition: function setPosition(position) {
          _this2.element.style.left = 'left' in position ? position.left : null;
          _this2.element.style.right = 'right' in position ? position.right : null;
          _this2.element.style.top = 'top' in position ? position.top : null;
          _this2.element.style.bottom = 'bottom' in position ? position.bottom : null;
        },
        getAccurateTime: function getAccurateTime() {
          return win.performance.now();
        } // 系统时间
      };
    }

    // 渲染组件

  }, {
    key: 'render',
    value: function render() {
      var ELEMENT = classes.ELEMENT,
          OPEN = classes.OPEN;


      if (!this.adapter.hasClass(ELEMENT)) {
        throw new Error('\u5217\u8868\u83DC\u5355\u6839\u8282\u70B9\u9700\u8981\u8BBE\u7F6E class ' + ELEMENT + '.');
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
      this.adapter.setActiveItemAtIndex(this.activeItemIndex);

      this.addEventListeners();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      clearTimeout(this.selectedTriggerTimerId);
      // 取消当前进行的动画
      cancelAnimationFrame(this.animationRequestId);
      this.removeEventListeners();
    }

    // 设置监听事件

  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.element.addEventListener('click', this.handleClickMenu);
      this.element.addEventListener('keyup', this.handleKeyboardUp);
      this.element.addEventListener('keydown', this.handleKeyboardDown);
    }

    // 删除事件

  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      this.element.removeEventListener('click', this.handleClickMenu);
      this.element.removeEventListener('keyup', this.handleKeyboardUp);
      this.element.removeEventListener('keydown', this.handleKeyboardDown);
      body.removeEventListener('click', this.handleDocumentClick);
    }

    /**
     * @param {!Event} e
     * @private
     */


    /**
     * 处理键盘事件，对于 Enter, Space, Escape 需特殊处理
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */


    /**
     * 处理键盘事件 tab 和 arrows
     * @param {!Event} evt
     * @return {boolean}
     * @private
     */
    /*eslint-disable complexity*/


    /**
     * 当点击非菜单区域时，隐藏菜单列表
     * @param {!Event} evt
     * @private
     */

  }, {
    key: 'show',


    /** @param {{focusIndex: ?number}=} options */
    value: function show() {
      var _this3 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$focusIndex = _ref.focusIndex,
          focusIndex = _ref$focusIndex === undefined ? null : _ref$focusIndex;

      // 设置当前焦点元素
      this.adapter.saveFocus();
      this.adapter.addClass(classes.ANIMATING);
      this.animationRequestId = requestAnimationFrame(function () {
        _this3.dimensions = _this3.adapter.getInnerDimensions();
        _this3.applyTransitionDelays();
        _this3.autoPosition();
        _this3.animateMenu();
        _this3.adapter.addClass(classes.OPEN);
        _this3.focusOnOpen(focusIndex);

        // 添加 document 事件
        body.addEventListener('click', _this3.handleDocumentClick);
      });
      this.isOpen = true;
    }

    /**
     *  关闭隐藏菜单
     * @param {Event=} evt
     */

  }, {
    key: 'hide',
    value: function hide() {
      var _this4 = this;

      var evt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var disabled = evt ? evt.target.getAttribute(strings.ARIA_DISABLED_ATTR) === 'true' : false;

      if (disabled) {
        return;
      }

      body.removeEventListener('click', this.handleDocumentClick);
      // 添加动画 class
      this.adapter.addClass(classes.ANIMATING);

      requestAnimationFrame(function () {
        _this4.removeTransitionDelays();
        _this4.animateMenu();
        _this4.adapter.removeClass(classes.OPEN);
      });
      this.isOpen = false;
      // 把焦点定位到上一个焦点
      this.adapter.restoreFocus();
    }

    /**
     * Calculates transition delays for individual menu items, so that they fade in one at a time.
     * @private
     */

  }, {
    key: 'applyTransitionDelays',
    value: function applyTransitionDelays() {
      var BOTTOM_LEFT = classes.BOTTOM_LEFT,
          BOTTOM_RIGHT = classes.BOTTOM_RIGHT;

      var numItems = this.adapter.getNumberOfItems();
      var height = this.dimensions.height;

      var transitionDuration = numbers.TRANSITION_DURATION_MS / 1000;
      var start = numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

      for (var index = 0; index < numItems; index++) {
        var _adapter$getYParamsFo = this.adapter.getYParamsForItemAtIndex(index),
            itemTop = _adapter$getYParamsFo.top,
            itemHeight = _adapter$getYParamsFo.height;

        this.itemHeight = itemHeight;
        var itemDelayFraction = itemTop / height;
        if (this.adapter.hasClass(BOTTOM_LEFT) || this.adapter.hasClass(BOTTOM_RIGHT)) {
          itemDelayFraction = (height - itemTop - itemHeight) / height;
        }
        var itemDelay = (start + itemDelayFraction * (1 - start)) * transitionDuration;
        // Use toFixed() here to normalize CSS unit precision across browsers
        this.adapter.setTransitionDelayForItemAtIndex(index, itemDelay.toFixed(3) + 's');
      }
    }

    /** @private */
    // 自动计算位置

  }, {
    key: 'autoPosition',
    value: function autoPosition() {
      var _position;

      if (!this.adapter.hasAnchor()) {
        return;
      }

      // Defaults: open from the top left.
      var vertical = 'top';
      var horizontal = 'left';

      var anchor = this.adapter.getAnchorDimensions();
      var windowDimensions = this.adapter.getWindowDimensions();

      var topOverflow = anchor.top + this.dimensions.height - windowDimensions.height;
      var bottomOverflow = this.dimensions.height - anchor.bottom;
      var extendsBeyondTopBounds = topOverflow > 0;

      if (extendsBeyondTopBounds) {
        if (bottomOverflow < topOverflow) {
          vertical = 'bottom';
        }
      }

      var leftOverflow = anchor.left + this.dimensions.width - windowDimensions.width;
      var rightOverflow = this.dimensions.width - anchor.right;
      var extendsBeyondLeftBounds = leftOverflow > 0;

      if (extendsBeyondLeftBounds && rightOverflow < leftOverflow) {
        horizontal = 'right';
      }

      var position = (_position = {}, _defineProperty(_position, horizontal, '0'), _defineProperty(_position, vertical, '0'), _position);

      this.adapter.setTransformOrigin(vertical + ' ' + horizontal);
      this.adapter.setPosition(position);
    }

    /**
     * @param {?number} focusIndex
     * @private
     */

  }, {
    key: 'focusOnOpen',
    value: function focusOnOpen(focusIndex) {
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

  }, {
    key: 'removeTransitionDelays',
    value: function removeTransitionDelays() {
      var numItems = this.adapter.getNumberOfItems();
      for (var i = 0; i < numItems; i++) {
        this.adapter.setTransitionDelayForItemAtIndex(i, null);
      }
    }

    /**
     * 设置打开或关闭菜单动画
     * @private
     */

  }, {
    key: 'animateMenu',
    value: function animateMenu() {
      var _this5 = this;

      this.startTime = this.adapter.getAccurateTime();
      this.startScaleX = this.scaleX;
      this.startScaleY = this.scaleY;

      this.targetScale = this.isOpen ? 1 : 0;

      // 处理菜单动画
      if (!this.running) {
        this.running = true;
        this.animationRequestId = requestAnimationFrame(function () {
          return _this5.animationLoop();
        });
      }
    }

    /**
     * 循环处理菜单动画
     * @private
     */

  }, {
    key: 'animationLoop',
    value: function animationLoop() {
      var _this6 = this;

      var time = this.adapter.getAccurateTime();
      var TRANSITION_DURATION_MS = numbers.TRANSITION_DURATION_MS,
          TRANSITION_X1 = numbers.TRANSITION_X1,
          TRANSITION_Y1 = numbers.TRANSITION_Y1,
          TRANSITION_X2 = numbers.TRANSITION_X2,
          TRANSITION_Y2 = numbers.TRANSITION_Y2,
          TRANSITION_SCALE_ADJUSTMENT_X = numbers.TRANSITION_SCALE_ADJUSTMENT_X,
          TRANSITION_SCALE_ADJUSTMENT_Y = numbers.TRANSITION_SCALE_ADJUSTMENT_Y;


      var currentTime = (0, _util.clamp)((time - this.startTime) / TRANSITION_DURATION_MS);

      // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.
      var currentTimeX = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_X) / (1 - TRANSITION_SCALE_ADJUSTMENT_X));
      // No time-shifting on the Y axis when closing.
      var currentTimeY = currentTime;

      var startScaleY = this.startScaleY;
      if (this.targetScale === 1) {
        // Start with the menu at the height of a single item.
        if (this.itemHeight) {
          startScaleY = Math.max(this.itemHeight / this.dimensions.height, startScaleY);
        }
        // X axis moves faster, so time-shift forward.
        currentTimeX = (0, _util.clamp)(currentTime + TRANSITION_SCALE_ADJUSTMENT_X);
        // Y axis moves slower, so time-shift backwards and adjust speed by the difference.
        currentTimeY = (0, _util.clamp)((currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) / (1 - TRANSITION_SCALE_ADJUSTMENT_Y));
      }

      // 为 X 和 Y 轴方向设置贝塞尔曲线
      var easeX = (0, _util.bezierProgress)(currentTimeX, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);
      var easeY = (0, _util.bezierProgress)(currentTimeY, TRANSITION_X1, TRANSITION_Y1, TRANSITION_X2, TRANSITION_Y2);

      // Calculate the scales to apply to the outer container and inner container.
      this.scaleX = this.startScaleX + (this.targetScale - this.startScaleX) * easeX;
      var invScaleX = 1 / (this.scaleX === 0 ? 1 : this.scaleX);
      this.scaleY = startScaleY + (this.targetScale - startScaleY) * easeY;
      var invScaleY = 1 / (this.scaleY === 0 ? 1 : this.scaleY);

      // 改变 scale
      this.adapter.setScale(this.scaleX, this.scaleY);
      this.adapter.setInnerScale(invScaleX, invScaleY);

      // Stop animation when we've covered the entire 0 - 1 range of time.
      // 如果不在 0 到 1 之间则停止动画
      if (currentTime < 1) {
        this.animationRequestId = requestAnimationFrame(function () {
          return _this6.animationLoop();
        });
      } else {
        this.animationRequestId = 0;
        this.running = false;
        this.adapter.removeClass(classes.ANIMATING);
      }
    }
  }]);

  return ListMenu;
}(_component2.default);

exports.default = ListMenu;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @type {string|undefined} */
var storedTransformPropertyName = void 0;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * 返回 transform 兼容性写法
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (storedTransformPropertyName === undefined || forceRefresh) {
    var el = globalObj.document.createElement('div');
    storedTransformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
  }

  return storedTransformPropertyName;
}

/**
 * 如果 value 落在 min 和 max 之间则返回 value，否则小于 min 则返回 min， 大于 max 则返回 max
 * 比如 min=0，max=1，value=0.5，则返回 0.5
 * 比如 min=0，max=1，value=3，则返回 1
 * 比如 min=0，max=1，value=-0.5，则返回 0
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  return Math.min(max, Math.max(min, value));
}

/**
 * Returns the easing value to apply at time t, for a given cubic bezier curve.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Parameters are as follows:
 * - time: The current time in the animation, scaled between 0 and 1.
 * - x1: The x value of control point P1.
 * - y1: The y value of control point P1.
 * - x2: The x value of control point P2.
 * - y2: The y value of control point P2.
 * @param {number} time
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
function bezierProgress(time, x1, y1, x2, y2) {
  return getBezierCoordinate(solvePositionFromXValue(time, x1, x2), y1, y2);
}

/**
 * Compute a single coordinate at a position point between 0 and 1.
 * c1 and c2 are the matching coordinate on control points P1 and P2, respectively.
 * Control points P0 and P3 are assumed to be (0,0) and (1,1), respectively.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} t
 * @param {number} c1
 * @param {number} c2
 * @return {number}
 */
function getBezierCoordinate(t, c1, c2) {
  // Special case start and end.
  if (t === 0 || t === 1) {
    return t;
  }

  // Step one - from 4 points to 3
  var ic0 = t * c1;
  var ic1 = c1 + t * (c2 - c1);
  var ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
  return ic0 + t * (ic1 - ic0);
}

/**
 * Project a point onto the Bezier curve, from a given X. Calculates the position t along the curve.
 * Adapted from https://github.com/google/closure-library/blob/master/closure/goog/math/bezier.js.
 * @param {number} xVal
 * @param {number} x1
 * @param {number} x2
 * @return {number}
 */
function solvePositionFromXValue(xVal, x1, x2) {
  var epsilon = 1e-6;
  var maxIterations = 8; // 迭代次数

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  var t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  var tMin = 0;
  var tMax = 1;
  var value = 0;
  for (var i = 0; i < maxIterations; i++) {
    value = getBezierCoordinate(t, x1, x2);
    var derivative = (getBezierCoordinate(t + epsilon, x1, x2) - value) / epsilon;
    if (Math.abs(value - xVal) < epsilon) {
      return t;
    } else if (Math.abs(derivative) < epsilon) {
      break;
    } else {
      if (value < xVal) {
        tMin = t;
      } else {
        tMax = t;
      }
      t -= (value - xVal) / derivative;
    }
  }

  // If the gradient descent got stuck in a local minimum, e.g. because
  // the derivative was close to 0, use a Dichotomy refinement instead.
  // We limit the number of interations to 8.
  for (var _i = 0; Math.abs(value - xVal) > epsilon && _i < maxIterations; _i++) {
    if (value < xVal) {
      tMin = t;
      t = (t + tMax) / 2;
    } else {
      tMax = t;
      t = (t + tMin) / 2;
    }
    value = getBezierCoordinate(t, x1, x2);
  }
  return t;
}

// 返回当前元素在父元素中的索引 index，是否过滤掉分隔符 list-divider，默认过滤
function getElementIndexOfParent(element, filter) {
  var parentNode = element.parentNode;
  var children = parentNode.children;
  var index = 0;
  for (var i = 0, len = children.length; i < len; i++) {
    if (filter && children[i].classList.contains(filter)) {
      continue;
    }
    if (children[i] === element) {
      return index;
    }
    index++;
  }
  return -1;
}

exports.getTransformPropertyName = getTransformPropertyName;
exports.clamp = clamp;
exports.bezierProgress = bezierProgress;
exports.getElementIndexOfParent = getElementIndexOfParent;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strings = exports.classes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(1);

var _component2 = _interopRequireDefault(_component);

var _listMenu = __webpack_require__(7);

var _listMenu2 = _interopRequireDefault(_listMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var win = window;
var dom = document;
var body = dom.body;

// 返回已选中的根 root option
function getRootSelectedOption(el) {
  var parentEl = el.parentNode.parentNode;
  if (parentEl.classList.contains('list-menu')) {
    return el;
  }
  return getRootSelectedOption(parentEl);
}

// 定义常量
// class 样式
var classes = exports.classes = {
  ELEMENT: 'select',
  DISABLED: 'select-disabled',
  OPEN: 'select-open',
  SCROLL_LOCK: 'select-scroll-lock'
};

var strings = exports.strings = {
  SELECT_INNER: '.select-inner',
  CHANGE_EVENT: 'select:change',
  SELECT_MENU: '.select-menu',
  SELECT_SELECTED_TEXT: '.select-selected-text'
};

var openerKeys = [{ key: 'ArrowUp', keyCode: 38, forType: 'keydown' }, { key: 'ArrowDown', keyCode: 40, forType: 'keydown' }, { key: 'Space', keyCode: 32, forType: 'keyup' }];

var Select = function (_Component) {
  _inherits(Select, _Component);

  _createClass(Select, [{
    key: 'value',
    get: function get() {
      return this.getSelectedValue ? this.getSelectedValue() : '';
    }
  }, {
    key: 'options',
    get: function get() {
      // 返回叶子节点作为 options
      return this.menu.leafItems;
    }

    // 返回已经选中的 select option，只处理可以多选的 select，FIXME

  }, {
    key: 'selectedOptions',
    get: function get() {
      return this.element.querySelectorAll('[aria-selected]');
    }
  }], [{
    key: 'mount',


    /**
     * 静态方法实例化 Select 组件
     * @param element
     * @returns {Select}
     */
    value: function mount(element) {
      return new Select(element);
    }
  }, {
    key: 'classes',
    get: function get() {
      return classes;
    }
  }, {
    key: 'strings',
    get: function get() {
      return strings;
    }
  }]);

  function Select(element, config) {
    _classCallCheck(this, Select);

    // 创建适配器
    var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, element, config));

    _this.displayHandler = function (evt) {
      evt.preventDefault();
      if (!_this.adapter.isMenuOpen()) {
        _this.open();
      }
    };

    _this.selectionHandler = function (_ref) {
      var detail = _ref.detail;
      var index = detail.index,
          items = detail.items;

      // 如果不相等

      if (!_this.compareSelectedIndex(index)) {
        var len = items.length;
        var leafIndex = _this.adapter.getLeafOptionIndex(items[len - 1]);
        _this.setSelectedIndex(leafIndex);
        _this.adapter.notifyChange();
      }
      _this.close();
    };

    _this.cancelHandler = function () {
      _this.close();
    };

    _this.adapter = _this.createAdapter();

    _this.selectedIndex = -1; // 已选的 select option，指叶子节点索引
    _this.disabled = false; // 是否禁用
    _this.isFocused = false; // 获取焦点

    // 提供一个默认获取 select value 方法
    if (!_this.getSelectedValue) {
      _this.getSelectedValue = function () {
        var selectedIndex = _this.selectedIndex;

        if (selectedIndex > -1) {
          // 返回叶子节点 data-value 设置的值
          return _this.options[selectedIndex].dataset.value;
        }
        return '';
      };
    }

    _this.render();
    _this.initialSyncWithDOM();
    return _this;
  }

  /**
   * 封装适配器方法
   * @return {object}
   */


  _createClass(Select, [{
    key: 'createAdapter',
    value: function createAdapter() {
      var _this2 = this;

      return {
        addClass: function addClass(className) {
          return _this2.element.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.element.classList.remove(className);
        },
        setAttr: function setAttr(attr, value) {
          return _this2.element.setAttribute(attr, value);
        },
        rmAttr: function rmAttr(attr) {
          return _this2.element.removeAttribute(attr);
        },
        computeBoundingRect: function computeBoundingRect() {
          return _this2.selectInner.getBoundingClientRect();
        },
        focus: function focus() {
          return _this2.selectInner.focus();
        },
        makeTabbable: function makeTabbable() {
          _this2.selectInner.tabIndex = 0;
        },
        makeUntabbable: function makeUntabbable() {
          _this2.selectInner.tabIndex = -1;
        },
        setMenuElStyle: function setMenuElStyle(propertyName, value) {
          return _this2.menuEl.style.setProperty(propertyName, value);
        },
        setMenuElAttr: function setMenuElAttr(attr, value) {
          return _this2.menuEl.setAttribute(attr, value);
        },
        rmMenuElAttr: function rmMenuElAttr(attr) {
          return _this2.menuEl.removeAttribute(attr);
        },
        getMenuElOffsetHeight: function getMenuElOffsetHeight() {
          return _this2.menuEl.offsetHeight;
        },
        openMenu: function openMenu(focusIndex) {
          return _this2.menu.show({ focusIndex: focusIndex });
        },
        isMenuOpen: function isMenuOpen() {
          return _this2.menu.open;
        },
        setSelectedTextContent: function setSelectedTextContent(selectedTextContent) {
          _this2.selectedText.textContent = selectedTextContent;
        },
        getNumberOfOptions: function getNumberOfOptions() {
          return _this2.options.length;
        },
        getTextForOptionAtIndex: function getTextForOptionAtIndex(index) {
          return _this2.options[index].textContent;
        },
        setAttrForOptionAtIndex: function setAttrForOptionAtIndex(index, attr, value) {
          return _this2.options[index].setAttribute(attr, value);
        },
        rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(index, attr) {
          return _this2.options[index].removeAttribute(attr);
        },
        getLeafOptionIndex: function getLeafOptionIndex(item) {
          var len = _this2.options.length;
          for (var i = 0; i < len; i++) {
            if (_this2.options[i] === item) {
              return i;
            }
          }
          return -1;
        },
        notifyChange: function notifyChange() {
          var menu = _this2.menu;
          _this2.emit(strings.CHANGE_EVENT, {
            index: menu.previousActiveItemsIndex,
            items: menu.previousActiveItems,
            value: _this2.value
          });
        },
        getWindowInnerHeight: function getWindowInnerHeight() {
          return win.innerHeight;
        },
        addBodyClass: function addBodyClass(className) {
          return body.classList.add(className);
        },
        removeBodyClass: function removeBodyClass(className) {
          return body.classList.remove(className);
        }
      };
    }

    // 默认 menuFactory 为 ListMenu

  }, {
    key: 'init',
    value: function init() {
      var menuFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return new _listMenu2.default(el);
      };

      this.selectInner = this.element.querySelector(strings.SELECT_INNER);
      this.selectedText = this.element.querySelector(strings.SELECT_SELECTED_TEXT);
      this.menuEl = this.element.querySelector(strings.SELECT_MENU);
      this.menu = menuFactory(this.menuEl);
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      var selectedOption = this.selectedOptions[0];
      var idx = selectedOption ? this.options.indexOf(selectedOption) : -1;
      if (idx > -1) {
        this.selectedIndex = idx;
      }

      if (this.element.getAttribute('aria-disabled') === 'true') {
        this.disabled = true;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.addEventListeners();
    }
  }, {
    key: 'unmount',
    value: function unmount() {
      this.removeEventListeners();
    }

    // 设置监听事件

  }, {
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.selectInner.addEventListener('click', this.displayHandler);
      this.selectInner.addEventListener('keydown', this.handleDisplayKeyboard);
      this.selectInner.addEventListener('keyup', this.handleDisplayKeyboard);

      // 监听 ListMenu 事件
      this.menu.listen(_listMenu2.default.strings.SELECTED_EVENT, this.selectionHandler);
      this.menu.listen(_listMenu2.default.strings.CANCEL_EVENT, this.cancelHandler);
    }

    // 删除事件

  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      this.selectInner.removeEventListener('click', this.displayHandler);
      this.selectInner.removeEventListener('keydown', this.handleDisplayKeyboard);
      this.selectInner.removeEventListener('keyup', this.handleDisplayKeyboard);

      // 监听 ListMenu 事件
      this.menu.unlisten(_listMenu2.default.strings.SELECTED_EVENT, this.selectionHandler);
      this.menu.unlisten(_listMenu2.default.strings.CANCEL_EVENT, this.cancelHandler);
    }
  }, {
    key: 'item',
    value: function item(index) {
      return this.options[index] || null;
    }
  }, {
    key: 'handleDisplayKeyboard',
    value: function handleDisplayKeyboard(evt) {
      // We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
      // global.
      var EVENT_PHASE_AT_TARGET = 2;
      if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
        return;
      }

      // Prevent pressing space down from scrolling the page
      var isSpaceDown = evt.type === 'keydown' && (evt.key === 'Space' || evt.keyCode === 32);
      if (isSpaceDown) {
        evt.preventDefault();
      }

      var isOpenerKey = openerKeys.some(function (_ref2) {
        var key = _ref2.key,
            keyCode = _ref2.keyCode,
            forType = _ref2.forType;

        return evt.type === forType && (evt.key === key || evt.keyCode === keyCode);
      });

      if (isOpenerKey) {
        this.displayHandler(evt);
      }
    }

    // ListMenu SELECTED_EVENT 事件

  }, {
    key: 'getSelectedIndex',
    value: function getSelectedIndex() {
      return this.selectedIndex;
    }
  }, {
    key: 'setSelectedIndex',
    value: function setSelectedIndex(index) {
      // 先删除上一次选择的 option
      var prevSelectedIndex = this.selectedIndex;
      if (prevSelectedIndex >= 0) {
        this.adapter.rmAttrForOptionAtIndex(this.selectedIndex, 'aria-selected');
      }

      this.selectedIndex = index >= 0 && index < this.adapter.getNumberOfOptions() ? index : -1;
      var selectedTextContent = '';
      if (this.selectedIndex >= 0) {
        selectedTextContent = this.adapter.getTextForOptionAtIndex(this.selectedIndex).trim();
        this.adapter.setAttrForOptionAtIndex(this.selectedIndex, 'aria-selected', 'true');
      }
      this.adapter.setSelectedTextContent(selectedTextContent);
    }
  }, {
    key: 'isDisabled',
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: 'setDisabled',
    value: function setDisabled(disabled) {
      var DISABLED = classes.DISABLED;

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
  }, {
    key: 'open',
    value: function open() {
      this.disableScroll();
      var OPEN = classes.OPEN;
      // 根据已选的叶子节点 this.selectedIndex 拿到第一层 select item

      var focusIndex = this.selectedIndex < 0 ? 0 : this.selectedIndex;
      var selectedRootOption = getRootSelectedOption(this.options[focusIndex]);

      this.setMenuStylesForOpen(selectedRootOption);
      this.adapter.addClass(OPEN);
      this.adapter.openMenu(focusIndex);
      this.isFocused = true;
    }
  }, {
    key: 'close',
    value: function close() {
      var OPEN = classes.OPEN;

      this.adapter.removeClass(OPEN);
      this.adapter.focus();
      this.enableScroll();
    }
  }, {
    key: 'setMenuStylesForOpen',
    value: function setMenuStylesForOpen(selectedRootOption) {
      var innerHeight = this.adapter.getWindowInnerHeight();

      var _adapter$computeBound = this.adapter.computeBoundingRect(),
          left = _adapter$computeBound.left,
          top = _adapter$computeBound.top;

      this.adapter.setMenuElAttr('aria-hidden', 'true');
      this.adapter.setMenuElStyle('display', 'block');
      var menuHeight = this.adapter.getMenuElOffsetHeight();
      var itemOffsetTop = selectedRootOption.offsetTop;
      this.adapter.setMenuElStyle('display', '');
      this.adapter.rmMenuElAttr('aria-hidden');

      var adjustedTop = top - itemOffsetTop;
      var overflowsTop = adjustedTop < 0;
      var overflowsBottom = adjustedTop + menuHeight > innerHeight;
      if (overflowsTop) {
        adjustedTop = 0;
      } else if (overflowsBottom) {
        adjustedTop = Math.max(0, innerHeight - menuHeight);
      }

      this.adapter.setMenuElStyle('left', left + 'px');
      this.adapter.setMenuElStyle('top', adjustedTop + 'px');
      this.adapter.setMenuElStyle('transform-origin', 'center ' + itemOffsetTop + 'px');
    }
  }, {
    key: 'nameditem',
    value: function nameditem(key) {
      // NOTE: IE11 precludes us from using Array.prototype.find
      for (var i = 0, options = this.options, option; option = options[i]; i++) {
        if (option.id === key || option.getAttribute('name') === key) {
          return option;
        }
      }
      return null;
    }
  }, {
    key: 'disableScroll',
    value: function disableScroll() {
      this.adapter.addBodyClass(classes.SCROLL_LOCK);
    }
  }, {
    key: 'enableScroll',
    value: function enableScroll() {
      this.adapter.removeBodyClass(classes.SCROLL_LOCK);
    }
  }, {
    key: 'compareSelectedIndex',
    value: function compareSelectedIndex(index) {
      if (!this.selectedIndex || !index) {
        return false;
      }
      if (this.selectedIndex.length !== index.length) {
        return false;
      }
      var len = index.length;
      for (var i = 0; i < len; i++) {
        if (this.selectedIndex[i] !== index[i]) {
          return false;
        }
      }
      return true;
    }
  }]);

  return Select;
}(_component2.default);

exports.default = Select;

/***/ })
/******/ ]);
});
//# sourceMappingURL=perfect.js.map