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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
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
exports.Ripple = exports.CatalogueSpy = exports.ScrollSpy = undefined;

var _scrollSpy = __webpack_require__(2);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _catalogueSpy = __webpack_require__(3);

var _catalogueSpy2 = _interopRequireDefault(_catalogueSpy);

var _ripple = __webpack_require__(4);

var _ripple2 = _interopRequireDefault(_ripple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ScrollSpy = _scrollSpy2.default;
exports.CatalogueSpy = _catalogueSpy2.default;
exports.Ripple = _ripple2.default;

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(5);

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

var cssVar = {
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
     * @param isUnbounded
     * @returns {Ripple}
     */
    value: function mount(element) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$isUnbounded = _ref.isUnbounded,
          isUnbounded = _ref$isUnbounded === undefined ? undefined : _ref$isUnbounded;

      var ripple = new Ripple(element);
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
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
  }]);

  function Ripple() {
    var _ref2;

    _classCallCheck(this, Ripple);

    for (var _len = arguments.length, config = Array(_len), _key = 0; _key < _len; _key++) {
      config[_key] = arguments[_key];
    }

    // 用来处理是否设置了 disabled
    var _this = _possibleConstructorReturn(this, (_ref2 = Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call.apply(_ref2, [this].concat(config)));

    _this.disabled = false;

    // 是否是无界限的 Ripple
    _this.unbounded = false;

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

    //
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

  // /**
  //  * @returns {boolean}
  //  */
  // get unbounded() {
  //   return this.unbounded;
  // }
  //
  // /**
  //  * @param {boolean} unbounded
  //  */
  // set unbounded(unbounded) {
  //   const {UNBOUNDED} = classes;
  //   this.unbounded = Boolean(unbounded);
  //   if (this.unbounded) {
  //     this.element.classList.add(UNBOUNDED);
  //   } else {
  //     this.element.classList.remove(UNBOUNDED);
  //   }
  // }

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

      // 波纹大小

      var maxDim = Math.max(width, height);
      // 波纹直径
      var diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

      // 初始波纹大小，取波纹大小的 60%
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
      var VAR_SIZE = cssVar.VAR_SIZE,
          VAR_LEFT = cssVar.VAR_LEFT,
          VAR_TOP = cssVar.VAR_TOP,
          VAR_SCALE = cssVar.VAR_SCALE;


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

      var VAR_TRANSLATE_START = cssVar.VAR_TRANSLATE_START,
          VAR_TRANSLATE_END = cssVar.VAR_TRANSLATE_END;
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
    value: function animateDeactivation(e, _ref3) {
      var wasActivatedByPointer = _ref3.wasActivatedByPointer,
          wasElementMadeActive = _ref3.wasElementMadeActive;
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
/* 5 */
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
    _classCallCheck(this, Component);

    this.element = element;
    // 设置 config 到 this 上

    for (var _len = arguments.length, config = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      config[_key - 1] = arguments[_key];
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = config[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        this[key] = config[key];
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=perfect.js.map