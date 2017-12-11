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
exports.CatalogueSpy = exports.ScrollSpy = undefined;

var _scrollSpy = __webpack_require__(2);

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _catalogueSpy = __webpack_require__(3);

var _catalogueSpy2 = _interopRequireDefault(_catalogueSpy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.ScrollSpy = _scrollSpy2.default;
exports.CatalogueSpy = _catalogueSpy2.default;

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=perfect.js.map