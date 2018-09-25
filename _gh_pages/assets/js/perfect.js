/*!
 Perfect CSS for the web
 Copyright © 2016-2018 JD Finance Inc.
 License: MIT (https://github.com/joy-web/perfect-css/blob/master/LICENSE)
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports['perfect'] = factory();
  else root['perfect'] = factory();
})(window, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {}; // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      }); // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ); // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true; // Return the exports of the module
      /******/
      /******/ /******/ return module.exports;
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules; // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          enumerable: true,
          get: getter,
        });
        /******/
      }
      /******/
    }; // define __esModule on exports
    /******/
    /******/ /******/ __webpack_require__.r = function(exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
    /******/
    /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
      value,
      mode
    ) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (
        mode & 4 &&
        typeof value === 'object' &&
        value &&
        value.__esModule
      )
        return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {
        enumerable: true,
        value: value,
      });
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function(key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    }; // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    }; // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    }; // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
    /******/
    /******/
    /******/ /******/ return __webpack_require__(
      (__webpack_require__.s = './components/perfect.js')
    );
    /******/
  })(
    /************************************************************************/
    /******/ {
      /***/ './components/base/component.js':
        /*!**************************************!*\
  !*** ./components/base/component.js ***!
  \**************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js'
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_4__
          );

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          /**
           * 组件接口，所有的组件都应该继承该组件
           */
          var Component =
            /*#__PURE__*/
            (function() {
              _createClass(Component, null, [
                {
                  key: 'mount',

                  /**
                   * 提供静态方法，用来挂载实例化组件
                   * 子组件可以覆盖该方法
                   * @param element
                   * @returns {Component}
                   */
                  value: function mount(element) {
                    return new Component(element);
                  },
                },
              ]);

              function Component(element) {
                var _this = this;

                var config =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};

                _classCallCheck(this, Component);

                this.element = element; // 设置 config 到 this 上

                Object.keys(config).forEach(function(key) {
                  _this[key] = config[key];
                });
                this.init();
              }

              _createClass(Component, [
                {
                  key: 'init',
                  value: function init() {},
                  /*
     * 初始化
     * 子组件可以覆盖该方法，具体实现要初始化的内容
     */
                  // 卸载组件
                },
                {
                  key: 'unmount',
                  value: function unmount() {}, // 子组件可以盖该方法

                  /**
                   * 公共方法，添加注册事件
                   * @param evtType
                   * @param handler
                   */
                },
                {
                  key: 'listen',
                  value: function listen(evtType, handler) {
                    this.element.addEventListener(evtType, handler);
                  },
                  /**
                   * 公共方法，卸载已注册的事件
                   * @param evtType
                   * @param handler
                   */
                },
                {
                  key: 'unlisten',
                  value: function unlisten(evtType, handler) {
                    this.element.removeEventListener(evtType, handler);
                  },
                  /**
                   * 公共方法，创建并分发事件
                   * @param evtType 事件名称
                   * @param detail 当事件初始化时传递的数据
                   * @param bubbles 表明该事件是否会冒泡
                   * @param cancelable 表明该事件是否可以被取消
                   */
                },
                {
                  key: 'emit',
                  value: function emit(evtType, detail) {
                    var bubbles =
                      arguments.length > 2 && arguments[2] !== undefined
                        ? arguments[2]
                        : false;
                    var cancelable =
                      arguments.length > 3 && arguments[3] !== undefined
                        ? arguments[3]
                        : false;
                    var evt;

                    if (typeof CustomEvent === 'function') {
                      evt = new CustomEvent(evtType, {
                        detail: detail,
                        bubbles: bubbles,
                        cancelable: cancelable,
                      });
                    } else {
                      evt = document.createEvent('CustomEvent');
                      evt.initCustomEvent(evtType, bubbles, cancelable, detail);
                    }

                    this.element.dispatchEvent(evt);
                  },
                },
              ]);

              return Component;
            })();

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = Component;

          /***/
        },

      /***/ './components/base/util.js':
        /*!*********************************!*\
  !*** ./components/base/util.js ***!
  \*********************************/
        /*! exports provided: getUuid, isWheel, offset, position, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getUuid',
            function() {
              return getUuid;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'isWheel',
            function() {
              return isWheel;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'offset',
            function() {
              return offset;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'position',
            function() {
              return position;
            }
          );
          // 提供工具类方法
          var MAX_UUID = 1000000;

          function isWindow(elem) {
            return elem != null && elem === elem.window;
          }

          function getWindow(elem) {
            return isWindow(elem)
              ? elem
              : elem.nodeType === 9 && elem.defaultView;
          }
          /**
           * getStyles
           * @param {type} element
           * @param {type} property
           * @returns {styles}
           */

          function getStyles(element, property, extra) {
            var styles = element.ownerDocument.defaultView.getComputedStyle(
              element,
              null
            );

            if (property) {
              var cssValue =
                styles.getPropertyValue(property) || styles[property];

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

            while (
              offsetParent &&
              elem.tagName.toLowerCase() !== 'html' &&
              getStyles(offsetParent, 'position') === 'static'
            ) {
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
          } // 根据浏览器设置其鼠标滑轮事件

          var isWheel = (function() {
            /*
   * compatibility: mouse wheel event
   * http://www.w3help.org/zh-cn/causes/SD9015
   */
            var ua = navigator.userAgent; // ie 11 /gecko/i.test(ua) value is true ,so need to judge /firefox/i.test(ua)

            if (
              /gecko/i.test(ua) &&
              !/webkit/i.test(ua) &&
              /firefox/i.test(ua)
            ) {
              // Firefox
              return false;
            } // IE Safari Chrome Opera

            return true;
          })();
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

            var docElem, win, doc;
            /*
   * Support: IE <=11 only
   * Running getBoundingClientRect on a
   * disconnected node in IE throws an error
   */

            if (!el.getClientRects().length) {
              return {
                top: 0,
                left: 0,
              };
            }

            var rect = el.getBoundingClientRect(); // Make sure element is not hidden (display: none)

            if (rect.width || rect.height) {
              doc = el.ownerDocument;
              win = getWindow(doc);
              docElem = doc.documentElement;
              return {
                top: rect.top + win.pageYOffset - docElem.clientTop,
                left: rect.left + win.pageXOffset - docElem.clientLeft,
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

            var offsetParent,
              offsetXY,
              parentOffset = {
                top: 0,
                left: 0,
              };

            if (getStyles(elem, 'position') === 'fixed') {
              offsetXY = elem.getBoundingClientRect();
            } else {
              offsetParent = getOffsetParent(elem);
              offsetXY = offset(elem);

              if (elem.tagName.toLowerCase() !== 'html') {
                parentOffset = offset(offsetParent);
              }

              parentOffset.top += getStyles(
                offsetParent,
                'borderTopWidth',
                true
              );
              parentOffset.left += getStyles(
                offsetParent,
                'borderLeftWidth',
                true
              );
            }

            return {
              top:
                offsetXY.top -
                parentOffset.top -
                getStyles(elem, 'marginTop', true),
              left:
                offsetXY.left -
                parentOffset.left -
                getStyles(elem, 'marginLeft', true),
            };
          }
          var util = {
            getUuid: getUuid,
            isWheel: isWheel,
            offset: offset,
            position: position,
          };
          /* harmony default export */ __webpack_exports__['default'] = util;

          /***/
        },

      /***/ './components/elements/menu/list-menu/list-menu.js':
        /*!*********************************************************!*\
  !*** ./components/elements/menu/list-menu/list-menu.js ***!
  \*********************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es7.symbol.async-iterator */ './node_modules/core-js/modules/es7.symbol.async-iterator.js'
          );
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.symbol */ './node_modules/core-js/modules/es6.symbol.js'
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/es6.object.create */ './node_modules/core-js/modules/es6.object.create.js'
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/es6.object.set-prototype-of */ './node_modules/core-js/modules/es6.object.set-prototype-of.js'
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! core-js/modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js'
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_6__
          );
          /* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! core-js/modules/es6.array.index-of */ './node_modules/core-js/modules/es6.array.index-of.js'
          );
          /* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_7__
          );
          /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ../../../base/component */ './components/base/component.js'
          );
          /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ./util */ './components/elements/menu/list-menu/util.js'
          );

          function _typeof(obj) {
            if (
              typeof Symbol === 'function' &&
              typeof Symbol.iterator === 'symbol'
            ) {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            }
            return _assertThisInitialized(self);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          // import {isWheel} from '../../../base/util';

          var win = window;
          var dom = document;
          var body = dom.body;
          var reg = /translateY\(([-\w]+)\)/;
          /*
 * 定义常量
 * class 样式
 */

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
            EXPANDED: 'expanded',
          };
          /** @enum {string} */

          var strings = {
            ITEMS_SELECTOR: '.list-menu > .list-menu-items',
            // 第一层 items
            LIST_ITEM_SELECTOR: '.list-menu > .list-menu-items > .list-item',
            // 第一层 item
            LIST_ITEM_BRANCH_SELECTOR: '.list-item[aria-level="branch"]',
            // 所有分支节点
            LIST_ITEM_LEAF_SELECTOR: '.list-item:not([aria-level="branch"])',
            // 所有叶子节点
            SELECTED_EVENT: 'listmenu:selected',
            CANCEL_EVENT: 'listmenu:cancel',
            ARIA_DISABLED_ATTR: 'aria-disabled',
            ARIA_CONTROLS_ATTR: 'aria-controls',
            ARIA_CONTROLS_CLICK: 'click',
            ARIA_LEVEL_ATTR: 'aria-level',
            ARIA_LEVEL_BRANCH: 'branch',
            EXPANDED: '.expanded',
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
            TRANSITION_Y2: 1,
          };

          var ListMenu =
            /*#__PURE__*/
            (function(_Component) {
              _inherits(ListMenu, _Component);

              _createClass(
                ListMenu,
                [
                  {
                    key: 'open',

                    /** @return {boolean} */
                    get: function get() {
                      return this.isOpen;
                    },
                    /** @param {boolean} value */
                    set: function set(value) {
                      if (value) {
                        this.show();
                      } else {
                        this.hide();
                      }
                    },
                  },
                ],
                [
                  {
                    key: 'mount',

                    /**
                     * 静态方法实例化 ListMenu 组件
                     * @param element
                     * @param config
                     * @returns {ListMenu}
                     */
                    value: function mount(element) {
                      var config =
                        arguments.length > 1 && arguments[1] !== undefined
                          ? arguments[1]
                          : {
                              filterDivider: 'list-divider',
                            };
                      return new ListMenu(element, config);
                    },
                  },
                  {
                    key: 'classes',
                    get: function get() {
                      return classes;
                    },
                  },
                  {
                    key: 'strings',
                    get: function get() {
                      return strings;
                    },
                  },
                  {
                    key: 'numbers',
                    get: function get() {
                      return numbers;
                    },
                  },
                ]
              );

              function ListMenu(_element, config) {
                var _this;

                _classCallCheck(this, ListMenu);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(ListMenu).call(this, _element, config)
                ); // 是否过滤掉分隔符 list-divider，默认过滤

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleClickMenu',
                  function(e) {
                    var target = e.target;
                    var ARIA_DISABLED_ATTR = strings.ARIA_DISABLED_ATTR,
                      ARIA_LEVEL_ATTR = strings.ARIA_LEVEL_ATTR,
                      ARIA_LEVEL_BRANCH = strings.ARIA_LEVEL_BRANCH; // disabled 返回

                    if (target.getAttribute(ARIA_DISABLED_ATTR) === 'true') {
                      return;
                    } // 点击分支节点

                    if (
                      target.getAttribute(ARIA_LEVEL_ATTR) === ARIA_LEVEL_BRANCH
                    ) {
                      // 删除兄弟节点展开样式
                      var node = target.parentNode.firstElementChild;

                      while (node) {
                        node.classList.remove(classes.EXPANDED);
                        node = node.nextElementSibling;
                      }

                      target.classList.add(classes.EXPANDED);
                      return;
                    } // 如果点击的是其他非叶子节点，则返回

                    var targetIndex = _this.leafItems.indexOf(target);

                    if (targetIndex < 0) {
                      return;
                    } // 防抖处理，防止多次点击

                    if (_this.selectedTriggerTimerId) {
                      return;
                    } // 动画结束后隐藏

                    _this.selectedTriggerTimerId = setTimeout(function() {
                      _this.selectedTriggerTimerId = 0;

                      _this.hide(); // 去掉展开的级联节点

                      _this.adapter.removeExpandClass();

                      _this.adapter.setActiveItemAtIndex(targetIndex);

                      _this.adapter.notifySelected();
                    }, numbers.SELECTED_TRIGGER_DELAY);
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleKeyboardUp',
                  function(evt) {
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
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleKeyboardDown',
                  function(evt) {
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

                    if (
                      !shiftKey &&
                      isTab &&
                      focusedItemIndex === lastItemIndex
                    ) {
                      _this.adapter.focusItemAtIndex(0);

                      evt.preventDefault();
                      return false;
                    } // Ensure Arrow{Up,Down} and space do not cause inadvertent scrolling

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
                      if (
                        focusedItemIndex === lastItemIndex ||
                        _this.adapter.isFocused()
                      ) {
                        _this.adapter.focusItemAtIndex(0);
                      } else {
                        _this.adapter.focusItemAtIndex(focusedItemIndex + 1);
                      }
                    }

                    return true;
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleDocumentClick',
                  function(evt) {
                    var el = evt.target;

                    while (el && el !== dom.documentElement) {
                      if (
                        _this.adapter.eventTargetHasClass(el, classes.LIST_ITEM)
                      ) {
                        return;
                      }

                      el = el.parentNode;
                    }

                    _this.adapter.notifyCancel();

                    var expandedEl = _this.element.querySelectorAll(
                      strings.EXPANDED
                    );

                    [].forEach.call(expandedEl, function(element) {
                      element.classList.remove(classes.EXPANDED);
                    });

                    _this.items.forEach(function(item) {
                      item.style.removeProperty('display');
                    });

                    _this.hide(evt);
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleItemScroll',
                  function(evt) {
                    var step = 10;

                    if (_this.visibleItemHeight <= _this.maxItemHeight) {
                      evt.preventDefault();
                      evt.stopPropagation();
                    } // 判断鼠标滑轮向上还是向下滑动

                    var upDown;
                    var detail = evt.detail,
                      wheelDelta = evt.wheelDelta;

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

                    var transform = _this.itemsContainer.style.transform;
                    var y = reg.exec(transform);
                    y = y ? parseFloat(y[1], 10) : 0;

                    if (
                      (upDown === 'up' && y === 0) ||
                      (upDown === 'down' && Math.abs(y) === _this.maxOffset)
                    ) {
                      return;
                    }

                    if (upDown === 'up' && y < 0) {
                      _this.itemsContainer.style.transform = 'translateY('.concat(
                        Math.min(y + step, 0),
                        'px)'
                      );
                    } else if (
                      upDown === 'down' &&
                      Math.abs(y) < _this.maxOffset
                    ) {
                      _this.itemsContainer.style.transform = 'translateY('.concat(
                        Math.max(y - step, -_this.maxOffset),
                        'px)'
                      );
                    }
                  }
                );

                if (_this.filterDivider === undefined) {
                  _this.filterDivider = 'list-divider';
                } // 如果没有已选中的 option，是否默认选中第一个

                if (_this.selectedFirstOption === undefined) {
                  _this.selectedFirstOption = true;
                } // 定义上一个获取焦点的元素

                _this.previousFocus = null; // 创建适配器

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
              /**
               * 封装适配器方法
               * @return {object}
               */

              _createClass(ListMenu, [
                {
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
                      eventTargetHasClass: function eventTargetHasClass(
                        target,
                        className
                      ) {
                        return target.classList.contains(className);
                      },
                      getInnerDimensions: function getInnerDimensions() {
                        var itemsContainer = _this2.itemsContainer;
                        return {
                          width: itemsContainer.offsetWidth,
                          height: itemsContainer.offsetHeight,
                        };
                      },
                      hasAnchor: function hasAnchor() {
                        return (
                          _this2.element.parentElement &&
                          _this2.element.parentElement.classList.contains(
                            'menu-anchor'
                          )
                        );
                      },
                      getAnchorDimensions: function getAnchorDimensions() {
                        return _this2.element.parentElement.getBoundingClientRect();
                      },
                      getWindowDimensions: function getWindowDimensions() {
                        return {
                          width: win.innerWidth,
                          height: win.innerHeight,
                        };
                      },
                      setScale: function setScale(x, y) {
                        _this2.element.style[
                          Object(
                            _util__WEBPACK_IMPORTED_MODULE_9__[
                              'getTransformPropertyName'
                            ]
                          )(win)
                        ] = 'scale('.concat(x, ', ').concat(y, ')');
                      },
                      setInnerScale: function setInnerScale(x, y) {
                        _this2.itemsContainer.style[
                          Object(
                            _util__WEBPACK_IMPORTED_MODULE_9__[
                              'getTransformPropertyName'
                            ]
                          )(win)
                        ] = 'scale('.concat(x, ', ').concat(y, ')');
                      },
                      getNumberOfItems: function getNumberOfItems() {
                        return _this2.items.length;
                      },
                      getYParamsForItemAtIndex: function getYParamsForItemAtIndex(
                        index
                      ) {
                        var _this2$items$index = _this2.items[index],
                          top = _this2$items$index.offsetTop,
                          height = _this2$items$index.offsetHeight;
                        return {
                          top: top,
                          height: height,
                        };
                      },
                      setTransitionDelayForItemAtIndex: function setTransitionDelayForItemAtIndex(
                        index,
                        value
                      ) {
                        return _this2.items[index].style.setProperty(
                          'transition-delay',
                          value
                        );
                      },
                      setActiveItemAtIndex: function setActiveItemAtIndex(
                        index
                      ) {
                        if (_this2.previousActiveItems) {
                          _this2.previousActiveItems.forEach(function(el) {
                            el.classList.remove(classes.ACTIVE);
                          });
                        }

                        _this2.leafItems[index].classList.add(classes.ACTIVE);

                        _this2.previousActiveItems = [];
                        _this2.previousActiveItemsIndex = []; // 记录活动元素 index

                        _this2.previousActiveItems.push(
                          _this2.leafItems[index]
                        );

                        _this2.previousActiveItemsIndex.push(
                          Object(
                            _util__WEBPACK_IMPORTED_MODULE_9__[
                              'getElementIndexOfParent'
                            ]
                          )(_this2.leafItems[index], _this2.filterDivider)
                        );

                        var parentNode =
                          _this2.leafItems[index].parentNode.parentNode; // 分支节点也设置 ACTIVE

                        while (
                          parentNode &&
                          parentNode.classList.contains(classes.LIST_ITEM)
                        ) {
                          parentNode.classList.add(classes.ACTIVE);

                          _this2.previousActiveItems.unshift(parentNode);

                          _this2.previousActiveItemsIndex.unshift(
                            Object(
                              _util__WEBPACK_IMPORTED_MODULE_9__[
                                'getElementIndexOfParent'
                              ]
                            )(parentNode, _this2.filterDivider)
                          );

                          parentNode = parentNode.parentNode.parentNode;
                        }
                      },
                      // 设置当前活动 item 样式
                      clearActiveItem: function clearActiveItem() {
                        _this2.leafItems.forEach(function(item) {
                          item.classList.remove(classes.ACTIVE);
                        });
                      },
                      // 清空活动 item
                      removeExpandClass: function removeExpandClass() {
                        [].forEach.call(
                          _this2.element.querySelectorAll(
                            strings.LIST_ITEM_BRANCH_SELECTOR
                          ),
                          function(el) {
                            el.classList.remove(classes.EXPANDED);
                          }
                        );
                      },
                      notifySelected: function notifySelected() {
                        _this2.emit(strings.SELECTED_EVENT, {
                          index: _this2.previousActiveItemsIndex,
                          leafIndex: _this2.activeItemIndex,
                          // 叶子节点活动的 id
                          items: _this2.previousActiveItems,
                        });
                      },
                      // 选中某一 item，通过注册的事件调用该方法
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
                        _this2.element.style[
                          ''.concat(
                            Object(
                              _util__WEBPACK_IMPORTED_MODULE_9__[
                                'getTransformPropertyName'
                              ]
                            )(win),
                            '-origin'
                          )
                        ] = origin;
                      },
                      setPosition: function setPosition(position) {
                        _this2.element.style.left =
                          'left' in position ? position.left : null;
                        _this2.element.style.right =
                          'right' in position ? position.right : null;
                        _this2.element.style.top =
                          'top' in position ? position.top : null;
                        _this2.element.style.bottom =
                          'bottom' in position ? position.bottom : null;
                      },
                      getAccurateTime: function getAccurateTime() {
                        return win.performance.now();
                      }, // 系统时间
                    };
                  },
                },
                {
                  key: 'init',
                  value: function init() {
                    var ITEMS_SELECTOR = strings.ITEMS_SELECTOR,
                      LIST_ITEM_SELECTOR = strings.LIST_ITEM_SELECTOR,
                      LIST_ITEM_LEAF_SELECTOR = strings.LIST_ITEM_LEAF_SELECTOR; // 返回菜单 item 根容器

                    this.itemsContainer = this.element.querySelector(
                      ITEMS_SELECTOR
                    ); // 返回菜单第一层 items 中的所有 item

                    this.items = [].slice.call(
                      this.itemsContainer.querySelectorAll(LIST_ITEM_SELECTOR)
                    ); // 返回菜单 items 中的所有叶子节点item

                    this.leafItems = [].slice.call(
                      this.itemsContainer.querySelectorAll(
                        LIST_ITEM_LEAF_SELECTOR
                      )
                    );

                    if (
                      this.activeItemIndex === undefined &&
                      this.selectedFirstOption
                    ) {
                      this.activeItemIndex = 0;
                    }
                  }, // 渲染组件
                },
                {
                  key: 'render',
                  value: function render() {
                    var ELEMENT = classes.ELEMENT,
                      OPEN = classes.OPEN;

                    if (!this.adapter.hasClass(ELEMENT)) {
                      throw new Error(
                        '\u5217\u8868\u83DC\u5355\u6839\u8282\u70B9\u9700\u8981\u8BBE\u7F6E class '.concat(
                          ELEMENT,
                          '.'
                        )
                      );
                    }

                    if (!this.adapter.hasNecessaryDom()) {
                      throw new Error('列表菜单需要设置 items 元素节点.');
                    } // 有 OPEN 样式时，表示打开状态

                    if (this.adapter.hasClass(OPEN)) {
                      this.isOpen = true;
                    } // 先清空已经设置的 active

                    this.adapter.clearActiveItem(); // 设置当前活动的 item

                    if (this.activeItemIndex !== undefined) {
                      this.adapter.setActiveItemAtIndex(this.activeItemIndex);
                    }

                    this.addEventListeners();
                  },
                },
                {
                  key: 'unmount',
                  value: function unmount() {
                    clearTimeout(this.selectedTriggerTimerId); // 取消当前进行的动画

                    cancelAnimationFrame(this.animationRequestId);
                    this.removeEventListeners();
                  }, // 设置监听事件
                },
                {
                  key: 'addEventListeners',
                  value: function addEventListeners() {
                    this.element.addEventListener(
                      'click',
                      this.handleClickMenu
                    );
                    this.element.addEventListener(
                      'keyup',
                      this.handleKeyboardUp
                    );
                    this.element.addEventListener(
                      'keydown',
                      this.handleKeyboardDown
                    );
                  }, // 删除事件
                },
                {
                  key: 'removeEventListeners',
                  value: function removeEventListeners() {
                    this.element.removeEventListener(
                      'click',
                      this.handleClickMenu
                    );
                    this.element.removeEventListener(
                      'keyup',
                      this.handleKeyboardUp
                    );
                    this.element.removeEventListener(
                      'keydown',
                      this.handleKeyboardDown
                    );
                    body.removeEventListener('click', this.handleDocumentClick); // this.itemsContainer.removeEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleItemScroll);
                  }, // 设置活动的元素
                },
                {
                  key: 'setActiveItemAtIndex',
                  value: function setActiveItemAtIndex(index) {
                    if (index !== undefined && index !== null) {
                      this.activeItemIndex = index;
                      this.adapter.setActiveItemAtIndex(index);
                    }
                  },
                  /**
                   * @param {!Event} e
                   * @private
                   */
                },
                {
                  key: 'show',

                  /** @param {{focusIndex: ?number}=} options */
                  value: function show() {
                    var _this3 = this;

                    var _ref =
                        arguments.length > 0 && arguments[0] !== undefined
                          ? arguments[0]
                          : {},
                      _ref$focusIndex = _ref.focusIndex,
                      focusIndex =
                        _ref$focusIndex === void 0 ? null : _ref$focusIndex;

                    // 设置当前焦点元素
                    this.adapter.saveFocus();
                    this.adapter.addClass(classes.ANIMATING);
                    this.animationRequestId = requestAnimationFrame(function() {
                      _this3.dimensions = _this3.adapter.getInnerDimensions(); // this.adjustMenuMaxHeight();

                      _this3.applyTransitionDelays();

                      _this3.autoPosition();

                      _this3.animateMenu();

                      _this3.adapter.addClass(classes.OPEN);

                      _this3.focusOnOpen(focusIndex); // 添加 document 事件

                      body.addEventListener(
                        'click',
                        _this3.handleDocumentClick
                      );
                      /*
         * http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
         *this.itemsContainer.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleItemScroll);
         */
                    });
                    this.isOpen = true;
                  },
                  /**
                   *  关闭隐藏菜单
                   * @param {Event=} evt
                   */
                },
                {
                  key: 'hide',
                  value: function hide() {
                    var _this4 = this;

                    var evt =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : null;
                    var disabled = evt
                      ? evt.target.getAttribute(strings.ARIA_DISABLED_ATTR) ===
                        'true'
                      : false;

                    if (disabled) {
                      return;
                    }

                    body.removeEventListener('click', this.handleDocumentClick); // 添加动画 class

                    this.adapter.addClass(classes.ANIMATING);
                    requestAnimationFrame(function() {
                      _this4.removeTransitionDelays();

                      _this4.animateMenu();

                      _this4.adapter.removeClass(classes.OPEN);
                    });
                    this.isOpen = false; // 把焦点定位到上一个焦点

                    this.adapter.restoreFocus();
                  },
                  /**
                   * 计算 Item 的高度
                   */
                },
                {
                  key: 'calcItemHeight',
                  value: function calcItemHeight() {
                    var property = window.getComputedStyle(this.items[0]);
                    var lineHeight = property.getPropertyValue('line-height');
                    var paddingTop = property.getPropertyValue('padding-top');
                    var paddingBottom = property.getPropertyValue(
                      'padding-bottom'
                    );
                    return (
                      parseInt(lineHeight, 10) +
                      parseInt(paddingTop, 10) +
                      parseInt(paddingBottom, 10)
                    );
                  },
                  /**
                   * 调整菜单高度
                   */
                },
                {
                  key: 'adjustMenuMaxHeight',
                  value: function adjustMenuMaxHeight() {
                    var rect = this.itemsContainer.getBoundingClientRect();

                    var _this$adapter$getWind = this.adapter.getWindowDimensions(),
                      height = _this$adapter$getWind.height;

                    var itemHeight = this.calcItemHeight();
                    var maxHeight = height - rect.top;
                    var visibleItemNum = Math.floor(maxHeight / itemHeight);
                    this.visibleItemHeight = visibleItemNum * itemHeight;
                    this.maxItemHeight = this.items.length * itemHeight;
                    this.itemsContainer.style.setProperty(
                      'height',
                      ''.concat(this.visibleItemHeight, 'px')
                    ); // 隐藏多余的 item

                    for (var i = visibleItemNum; i < this.items.length; i++) {
                      this.items[i].style.setProperty('display', 'none');
                    }
                  },
                  /**
                   * Calculates transition delays for individual menu items, so that they fade in one at a time.
                   * @private
                   */
                },
                {
                  key: 'applyTransitionDelays',
                  value: function applyTransitionDelays() {
                    var BOTTOM_LEFT = classes.BOTTOM_LEFT,
                      BOTTOM_RIGHT = classes.BOTTOM_RIGHT;
                    var numItems = this.adapter.getNumberOfItems();
                    var height = this.dimensions.height;
                    var transitionDuration =
                      numbers.TRANSITION_DURATION_MS / 1000;
                    var start = numbers.TRANSITION_SCALE_ADJUSTMENT_Y;

                    for (var index = 0; index < numItems; index++) {
                      var _this$adapter$getYPar = this.adapter.getYParamsForItemAtIndex(
                          index
                        ),
                        itemTop = _this$adapter$getYPar.top,
                        itemHeight = _this$adapter$getYPar.height;

                      this.itemHeight = itemHeight;
                      var itemDelayFraction = itemTop / height;

                      if (
                        this.adapter.hasClass(BOTTOM_LEFT) ||
                        this.adapter.hasClass(BOTTOM_RIGHT)
                      ) {
                        itemDelayFraction =
                          (height - itemTop - itemHeight) / height;
                      }

                      var itemDelay =
                        (start + itemDelayFraction * (1 - start)) *
                        transitionDuration; // Use toFixed() here to normalize CSS unit precision across browsers

                      this.adapter.setTransitionDelayForItemAtIndex(
                        index,
                        ''.concat(itemDelay.toFixed(3), 's')
                      );
                    }
                  },
                  /** @private */
                  // 自动计算位置
                },
                {
                  key: 'autoPosition',
                  value: function autoPosition() {
                    var _position;

                    if (!this.adapter.hasAnchor()) {
                      return;
                    } // Defaults: open from the top left.

                    var vertical = 'top';
                    var horizontal = 'left';
                    var anchor = this.adapter.getAnchorDimensions();
                    var windowDimensions = this.adapter.getWindowDimensions();
                    var topOverflow =
                      anchor.top +
                      this.dimensions.height -
                      windowDimensions.height;
                    var bottomOverflow = this.dimensions.height - anchor.bottom;
                    var extendsBeyondTopBounds = topOverflow > 0;

                    if (extendsBeyondTopBounds) {
                      if (bottomOverflow < topOverflow) {
                        vertical = 'bottom';
                      }
                    }

                    var leftOverflow =
                      anchor.left +
                      this.dimensions.width -
                      windowDimensions.width;
                    var rightOverflow = this.dimensions.width - anchor.right;
                    var extendsBeyondLeftBounds = leftOverflow > 0;

                    if (
                      extendsBeyondLeftBounds &&
                      rightOverflow < leftOverflow
                    ) {
                      horizontal = 'right';
                    }

                    var position = ((_position = {}),
                    _defineProperty(_position, horizontal, '0'),
                    _defineProperty(_position, vertical, '0'),
                    _position);
                    this.adapter.setTransformOrigin(
                      ''.concat(vertical, ' ').concat(horizontal)
                    );
                    this.adapter.setPosition(position);
                  },
                  /**
                   * @param {?number} focusIndex
                   * @private
                   */
                },
                {
                  key: 'focusOnOpen',
                  value: function focusOnOpen(focusIndex) {
                    if (focusIndex === null) {
                      // First, try focusing the menu.
                      this.adapter.focus(); // If that doesn't work, focus first item instead.

                      if (!this.adapter.isFocused()) {
                        this.adapter.focusItemAtIndex(0);
                      }
                    } else {
                      this.adapter.focusItemAtIndex(focusIndex);
                    }
                  },
                  /**
                   * 删除菜单动画延迟，设置 transition-delay 为 null
                   * @private
                   */
                },
                {
                  key: 'removeTransitionDelays',
                  value: function removeTransitionDelays() {
                    var numItems = this.adapter.getNumberOfItems();

                    for (var i = 0; i < numItems; i++) {
                      this.adapter.setTransitionDelayForItemAtIndex(i, null);
                    }
                  },
                  /**
                   * 设置打开或关闭菜单动画
                   * @private
                   */
                },
                {
                  key: 'animateMenu',
                  value: function animateMenu() {
                    var _this5 = this;

                    this.startTime = this.adapter.getAccurateTime();
                    this.startScaleX = this.scaleX;
                    this.startScaleY = this.scaleY;
                    this.targetScale = this.isOpen ? 1 : 0; // 处理菜单动画

                    if (!this.running) {
                      this.running = true;
                      this.animationRequestId = requestAnimationFrame(
                        function() {
                          return _this5.animationLoop();
                        }
                      );
                    }
                  },
                  /**
                   * 循环处理菜单动画
                   * @private
                   */
                },
                {
                  key: 'animationLoop',
                  value: function animationLoop() {
                    var _this6 = this;

                    var time = this.adapter.getAccurateTime();
                    var TRANSITION_DURATION_MS = numbers.TRANSITION_DURATION_MS,
                      TRANSITION_X1 = numbers.TRANSITION_X1,
                      TRANSITION_Y1 = numbers.TRANSITION_Y1,
                      TRANSITION_X2 = numbers.TRANSITION_X2,
                      TRANSITION_Y2 = numbers.TRANSITION_Y2,
                      TRANSITION_SCALE_ADJUSTMENT_X =
                        numbers.TRANSITION_SCALE_ADJUSTMENT_X,
                      TRANSITION_SCALE_ADJUSTMENT_Y =
                        numbers.TRANSITION_SCALE_ADJUSTMENT_Y;
                    var currentTime = Object(
                      _util__WEBPACK_IMPORTED_MODULE_9__['clamp']
                    )((time - this.startTime) / TRANSITION_DURATION_MS); // Animate X axis very slowly, so that only the Y axis animation is visible during fade-out.

                    var currentTimeX = Object(
                      _util__WEBPACK_IMPORTED_MODULE_9__['clamp']
                    )(
                      (currentTime - TRANSITION_SCALE_ADJUSTMENT_X) /
                        (1 - TRANSITION_SCALE_ADJUSTMENT_X)
                    ); // No time-shifting on the Y axis when closing.

                    var currentTimeY = currentTime;
                    var startScaleY = this.startScaleY;

                    if (this.targetScale === 1) {
                      // Start with the menu at the height of a single item.
                      if (this.itemHeight) {
                        startScaleY = Math.max(
                          this.itemHeight / this.dimensions.height,
                          startScaleY
                        );
                      } // X axis moves faster, so time-shift forward.

                      currentTimeX = Object(
                        _util__WEBPACK_IMPORTED_MODULE_9__['clamp']
                      )(currentTime + TRANSITION_SCALE_ADJUSTMENT_X); // Y axis moves slower, so time-shift backwards and adjust speed by the difference.

                      currentTimeY = Object(
                        _util__WEBPACK_IMPORTED_MODULE_9__['clamp']
                      )(
                        (currentTime - TRANSITION_SCALE_ADJUSTMENT_Y) /
                          (1 - TRANSITION_SCALE_ADJUSTMENT_Y)
                      );
                    } // 为 X 和 Y 轴方向设置贝塞尔曲线

                    var easeX = Object(
                      _util__WEBPACK_IMPORTED_MODULE_9__['bezierProgress']
                    )(
                      currentTimeX,
                      TRANSITION_X1,
                      TRANSITION_Y1,
                      TRANSITION_X2,
                      TRANSITION_Y2
                    );
                    var easeY = Object(
                      _util__WEBPACK_IMPORTED_MODULE_9__['bezierProgress']
                    )(
                      currentTimeY,
                      TRANSITION_X1,
                      TRANSITION_Y1,
                      TRANSITION_X2,
                      TRANSITION_Y2
                    ); // Calculate the scales to apply to the outer container and inner container.

                    this.scaleX =
                      this.startScaleX +
                      (this.targetScale - this.startScaleX) * easeX;
                    var invScaleX = 1 / (this.scaleX === 0 ? 1 : this.scaleX);
                    this.scaleY =
                      startScaleY + (this.targetScale - startScaleY) * easeY;
                    var invScaleY = 1 / (this.scaleY === 0 ? 1 : this.scaleY); // 改变 scale

                    this.adapter.setScale(this.scaleX, this.scaleY);
                    this.adapter.setInnerScale(invScaleX, invScaleY);
                    /*
       * Stop animation when we've covered the entire 0 - 1 range of time.
       * 如果不在 0 到 1 之间则停止动画
       */

                    if (currentTime < 1) {
                      this.animationRequestId = requestAnimationFrame(
                        function() {
                          return _this6.animationLoop();
                        }
                      );
                    } else {
                      this.animationRequestId = 0;
                      this.running = false;
                      this.adapter.removeClass(classes.ANIMATING);
                    }
                  },
                },
              ]);

              return ListMenu;
            })(_base_component__WEBPACK_IMPORTED_MODULE_8__['default']);

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = ListMenu;

          /***/
        },

      /***/ './components/elements/menu/list-menu/util.js':
        /*!****************************************************!*\
  !*** ./components/elements/menu/list-menu/util.js ***!
  \****************************************************/
        /*! exports provided: getTransformPropertyName, clamp, bezierProgress, getElementIndexOfParent */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getTransformPropertyName',
            function() {
              return getTransformPropertyName;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'clamp',
            function() {
              return clamp;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'bezierProgress',
            function() {
              return bezierProgress;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getElementIndexOfParent',
            function() {
              return getElementIndexOfParent;
            }
          );
          /** @type {string|undefined} */
          var storedTransformPropertyName;
          /**
           * Returns the name of the correct transform property to use on the current browser.
           * 返回 transform 兼容性写法
           * @param {!Window} globalObj
           * @param {boolean=} forceRefresh
           * @return {string}
           */

          function getTransformPropertyName(globalObj) {
            var forceRefresh =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : false;

            if (storedTransformPropertyName === undefined || forceRefresh) {
              var el = globalObj.document.createElement('div');
              storedTransformPropertyName =
                'transform' in el.style ? 'transform' : 'webkitTransform';
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
            var min =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : 0;
            var max =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : 1;
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
            return getBezierCoordinate(
              solvePositionFromXValue(time, x1, x2),
              y1,
              y2
            );
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
            } // Step one - from 4 points to 3

            var ic0 = t * c1;
            var ic1 = c1 + t * (c2 - c1);
            var ic2 = c2 + t * (1 - c2); // Step two - from 3 points to 2

            ic0 += t * (ic1 - ic0);
            ic1 += t * (ic2 - ic1); // Final step - last point

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
            } // Initial estimate of t using linear interpolation.

            var t = xVal; // Try gradient descent to solve for t. If it works, it is very fast.

            var tMin = 0;
            var tMax = 1;
            var value = 0;

            for (var i = 0; i < maxIterations; i++) {
              value = getBezierCoordinate(t, x1, x2);
              var derivative =
                (getBezierCoordinate(t + epsilon, x1, x2) - value) / epsilon;

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
            /*
   * If the gradient descent got stuck in a local minimum, e.g. because
   * the derivative was close to 0, use a Dichotomy refinement instead.
   * We limit the number of interations to 8.
   */

            for (
              var _i = 0;
              Math.abs(value - xVal) > epsilon && _i < maxIterations;
              _i++
            ) {
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
          } // 返回当前元素在父元素中的索引 index，是否过滤掉分隔符 list-divider，默认过滤

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

          /***/
        },

      /***/ './components/elements/paging/paging.js':
        /*!**********************************************!*\
  !*** ./components/elements/paging/paging.js ***!
  \**********************************************/
        /*! exports provided: classes, strings, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'classes',
            function() {
              return classes;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'strings',
            function() {
              return strings;
            }
          );
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es7.symbol.async-iterator */ './node_modules/core-js/modules/es7.symbol.async-iterator.js'
          );
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.symbol */ './node_modules/core-js/modules/es6.symbol.js'
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js'
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/es6.array.filter */ './node_modules/core-js/modules/es6.array.filter.js'
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_6__
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_7__
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! core-js/modules/es6.object.create */ './node_modules/core-js/modules/es6.object.create.js'
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_8__
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! core-js/modules/es6.object.set-prototype-of */ './node_modules/core-js/modules/es6.object.set-prototype-of.js'
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__
          );
          /* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! core-js/modules/es6.array.map */ './node_modules/core-js/modules/es6.array.map.js'
          );
          /* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_10__
          );
          /* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! core-js/modules/es6.number.constructor */ './node_modules/core-js/modules/es6.number.constructor.js'
          );
          /* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_11__
          );
          /* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! core-js/modules/es6.number.is-nan */ './node_modules/core-js/modules/es6.number.is-nan.js'
          );
          /* harmony import */ var core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_number_is_nan__WEBPACK_IMPORTED_MODULE_12__
          );
          /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
            /*! ../../base/component */ './components/base/component.js'
          );

          function _typeof(obj) {
            if (
              typeof Symbol === 'function' &&
              typeof Symbol.iterator === 'symbol'
            ) {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              var ownKeys = Object.keys(source);
              if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(
                      source,
                      sym
                    ).enumerable;
                  })
                );
              }
              ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            }
            return target;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            }
            return _assertThisInitialized(self);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          /*
 * 定义常量
 * class 样式
 */

          var classes = {
            PAGING_ITEM: 'paging-item',
            DISABLED: 'disabled',
            ACTIVE: 'active',
          };
          var strings = {};

          var Paging =
            /*#__PURE__*/
            (function(_Component) {
              _inherits(Paging, _Component);

              _createClass(Paging, null, [
                {
                  key: 'mount',

                  /**
                   * 静态方法实例化 Paging 组件
                   * @param element
                   * @param config
                   * @returns {Select}
                   */
                  value: function mount(element, config) {
                    return new Paging(element, config);
                  },
                },
                {
                  key: 'classes',

                  /**
                   * pagingControl 控制是否显示数据信息 {Boolean}
                   * recordPerPage 是否显示改变每页记录数 {Boolean}
                   * jumpControl 是否显示跳至某一页 {Boolean}
                   * @type {{pagingControl: boolean, recordPerPage: boolean, jumpControl: boolean}}
                   */
                  get: function get() {
                    return classes;
                  },
                },
                {
                  key: 'strings',
                  get: function get() {
                    return strings;
                  },
                },
              ]);

              function Paging(element, config) {
                var _this;

                _classCallCheck(this, Paging);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Paging).call(
                    this,
                    element,
                    _objectSpread({}, Paging.defaultConfig, config)
                  )
                ); // 当前页，从1开始，默认1

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleSwitchPage',
                  function(evt) {
                    evt.preventDefault();
                    var target = evt.target;
                    var classList = target.classList;

                    if (classList.contains(classes.PAGING_ITEM)) {
                      // 切换下一页逻辑
                      var pageNum = parseInt(target.dataset.pagenum, 10);

                      _this.handleChangePage(pageNum);
                    } else if (classList.contains('js-jump-btn')) {
                      var input =
                        target.parentNode.previousElementSibling.children[0]
                          .children[0];

                      var _pageNum = parseInt(input.value, 10);

                      if (!Number.isNaN(_pageNum)) {
                        _this.handleChangePage(_pageNum);
                      }
                    }
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'handleChangePerPage',
                  function(evt) {
                    evt.preventDefault();
                    var target = evt.target;
                    var classList = target.classList;

                    if (classList.contains('select-inner')) {
                      // 切换下一页逻辑
                      var pageSize = parseInt(target.value, 10);
                      _this.pageSize = pageSize;

                      _this.loadData();
                    }
                  }
                );

                if (_this.pageNum === undefined) {
                  _this.pageNum = 1;
                } // 每页条数，默认10

                if (_this.pageSize === undefined) {
                  _this.pageSize = 10;
                }
                /*
     * 总页码
     * this.totalPages
     */

                /*
     * 总记录数
     * this.totalCount
     */

                /*
     * 加载数据回调函数
     * this.loadPageData = function() {}
     */

                /*
     * 控制是否显示数据信息 {Boolean}
     * this.pagingControl
     */

                /*
     * 是否显示改变每页记录数 {Boolean}
     * this.recordPerPage
     */

                /*
     * 是否显示跳至某一页 {Boolean}
     * this.jumpControl
     */
                // 创建适配器

                _this.adapter = _this.createAdapter();

                _this.render();

                return _this;
              }
              /**
               * 封装适配器方法
               * @return {object}
               */

              _createClass(Paging, [
                {
                  key: 'createAdapter',
                  value: function createAdapter() {
                    return {};
                  },
                },
                {
                  key: 'init',
                  value: function init() {},
                },
                {
                  key: 'render',
                  value: function render() {
                    this.addEventListeners();
                    this.loadData();
                  },
                },
                {
                  key: 'unmount',
                  value: function unmount() {
                    this.removeEventListeners();
                  }, // 设置监听事件
                },
                {
                  key: 'addEventListeners',
                  value: function addEventListeners() {
                    this.element.addEventListener(
                      'click',
                      this.handleSwitchPage
                    );
                    this.element.addEventListener(
                      'change',
                      this.handleChangePerPage
                    );
                  }, // 删除事件
                },
                {
                  key: 'removeEventListeners',
                  value: function removeEventListeners() {
                    this.element.removeEventListener(
                      'click',
                      this.handleSwitchPage
                    );
                    this.element.addEventListener(
                      'change',
                      this.handleChangePerPage
                    );
                  },
                },
                {
                  key: 'loadData',
                  value: function loadData() {
                    var _this2 = this;

                    var pageNum =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : 1;

                    // 渲染数据
                    if (
                      this.loadPageData &&
                      typeof this.loadPageData === 'function'
                    ) {
                      this.loadPageData(pageNum, this.pageSize).then(function(
                        json
                      ) {
                        var _json$data = json.data,
                          totalCount = _json$data.totalCount,
                          totalPages = _json$data.totalPages;
                        _this2.totalPages = totalPages;
                        _this2.pageNum = pageNum;
                        _this2.totalCount = totalCount;

                        _this2.renderPaging();
                      });
                    } else {
                      this.pageNum = pageNum;
                      this.renderPaging();
                    }
                  },
                },
                {
                  key: 'handleChangePage',
                  value: function handleChangePage(pageNum) {
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
                  },
                  /**
                   * 计算页码显示算法，返回一个页码数组
                   * @returns {Array}
                   */
                },
                {
                  key: 'calculatePage',
                  value: function calculatePage() {
                    var totalPages = this.totalPages;
                    var pageNum = this.pageNum;
                    var pageArray = [];

                    if (totalPages < 8) {
                      for (var i = 1; i <= totalPages; i++) {
                        pageArray.push(i);
                      }
                    } else {
                      pageArray.push(1);

                      if (pageNum > 4) {
                        pageArray.push('...');
                      }

                      if (pageNum < 4) {
                        for (var _i = 2; _i <= 6; _i++) {
                          pageArray.push(_i);
                        }
                      } else if (pageNum >= 4 && totalPages - pageNum >= 3) {
                        for (var _i2 = pageNum - 2; _i2 <= pageNum + 2; _i2++) {
                          pageArray.push(_i2);
                        }
                      } else {
                        for (
                          var _i3 = totalPages - 4;
                          _i3 < totalPages;
                          _i3++
                        ) {
                          pageArray.push(_i3);
                        }
                      } // 总页码 - 当前页 大于 3 显示

                      if (totalPages - pageNum > 3) {
                        pageArray.push('...');
                      }

                      pageArray.push(totalPages);
                    }

                    return pageArray;
                  },
                },
                {
                  key: 'renderPaging',
                  value: function renderPaging() {
                    var _this3 = this;

                    var pageArray = this.calculatePage();
                    var html = '<ul class="paging-items">';
                    html += '<li class="paging-item'
                      .concat(
                        this.pageNum === 1 ? ' '.concat(classes.DISABLED) : '',
                        '" data-pagenum="'
                      )
                      .concat(this.pageNum - 1, '">\u4E0A\u4E00\u9875</li>');
                    var pageItems = pageArray.map(function(item, index) {
                      if (item === '...') {
                        return '<li class="paging-item paging-more"></li>';
                      }

                      return '<li class="paging-item'
                        .concat(
                          _this3.pageNum === item
                            ? ' '.concat(classes.ACTIVE)
                            : '',
                          '" data-pagenum="'
                        )
                        .concat(item, '">')
                        .concat(item, '</li>');
                    });
                    html += pageItems.join('');
                    html += '<li class="paging-item'
                      .concat(
                        this.pageNum === this.totalPages
                          ? ' '.concat(classes.DISABLED)
                          : '',
                        '" data-pagenum="'
                      )
                      .concat(this.pageNum + 1, '">\u4E0B\u4E00\u9875</li>');
                    html += '</ul>';

                    if (this.pagingControl) {
                      html += this.renderPagingControl();
                    }

                    this.element.innerHTML = html;
                  },
                },
                {
                  key: 'renderPagingControl',
                  value: function renderPagingControl() {
                    var html = '<ul class="paging-control">';
                    html += '<li class="paging-control-item">\u5171'
                      .concat(this.totalPages, '\u9875')
                      .concat(this.totalCount || 0, '\u6761\u8BB0\u5F55,</li>');
                    /* eslint-disable prettier/prettier, indent */

                    if (this.recordPerPage) {
                      html += '<li class="paging-control-item">\n        \u6BCF\u9875\n        <div class="select">\n        <select class="select-inner">\n          <option value="5"'
                        .concat(
                          this.pageSize === 5 ? ' selected' : '',
                          '>5</option>\n          <option value="10"'
                        )
                        .concat(
                          this.pageSize === 10 ? ' selected' : '',
                          '>10</option>\n          <option value="20"'
                        )
                        .concat(
                          this.pageSize === 20 ? ' selected' : '',
                          '>20</option>\n          <option value="50"'
                        )
                        .concat(
                          this.pageSize === 50 ? ' selected' : '',
                          '>50</option>\n          <option value="100"'
                        )
                        .concat(
                          this.pageSize === 100 ? ' selected' : '',
                          '>100</option>\n        </select>\n        </div>\n      \u6761,\n    </li>'
                        );
                    }

                    if (this.jumpControl) {
                      html +=
                        '<li class="paging-control-item">\n        \u8DF3\u81F3\n        <div class="input">\n          <input type="text" class="input-field"/>\n        </div>\n        \u9875\n      </li>\n      <li class="paging-control-item">\n        <a href="" class="btn btn-raised btn-primary btn-sm js-jump-btn">\u786E\u5B9A</a>\n      </li>';
                    }

                    html += '</ul>';
                    return html;
                  },
                },
              ]);

              return Paging;
            })(_base_component__WEBPACK_IMPORTED_MODULE_13__['default']);

          _defineProperty(Paging, 'defaultConfig', {
            pagingControl: true,
            recordPerPage: true,
            jumpControl: true,
          });

          /* harmony default export */ __webpack_exports__['default'] = Paging;

          /***/
        },

      /***/ './components/forms/select/select.js':
        /*!*******************************************!*\
  !*** ./components/forms/select/select.js ***!
  \*******************************************/
        /*! exports provided: classes, strings, default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'classes',
            function() {
              return classes;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'strings',
            function() {
              return strings;
            }
          );
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es7.symbol.async-iterator */ './node_modules/core-js/modules/es7.symbol.async-iterator.js'
          );
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.symbol */ './node_modules/core-js/modules/es6.symbol.js'
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/es6.object.create */ './node_modules/core-js/modules/es6.object.create.js'
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/es6.object.set-prototype-of */ './node_modules/core-js/modules/es6.object.set-prototype-of.js'
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! core-js/modules/es6.string.trim */ './node_modules/core-js/modules/es6.string.trim.js'
          );
          /* harmony import */ var core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_string_trim__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! core-js/modules/es6.array.some */ './node_modules/core-js/modules/es6.array.some.js'
          );
          /* harmony import */ var core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_some__WEBPACK_IMPORTED_MODULE_6__
          );
          /* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! core-js/modules/es6.array.index-of */ './node_modules/core-js/modules/es6.array.index-of.js'
          );
          /* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_7__
          );
          /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! ../../base/component */ './components/base/component.js'
          );
          /* harmony import */ var _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! ../../elements/menu/list-menu/list-menu */ './components/elements/menu/list-menu/list-menu.js'
          );

          function _typeof(obj) {
            if (
              typeof Symbol === 'function' &&
              typeof Symbol.iterator === 'symbol'
            ) {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            }
            return _assertThisInitialized(self);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          var win = window;
          var dom = document;
          var body = dom.body; // 返回已选中的根 root option

          function getRootSelectedOption(el) {
            var parentEl = el.parentNode.parentNode;

            if (parentEl.classList.contains('list-menu')) {
              return el;
            }

            return getRootSelectedOption(parentEl);
          }
          /*
 * 定义常量
 * class 样式
 */

          var classes = {
            ELEMENT: 'select',
            DISABLED: 'select-disabled',
            OPEN: 'select-open',
            SCROLL_LOCK: 'select-scroll-lock',
            SELECT_MENU_FIXED: 'select-menu-fixed',
          };
          var strings = {
            SELECT_INNER: '.select-inner',
            CHANGE_EVENT: 'select:change',
            SELECT_MENU: '.select-menu',
            SELECT_SELECTED_TEXT: '.select-selected-text',
          };
          var openerKeys = [
            {
              key: 'ArrowUp',
              keyCode: 38,
              forType: 'keydown',
            },
            {
              key: 'ArrowDown',
              keyCode: 40,
              forType: 'keydown',
            },
            {
              key: 'Space',
              keyCode: 32,
              forType: 'keyup',
            },
          ];

          var Select =
            /*#__PURE__*/
            (function(_Component) {
              _inherits(Select, _Component);

              _createClass(
                Select,
                [
                  {
                    key: 'valueText',
                    // 返回当前选中的 value 和 text
                    get: function get() {
                      return this.getSelectedValue
                        ? this.getSelectedValue()
                        : '';
                    },
                  },
                  {
                    key: 'options',
                    get: function get() {
                      // 返回叶子节点作为 options
                      return this.menu.leafItems;
                    }, // 返回已经选中的 select option，只处理可以多选的 select，FIXME
                  },
                  {
                    key: 'selectedOptions',
                    get: function get() {
                      return this.element.querySelectorAll('[aria-selected]');
                    },
                  },
                ],
                [
                  {
                    key: 'mount',

                    /**
                     * 静态方法实例化 Select 组件
                     * @param element
                     * @param config
                     * @returns {Select}
                     */
                    value: function mount(element, config) {
                      return new Select(element, config);
                    },
                  },
                  {
                    key: 'classes',
                    get: function get() {
                      return classes;
                    },
                  },
                  {
                    key: 'strings',
                    get: function get() {
                      return strings;
                    },
                  },
                ]
              );

              function Select(element, config) {
                var _this;

                _classCallCheck(this, Select);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Select).call(this, element, config)
                ); // 创建适配器

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'displayHandler',
                  function(evt) {
                    evt.preventDefault();

                    if (!_this.adapter.isMenuOpen()) {
                      _this.open();
                    }
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'selectionHandler',
                  function(_ref) {
                    var detail = _ref.detail;
                    var index = detail.index,
                      items = detail.items; // 如果不相等

                    if (!_this.compareSelectedIndex(index)) {
                      var len = items.length;

                      var leafIndex = _this.adapter.getLeafOptionIndex(
                        items[len - 1]
                      );

                      _this.setSelectedIndex(leafIndex);

                      _this.adapter.notifyChange();
                    }

                    _this.close();
                  }
                );

                _defineProperty(
                  _assertThisInitialized(_assertThisInitialized(_this)),
                  'cancelHandler',
                  function() {
                    _this.close();
                  }
                );

                _this.adapter = _this.createAdapter();
                _this.selectedIndex = -1; // 已选的 select option，指叶子节点索引

                _this.disabled = false; // 是否禁用

                _this.isFocused = false; // 获取焦点
                // 如果没有已选中的 option，是否默认选中第一个

                if (_this.selectedFirstOption === undefined) {
                  _this.selectedFirstOption = true;
                } // 是否滚动锁屏

                if (_this.isScrollLock === undefined) {
                  _this.isScrollLock = true;
                } // 是否设置 select 为 fixed

                if (_this.isFixed === undefined) {
                  _this.isFixed = true;
                } // 提供一个默认获取 select value 和 text 方法

                if (!_this.getSelectedValue) {
                  _this.getSelectedValue = function(isText) {
                    var _assertThisInitialize = _assertThisInitialized(
                        _assertThisInitialized(_this)
                      ),
                      selectedIndex = _assertThisInitialize.selectedIndex;

                    if (selectedIndex > -1) {
                      // 返回叶子节点 data-value 设置的值
                      return {
                        value: _this.options[selectedIndex].dataset.value,
                        text: _this.adapter.getTextForOptionAtIndex(
                          selectedIndex
                        ),
                      };
                    }

                    return {};
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

              _createClass(Select, [
                {
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
                      setMenuElStyle: function setMenuElStyle(
                        propertyName,
                        value
                      ) {
                        return _this2.menuEl.style.setProperty(
                          propertyName,
                          value
                        );
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
                        return _this2.menu.show({
                          focusIndex: focusIndex,
                        });
                      },
                      isMenuOpen: function isMenuOpen() {
                        return _this2.menu.open;
                      },
                      setSelectedTextContent: function setSelectedTextContent(
                        selectedTextContent
                      ) {
                        _this2.selectedText.textContent = selectedTextContent;
                      },
                      getNumberOfOptions: function getNumberOfOptions() {
                        return _this2.options.length;
                      },
                      getTextForOptionAtIndex: function getTextForOptionAtIndex(
                        index
                      ) {
                        return _this2.options[index].textContent;
                      },
                      setAttrForOptionAtIndex: function setAttrForOptionAtIndex(
                        index,
                        attr,
                        value
                      ) {
                        return _this2.options[index].setAttribute(attr, value);
                      },
                      rmAttrForOptionAtIndex: function rmAttrForOptionAtIndex(
                        index,
                        attr
                      ) {
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
                          valueText: _this2.valueText,
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
                      },
                    };
                  }, // 默认 menuFactory 为 ListMenu
                },
                {
                  key: 'init',
                  value: function init() {
                    var menuFactory =
                      arguments.length > 0 && arguments[0] !== undefined
                        ? arguments[0]
                        : function(el) {
                            return new _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__[
                              'default'
                            ](el);
                          };
                    this.selectInner = this.element.querySelector(
                      strings.SELECT_INNER
                    );
                    this.selectedText = this.element.querySelector(
                      strings.SELECT_SELECTED_TEXT
                    );
                    this.menuEl = this.element.querySelector(
                      strings.SELECT_MENU
                    );
                    this.menu = menuFactory(this.menuEl);
                  },
                },
                {
                  key: 'initialSyncWithDOM',
                  value: function initialSyncWithDOM() {
                    // 设置当前活动的 index
                    var selectedOption = this.selectedOptions[0];
                    var idx = selectedOption
                      ? this.options.indexOf(selectedOption)
                      : this.selectedFirstOption
                        ? 0
                        : -1;

                    if (idx > -1) {
                      this.selectedIndex = idx;
                      this.menu.setActiveItemAtIndex(idx);
                    } // 设置禁用

                    if (this.element.getAttribute('aria-disabled') === 'true') {
                      this.disabled = true;
                    }
                  },
                },
                {
                  key: 'render',
                  value: function render() {
                    if (this.isFixed) {
                      this.menuEl.classList.add(classes.SELECT_MENU_FIXED);
                    }

                    this.addEventListeners();
                  },
                },
                {
                  key: 'unmount',
                  value: function unmount() {
                    this.removeEventListeners();
                  }, // 设置监听事件
                },
                {
                  key: 'addEventListeners',
                  value: function addEventListeners() {
                    this.selectInner.addEventListener(
                      'click',
                      this.displayHandler
                    );
                    this.selectInner.addEventListener(
                      'keydown',
                      this.handleDisplayKeyboard
                    );
                    this.selectInner.addEventListener(
                      'keyup',
                      this.handleDisplayKeyboard
                    ); // 监听 ListMenu 事件

                    this.menu.listen(
                      _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ].strings.SELECTED_EVENT,
                      this.selectionHandler
                    );
                    this.menu.listen(
                      _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ].strings.CANCEL_EVENT,
                      this.cancelHandler
                    );
                  }, // 删除事件
                },
                {
                  key: 'removeEventListeners',
                  value: function removeEventListeners() {
                    this.selectInner.removeEventListener(
                      'click',
                      this.displayHandler
                    );
                    this.selectInner.removeEventListener(
                      'keydown',
                      this.handleDisplayKeyboard
                    );
                    this.selectInner.removeEventListener(
                      'keyup',
                      this.handleDisplayKeyboard
                    ); // 监听 ListMenu 事件

                    this.menu.unlisten(
                      _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ].strings.SELECTED_EVENT,
                      this.selectionHandler
                    );
                    this.menu.unlisten(
                      _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_9__[
                        'default'
                      ].strings.CANCEL_EVENT,
                      this.cancelHandler
                    );
                  },
                },
                {
                  key: 'item',
                  value: function item(index) {
                    return this.options[index] || null;
                  },
                },
                {
                  key: 'handleDisplayKeyboard',
                  value: function handleDisplayKeyboard(evt) {
                    /*
       * We use a hard-coded 2 instead of Event.AT_TARGET to avoid having to reference a browser
       * global.
       */
                    var EVENT_PHASE_AT_TARGET = 2;

                    if (evt.eventPhase !== EVENT_PHASE_AT_TARGET) {
                      return;
                    } // Prevent pressing space down from scrolling the page

                    var isSpaceDown =
                      evt.type === 'keydown' &&
                      (evt.key === 'Space' || evt.keyCode === 32);

                    if (isSpaceDown) {
                      evt.preventDefault();
                    }

                    var isOpenerKey = openerKeys.some(function(_ref2) {
                      var key = _ref2.key,
                        keyCode = _ref2.keyCode,
                        forType = _ref2.forType;
                      return (
                        evt.type === forType &&
                        (evt.key === key || evt.keyCode === keyCode)
                      );
                    });

                    if (isOpenerKey) {
                      this.displayHandler(evt);
                    }
                  }, // ListMenu SELECTED_EVENT 事件
                },
                {
                  key: 'getSelectedIndex',
                  value: function getSelectedIndex() {
                    return this.selectedIndex;
                  },
                },
                {
                  key: 'setSelectedIndex',
                  value: function setSelectedIndex(index) {
                    // 先删除上一次选择的 option
                    var prevSelectedIndex = this.selectedIndex;

                    if (prevSelectedIndex >= 0) {
                      this.adapter.rmAttrForOptionAtIndex(
                        this.selectedIndex,
                        'aria-selected'
                      );
                    }

                    this.selectedIndex =
                      index >= 0 && index < this.adapter.getNumberOfOptions()
                        ? index
                        : -1;
                    var selectedTextContent = '';

                    if (this.selectedIndex >= 0) {
                      selectedTextContent = this.adapter
                        .getTextForOptionAtIndex(this.selectedIndex)
                        .trim();
                      this.adapter.setAttrForOptionAtIndex(
                        this.selectedIndex,
                        'aria-selected',
                        'true'
                      );
                    }

                    this.adapter.setSelectedTextContent(selectedTextContent);
                  },
                },
                {
                  key: 'isDisabled',
                  value: function isDisabled() {
                    return this.disabled;
                  },
                },
                {
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
                  },
                },
                {
                  key: 'open',
                  value: function open() {
                    if (this.isScrollLock) {
                      this.disableScroll();
                    }

                    var OPEN = classes.OPEN; // 根据已选的叶子节点 this.selectedIndex 拿到第一层 select item

                    var focusIndex =
                      this.selectedIndex < 0 ? 0 : this.selectedIndex;

                    if (this.isFixed) {
                      var selectedRootOption = getRootSelectedOption(
                        this.options[focusIndex]
                      );
                      this.setMenuStylesForOpen(selectedRootOption);
                    }

                    this.adapter.addClass(OPEN);
                    this.adapter.openMenu(focusIndex);
                    this.isFocused = true;
                  },
                },
                {
                  key: 'close',
                  value: function close() {
                    var OPEN = classes.OPEN;
                    this.adapter.removeClass(OPEN);
                    this.adapter.focus();

                    if (this.isScrollLock) {
                      this.enableScroll();
                    }
                  },
                },
                {
                  key: 'setMenuStylesForOpen',
                  value: function setMenuStylesForOpen(selectedRootOption) {
                    var winInnerHeight = this.adapter.getWindowInnerHeight();

                    var _this$adapter$compute = this.adapter.computeBoundingRect(),
                      left = _this$adapter$compute.left,
                      top = _this$adapter$compute.top;

                    this.adapter.setMenuElAttr('aria-hidden', 'true');
                    this.adapter.setMenuElStyle('display', 'block');
                    var menuHeight = this.adapter.getMenuElOffsetHeight();
                    var itemOffsetTop = selectedRootOption.offsetTop;
                    this.adapter.setMenuElStyle('display', '');
                    this.adapter.rmMenuElAttr('aria-hidden');
                    var adjustedTop = top - itemOffsetTop;
                    var overflowsTop = adjustedTop < 0;
                    var overflowsBottom =
                      adjustedTop + menuHeight > winInnerHeight;

                    if (overflowsTop) {
                      adjustedTop = 0;
                    } else if (overflowsBottom) {
                      adjustedTop = Math.max(0, winInnerHeight - menuHeight);
                    }

                    this.adapter.setMenuElStyle('left', ''.concat(left, 'px'));
                    this.adapter.setMenuElStyle(
                      'top',
                      ''.concat(adjustedTop, 'px')
                    );
                    this.adapter.setMenuElStyle(
                      'transform-origin',
                      'center '.concat(itemOffsetTop, 'px')
                    );
                  },
                },
                {
                  key: 'nameditem',
                  value: function nameditem(key) {
                    // NOTE: IE11 precludes us from using Array.prototype.find
                    for (
                      var i = 0, options = this.options, option;
                      (option = options[i]);
                      i++
                    ) {
                      if (
                        option.id === key ||
                        option.getAttribute('name') === key
                      ) {
                        return option;
                      }
                    }

                    return null;
                  },
                },
                {
                  key: 'disableScroll',
                  value: function disableScroll() {
                    this.adapter.addBodyClass(classes.SCROLL_LOCK);
                  },
                },
                {
                  key: 'enableScroll',
                  value: function enableScroll() {
                    this.adapter.removeBodyClass(classes.SCROLL_LOCK);
                  },
                },
                {
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
                  },
                },
              ]);

              return Select;
            })(_base_component__WEBPACK_IMPORTED_MODULE_8__['default']);

          /* harmony default export */ __webpack_exports__['default'] = Select;

          /***/
        },

      /***/ './components/perfect.js':
        /*!*******************************!*\
  !*** ./components/perfect.js ***!
  \*******************************/
        /*! exports provided: ScrollSpy, CatalogueSpy, Ripple, ListMenu, Select, Paging */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var _scroll_spy_scrollSpy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! ./scroll-spy/scrollSpy */ './components/scroll-spy/scrollSpy.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'ScrollSpy',
            function() {
              return _scroll_spy_scrollSpy__WEBPACK_IMPORTED_MODULE_0__[
                'default'
              ];
            }
          );

          /* harmony import */ var _scroll_spy_plugins_catalogueSpy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! ./scroll-spy/plugins/catalogueSpy */ './components/scroll-spy/plugins/catalogueSpy.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'CatalogueSpy',
            function() {
              return _scroll_spy_plugins_catalogueSpy__WEBPACK_IMPORTED_MODULE_1__[
                'default'
              ];
            }
          );

          /* harmony import */ var _ripple_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! ./ripple/ripple */ './components/ripple/ripple.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Ripple',
            function() {
              return _ripple_ripple__WEBPACK_IMPORTED_MODULE_2__['default'];
            }
          );

          /* harmony import */ var _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! ./elements/menu/list-menu/list-menu */ './components/elements/menu/list-menu/list-menu.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'ListMenu',
            function() {
              return _elements_menu_list_menu_list_menu__WEBPACK_IMPORTED_MODULE_3__[
                'default'
              ];
            }
          );

          /* harmony import */ var _forms_select_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! ./forms/select/select */ './components/forms/select/select.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Select',
            function() {
              return _forms_select_select__WEBPACK_IMPORTED_MODULE_4__[
                'default'
              ];
            }
          );

          /* harmony import */ var _elements_paging_paging__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! ./elements/paging/paging */ './components/elements/paging/paging.js'
          );
          /* harmony reexport (safe) */ __webpack_require__.d(
            __webpack_exports__,
            'Paging',
            function() {
              return _elements_paging_paging__WEBPACK_IMPORTED_MODULE_5__[
                'default'
              ];
            }
          );

          /***/
        },

      /***/ './components/ripple/ripple.js':
        /*!*************************************!*\
  !*** ./components/ripple/ripple.js ***!
  \*************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es7.symbol.async-iterator */ './node_modules/core-js/modules/es7.symbol.async-iterator.js'
          );
          /* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.symbol */ './node_modules/core-js/modules/es6.symbol.js'
          );
          /* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.array.filter */ './node_modules/core-js/modules/es6.array.filter.js'
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/es6.object.create */ './node_modules/core-js/modules/es6.object.create.js'
          );
          /* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! core-js/modules/es6.object.set-prototype-of */ './node_modules/core-js/modules/es6.object.set-prototype-of.js'
          );
          /* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! core-js/modules/es6.date.now */ './node_modules/core-js/modules/es6.date.now.js'
          );
          /* harmony import */ var core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_date_now__WEBPACK_IMPORTED_MODULE_6__
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_7__
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_8__
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! core-js/modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js'
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_10__
          );
          /* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ../base/component */ './components/base/component.js'
          );
          /* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
            /*! ./util */ './components/ripple/util.js'
          );

          function _typeof(obj) {
            if (
              typeof Symbol === 'function' &&
              typeof Symbol.iterator === 'symbol'
            ) {
              _typeof = function _typeof(obj) {
                return typeof obj;
              };
            } else {
              _typeof = function _typeof(obj) {
                return obj &&
                  typeof Symbol === 'function' &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              };
            }
            return _typeof(obj);
          }

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              var ownKeys = Object.keys(source);
              if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(
                      source,
                      sym
                    ).enumerable;
                  })
                );
              }
              ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            }
            return target;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _possibleConstructorReturn(self, call) {
            if (
              call &&
              (_typeof(call) === 'object' || typeof call === 'function')
            ) {
              return call;
            }
            return _assertThisInitialized(self);
          }

          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function _getPrototypeOf(o) {
                  return o.__proto__ || Object.getPrototypeOf(o);
                };
            return _getPrototypeOf(o);
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _inherits(subClass, superClass) {
            if (typeof superClass !== 'function' && superClass !== null) {
              throw new TypeError(
                'Super expression must either be null or a function'
              );
            }
            subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: true,
                  configurable: true,
                },
              }
            );
            if (superClass) _setPrototypeOf(subClass, superClass);
          }

          function _setPrototypeOf(o, p) {
            _setPrototypeOf =
              Object.setPrototypeOf ||
              function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };
            return _setPrototypeOf(o, p);
          }

          function _assertThisInitialized(self) {
            if (self === void 0) {
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            }
            return self;
          }

          // 定义常量

          var classes = {
            ELEMENT: 'ripple-impact',
            UNBOUNDED: 'ripple-unbounded',
            FOCUSED: 'ripple-impact-focused',
            ACTIVE: 'ripple-impact-active',
            INACTIVE: 'ripple-impact-inactive',
          };
          var strings = {
            VAR_SIZE: '--ripple-size',
            VAR_LEFT: '--ripple-left',
            VAR_TOP: '--ripple-top',
            VAR_SCALE: '--ripple-scale',
            VAR_TRANSLATE_START: '--ripple-translate-start',
            VAR_TRANSLATE_END: '--ripple-translate-end',
          };
          var numbers = {
            PADDING: 10,
            // 波纹 padding
            INITIAL_ORIGIN_SCALE: 0.6,
            // 初始波纹缩放比例
            DEACTIVATION_TIMEOUT_MS: 225,
            // 从活动状态到结束持续的时间，看 scss 变量 $ripple-translate-duration
            DEACTIVATION_MS: 150, // 非活动状态到结束持续的时间，看 scss 变量 $ripple-fade-out-duration
          }; // 非活动状态和活动状态对应

          var DEACTIVATION_ACTIVATION_PAIRS = {
            mouseup: 'mousedown',
            pointerup: 'pointerdown',
            touchend: 'touchstart',
            keyup: 'keydown',
            blur: 'focus',
          };

          var Ripple =
            /*#__PURE__*/
            (function(_Component) {
              _inherits(Ripple, _Component);

              _createClass(Ripple, null, [
                {
                  key: 'mount',

                  /**
                   * 静态方法实例化 Ripple 组件
                   * @param element
                   * @param unbounded
                   * @returns {Ripple}
                   */
                  value: function mount(element) {
                    var _ref =
                        arguments.length > 1 && arguments[1] !== undefined
                          ? arguments[1]
                          : {},
                      _ref$unbounded = _ref.unbounded,
                      unbounded =
                        _ref$unbounded === void 0 ? undefined : _ref$unbounded;

                    var ripple = new Ripple(element);

                    if (unbounded !== undefined) {
                      ripple.unbounded =
                        /** @type {boolean} */
                        unbounded;
                    }

                    return ripple;
                  },
                  /**
                   * @param {Ripple} instance
                   * @return {RippleAdapter}
                   */
                },
                {
                  key: 'createAdapter',
                  value: function createAdapter(instance) {
                    var matches = Object(
                      _util__WEBPACK_IMPORTED_MODULE_12__['getMatchesProperty']
                    )(HTMLElement.prototype); // 封装一些适配器方法

                    return {
                      isSupportsCssVars: function isSupportsCssVars() {
                        return Object(
                          _util__WEBPACK_IMPORTED_MODULE_12__[
                            'supportsCssVariables'
                          ]
                        )();
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
                      registerImpactHandler: function registerImpactHandler(
                        evtType,
                        handler
                      ) {
                        return instance.element.addEventListener(
                          evtType,
                          handler,
                          Object(
                            _util__WEBPACK_IMPORTED_MODULE_12__['applyPassive']
                          )()
                        );
                      },
                      deregisterImpactHandler: function deregisterImpactHandler(
                        evtType,
                        handler
                      ) {
                        return instance.element.removeEventListener(
                          evtType,
                          handler,
                          Object(
                            _util__WEBPACK_IMPORTED_MODULE_12__['applyPassive']
                          )()
                        );
                      },
                      registerResizeHandler: function registerResizeHandler(
                        handler
                      ) {
                        return window.addEventListener('resize', handler);
                      },
                      deregisterResizeHandler: function deregisterResizeHandler(
                        handler
                      ) {
                        return window.removeEventListener('resize', handler);
                      },
                      updateCssVariable: function updateCssVariable(
                        varName,
                        value
                      ) {
                        return instance.element.style.setProperty(
                          varName,
                          value
                        );
                      },
                      removeCssVariable: function removeCssVariable(varName) {
                        return instance.element.style.removeProperty(varName);
                      },
                      computeBoundingRect: function computeBoundingRect() {
                        return instance.element.getBoundingClientRect();
                      },
                      getWindowPageOffset: function getWindowPageOffset() {
                        return {
                          x: window.pageXOffset,
                          y: window.pageYOffset,
                        };
                      },
                    };
                  },
                  /**
                   * 重置 Ripple 活动状态
                   * @returns {}
                   */
                },
                {
                  key: 'resetActivationState',
                  value: function resetActivationState() {
                    return {
                      isActivated: false,
                      // 当前是否为活动状态
                      hasDeactivationUXRun: false,
                      // 是否有取消激活运行状态
                      wasActivatedByPointer: false,
                      // 是否是通过鼠标或触摸来激活(也可以调用方法激活)
                      wasElementMadeActive: false,
                      // 元素是否处于活动状态，即 element.matches(':active') 为 true
                      activationStartTime: 0,
                      // 开始时间
                      activationEvent: null,
                      // 当前事件对象 event
                      isProgrammatic: false, // 是否在当前活动进程中
                    };
                  },
                },
                {
                  key: 'classes',
                  get: function get() {
                    return classes;
                  },
                },
                {
                  key: 'strings',
                  get: function get() {
                    return strings;
                  },
                },
                {
                  key: 'numbers',
                  get: function get() {
                    return numbers;
                  },
                },
              ]);

              function Ripple(element, config) {
                var _this;

                _classCallCheck(this, Ripple);

                _this = _possibleConstructorReturn(
                  this,
                  _getPrototypeOf(Ripple).call(this, element, config)
                ); // 用来处理是否设置了 disabled

                /* config.disabled */

                _this.disabled = _this.disabled || false; // 是否是无界限的 Ripple

                _this.unbounded = _this.unbounded || false; // 创建适配器

                _this.adapter = Ripple.createAdapter(
                  _assertThisInitialized(_assertThisInitialized(_this))
                ); // 用来处理 requestAnimationFrame 返回的值

                _this.layoutFrame = 0; // Ripple Rect size

                _this.rippleSize = {
                  width: 0,
                  height: 0,
                }; // 初始化 Ripple 默认活动状态

                _this.activationState = Ripple.resetActivationState(); // 动画持续的时长

                _this.duration = 0; // 波纹初始大小

                _this.initialSize = 0; // 波纹扩散最大的圆弧

                _this.maxRadius = 0; // 无解限制坐标

                _this.unboundedCoords = {
                  left: 0,
                  top: 0,
                }; // 缩放比例

                _this.scale = 0; // activation setTimeout Id

                _this.activationTimer = null; // deactivation removal setTimeout Id

                _this.deactivationRemovalTimer = null; // 动画是否结束

                _this.activationAnimationHasEnded = false; // activation setTimeout 函数

                _this.activationTimerCallback = function() {
                  _this.activationAnimationHasEnded = true;

                  _this.runDeactivationAnimation();
                }; // 事件与监听函数名称对应

                _this.listenerInfos = [
                  {
                    activate: 'touchstart',
                    deactivate: 'touchend',
                  },
                  {
                    activate: 'pointerdown',
                    deactivate: 'pointerup',
                  },
                  {
                    activate: 'mousedown',
                    deactivate: 'mouseup',
                  },
                  {
                    activate: 'keydown',
                    deactivate: 'keyup',
                  },
                  {
                    focus: 'focus',
                    blur: 'blur',
                  },
                ]; // 监听函数 Map

                _this.listeners = {
                  activate: function activate(e) {
                    return _this.activate(e);
                  },
                  deactivate: function deactivate(e) {
                    return _this.deactivate(e);
                  },
                  focus: function focus() {
                    return requestAnimationFrame(function() {
                      return _this.adapter.addClass(classes.FOCUSED);
                    });
                  },
                  blur: function blur() {
                    return requestAnimationFrame(function() {
                      return _this.adapter.removeClass(classes.FOCUSED);
                    });
                  },
                };

                _this._init();

                return _this;
              } // 是否支持 css 变量

              _createClass(Ripple, [
                {
                  key: 'isSupported',
                  value: function isSupported() {
                    return this.adapter.isSupportsCssVars();
                  }, // 初始化组件
                },
                {
                  key: '_init',
                  value: function _init() {
                    var _this2 = this;

                    if (!this.isSupported()) {
                      return;
                    }

                    this.addEventListeners();
                    var ELEMENT = classes.ELEMENT,
                      UNBOUNDED = classes.UNBOUNDED;
                    requestAnimationFrame(function() {
                      _this2.adapter.addClass(ELEMENT);

                      if (_this2.adapter.isUnbounded()) {
                        _this2.adapter.addClass(UNBOUNDED);
                      }

                      _this2.layoutInternal();
                    });
                  },
                  /**
                   * 重新布局，重置波纹参数
                   * 比如当窗口改变时，调用该方法
                   */
                },
                {
                  key: 'layout',
                  value: function layout() {
                    var _this3 = this;

                    if (this.layoutFrame) {
                      cancelAnimationFrame(this.layoutFrame);
                    }

                    this.layoutFrame = requestAnimationFrame(function() {
                      _this3.layoutInternal();

                      _this3.layoutFrame = 0;
                    });
                  }, // 初始化波纹个参数
                },
                {
                  key: 'layoutInternal',
                  value: function layoutInternal() {
                    this.rippleRect = this.adapter.computeBoundingRect();
                    var _this$rippleRect = this.rippleRect,
                      width = _this$rippleRect.width,
                      height = _this$rippleRect.height; // 元素大小

                    var maxDim = Math.max(width, height); // 波纹直径

                    var diameter = Math.sqrt(
                      Math.pow(width, 2) + Math.pow(height, 2)
                    ); // 初始波纹大小，取元素大小的 60%

                    this.initialSize = maxDim * numbers.INITIAL_ORIGIN_SCALE; // 波纹扩散圆弧，直径 + padding

                    this.maxRadius = diameter + numbers.PADDING; // 计算缩放比例

                    this.scale = this.maxRadius / this.initialSize;
                    this.duration = 1000 * Math.sqrt(this.maxRadius / 1024);
                    this.updateCssVariableValue();
                  },
                },
                {
                  key: 'updateCssVariableValue',
                  value: function updateCssVariableValue() {
                    var VAR_SIZE = strings.VAR_SIZE,
                      VAR_LEFT = strings.VAR_LEFT,
                      VAR_TOP = strings.VAR_TOP,
                      VAR_SCALE = strings.VAR_SCALE;
                    this.adapter.updateCssVariable(
                      VAR_SIZE,
                      ''.concat(this.initialSize, 'px')
                    );
                    this.adapter.updateCssVariable(VAR_SCALE, this.scale);

                    if (this.adapter.isUnbounded()) {
                      var _this$rippleRect2 = this.rippleRect,
                        width = _this$rippleRect2.width,
                        height = _this$rippleRect2.height;
                      this.unboundedCoords = {
                        left: Math.round(width / 2 - this.initialSize / 2),
                        top: Math.round(height / 2 - this.initialSize / 2),
                      };
                      this.adapter.updateCssVariable(
                        VAR_LEFT,
                        ''.concat(this.unboundedCoords.left, 'px')
                      );
                      this.adapter.updateCssVariable(
                        VAR_TOP,
                        ''.concat(this.unboundedCoords.top, 'px')
                      );
                    }
                  }, // 设置监听事件
                },
                {
                  key: 'addEventListeners',
                  value: function addEventListeners() {
                    var _this4 = this;

                    this.listenerInfos.forEach(function(info) {
                      Object.keys(info).forEach(function(k) {
                        _this4.adapter.registerImpactHandler(
                          info[k],
                          _this4.listeners[k]
                        );
                      });
                    }); // 注册 resize 事件

                    this.adapter.registerResizeHandler(this.layout);
                  }, // 删除事件
                },
                {
                  key: 'removeEventListeners',
                  value: function removeEventListeners() {
                    var _this5 = this;

                    this.listenerInfos.forEach(function(info) {
                      Object.keys(info).forEach(function(k) {
                        _this5.adapter.deregisterImpactHandler(
                          info[k],
                          _this5.listeners[k]
                        );
                      });
                    });
                    this.adapter.deregisterResizeHandler(this.layout);
                  },
                  /**
                   * 当 Ripple 处于活动状态时
                   * 对应的事件有 touchstart pointerdown mousedown keydown
                   * @param {Event} e
                   * @private
                   */
                },
                {
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
                    activationState.wasActivatedByPointer = activationState.isProgrammatic
                      ? false
                      : e.type === 'mousedown' ||
                        e.type === 'touchstart' ||
                        e.type === 'pointerdown';
                    activationState.activationStartTime = Date.now();
                    requestAnimationFrame(function() {
                      /*
         * 对于 keydown 事件需要判断是否当前为活动状态，即 element.matches(':active')
         * - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
         * - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
         */
                      activationState.wasElementMadeActive =
                        e && e.type === 'keydown'
                          ? _this6.adapter.isActive()
                          : true;

                      if (activationState.wasElementMadeActive) {
                        _this6.animateActivation();
                      } else {
                        // 如果元素没有被激活，重置 Ripple 状态
                        _this6.activationState = Ripple.resetActivationState();
                      }
                    });
                  }, // 处理 Ripple 动画
                },
                {
                  key: 'animateActivation',
                  value: function animateActivation() {
                    var _this7 = this;

                    var VAR_TRANSLATE_START = strings.VAR_TRANSLATE_START,
                      VAR_TRANSLATE_END = strings.VAR_TRANSLATE_END;
                    var ACTIVE = classes.ACTIVE,
                      INACTIVE = classes.INACTIVE;
                    var DEACTIVATION_TIMEOUT_MS =
                      numbers.DEACTIVATION_TIMEOUT_MS;
                    var translateStart = '';
                    var translateEnd = '';

                    if (!this.adapter.isUnbounded()) {
                      var _this$getTranslationC = this.getTranslationCoords(),
                        startPoint = _this$getTranslationC.startPoint,
                        endPoint = _this$getTranslationC.endPoint;

                      translateStart = ''
                        .concat(startPoint.x, 'px, ')
                        .concat(startPoint.y, 'px');
                      translateEnd = ''
                        .concat(endPoint.x, 'px, ')
                        .concat(endPoint.y, 'px');
                    }

                    this.adapter.updateCssVariable(
                      VAR_TRANSLATE_START,
                      translateStart
                    );
                    this.adapter.updateCssVariable(
                      VAR_TRANSLATE_END,
                      translateEnd
                    ); // 取消进行中的 activation 和 deactivation

                    clearTimeout(this.activationTimer);
                    clearTimeout(this.deactivationRemovalTimer);
                    this.rmActivationClasses();
                    this.adapter.removeClass(INACTIVE); // 强制重绘，触发动画

                    this.adapter.computeBoundingRect();
                    this.adapter.addClass(ACTIVE);
                    this.activationTimer = setTimeout(function() {
                      return _this7.activationTimerCallback();
                    }, DEACTIVATION_TIMEOUT_MS);
                  },
                  /**
                   * 返回Translation 开始和结束坐标
                   * @returns {{startPoint: ({x: number, y: number}|*), endPoint: {x: number, y: number}}}
                   */
                },
                {
                  key: 'getTranslationCoords',
                  value: function getTranslationCoords() {
                    var activationState = this.activationState;
                    var activationEvent = activationState.activationEvent,
                      wasActivatedByPointer =
                        activationState.wasActivatedByPointer;
                    var _this$rippleRect3 = this.rippleRect,
                      width = _this$rippleRect3.width,
                      height = _this$rippleRect3.height;
                    var startPoint;

                    if (wasActivatedByPointer) {
                      startPoint = Object(
                        _util__WEBPACK_IMPORTED_MODULE_12__[
                          'getNormalizedEventCoords'
                        ]
                      )(
                        activationEvent,
                        this.adapter.getWindowPageOffset(),
                        this.adapter.computeBoundingRect()
                      );
                    } else {
                      startPoint = {
                        x: width / 2,
                        y: height / 2,
                      };
                    } // Center the element around the start point.

                    startPoint = {
                      x: startPoint.x - this.initialSize / 2,
                      y: startPoint.y - this.initialSize / 2,
                    };
                    var endPoint = {
                      x: width / 2 - this.initialSize / 2,
                      y: height / 2 - this.initialSize / 2,
                    };
                    return {
                      startPoint: startPoint,
                      endPoint: endPoint,
                    };
                  },
                  /**
                   * 运行 Deactivation 动画
                   */
                },
                {
                  key: 'runDeactivationAnimation',
                  value: function runDeactivationAnimation() {
                    var _this8 = this;

                    var INACTIVE = classes.INACTIVE;
                    var _this$activationState = this.activationState,
                      hasDeactivationUXRun =
                        _this$activationState.hasDeactivationUXRun,
                      isActivated = _this$activationState.isActivated;
                    var activationHasEnded =
                      hasDeactivationUXRun || !isActivated;

                    if (
                      activationHasEnded &&
                      this.activationAnimationHasEnded
                    ) {
                      this.rmActivationClasses();
                      this.adapter.addClass(INACTIVE);
                      this.deactivationRemovalTimer = setTimeout(function() {
                        _this8.adapter.removeClass(INACTIVE);
                      }, numbers.DEACTIVATION_MS);
                    }
                  },
                  /**
                   * 删除活动状态
                   */
                },
                {
                  key: 'rmActivationClasses',
                  value: function rmActivationClasses() {
                    var ACTIVE = classes.ACTIVE;
                    this.adapter.removeClass(ACTIVE);
                    this.activationAnimationHasEnded = false;
                    this.adapter.computeBoundingRect();
                  },
                  /**
                   * 取消活动状态事件
                   * @param e
                   * @private
                   */
                },
                {
                  key: 'deactivate',
                  value: function deactivate(e) {
                    var _this9 = this;

                    var activationState = this.activationState; // 如果当前不是活动状态，则取消

                    if (!activationState.isActivated) {
                      return;
                    } // 如果是进行中的取消过程

                    if (activationState.isProgrammatic) {
                      var evtObject = null;

                      var _state = _objectSpread({}, activationState);

                      requestAnimationFrame(function() {
                        return _this9.animateDeactivation(evtObject, _state);
                      });
                      this.activationState = Ripple.resetActivationState();
                      return;
                    }

                    var actualActivationType =
                      DEACTIVATION_ACTIVATION_PAIRS[e.type];
                    var expectedActivationType =
                      activationState.activationEvent.type;
                    /*
       * NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
       * Essentially, what we need to do here is decouple the deactivation UX from the actual
       * deactivation state itself. This way, touch/pointer events in sequence do not trample one
       * another.
       */

                    var needsDeactivationUX =
                      actualActivationType === expectedActivationType;
                    var needsActualDeactivation = needsDeactivationUX;

                    if (activationState.wasActivatedByPointer) {
                      needsActualDeactivation = e.type === 'mouseup';
                    }

                    var state = _objectSpread({}, activationState);

                    requestAnimationFrame(function() {
                      if (needsDeactivationUX) {
                        _this9.activationState.hasDeactivationUXRun = true;

                        _this9.animateDeactivation(e, state);
                      }

                      if (needsActualDeactivation) {
                        _this9.activationState = Ripple.resetActivationState();
                      }
                    });
                  },
                  /**
                   * @param {Event} e
                   * @param {!ActivationStateType} options
                   * @private
                   */
                },
                {
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
                  },
                },
              ]);

              return Ripple;
            })(_base_component__WEBPACK_IMPORTED_MODULE_11__['default']);

          /* harmony default export */ __webpack_exports__['default'] = Ripple;

          /***/
        },

      /***/ './components/ripple/util.js':
        /*!***********************************!*\
  !*** ./components/ripple/util.js ***!
  \***********************************/
        /*! exports provided: supportsCssVariables, applyPassive, getMatchesProperty, getNormalizedEventCoords */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'supportsCssVariables',
            function() {
              return supportsCssVariables;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'applyPassive',
            function() {
              return applyPassive;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getMatchesProperty',
            function() {
              return getMatchesProperty;
            }
          );
          /* harmony export (binding) */ __webpack_require__.d(
            __webpack_exports__,
            'getNormalizedEventCoords',
            function() {
              return getNormalizedEventCoords;
            }
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es6.array.filter */ './node_modules/core-js/modules/es6.array.filter.js'
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__
          );

          var win = window;
          var doc = document;
          /**
           * 是否支持 css 变量（css 自定义属性）
           * @private {boolean|undefined}
           */

          var supportsCssVariables_;
          /**
           * 是否支持事件 passive
           * https://www.cnblogs.com/ziyunfei/p/5545439.html
           * https://github.com/WICG/EventListenerOptions
           * @private {boolean|undefined}
           */

          var supportsPassive_;
          /**
           * 对于 Edge 15 浏览器，伪类设置 css 变量存在 bug
           * @return {boolean}
           */

          function detectEdgePseudoVarBug() {
            /*
   * Detect versions of Edge with buggy var() support
   * See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
   */
            var node = doc.createElement('div');
            node.className = 'ripple-test-edge-var-bug';
            doc.body.appendChild(node);
            /*
   * The bug exists if ::before style ends up propagating to the parent element.
   * Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
   * but Firefox is known to support CSS custom properties correctly.
   * See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
   */

            var computedStyle = win.getComputedStyle(node);
            var hasPseudoVarBug =
              computedStyle !== null &&
              computedStyle.borderTopStyle === 'solid';
            node.remove();
            return hasPseudoVarBug;
          }
          /**
           * 判断是否支持 css 变量
           * https://caniuse.com/#feat=css-variables
           * 当前支持的浏览器有：
           * Edge 15+ (15对于伪类有 bug)、Firefox 31+ 、Chrome 49+ 、Safari 9.1+、Opera 36+
           * IOS Safari 9.3+ 、(Android 5+: Chromium 62+ Opera 37+ Chrome 62+ FireFox 57+ )
           * @param {boolean=} forceRefresh
           * @return {boolean|undefined}
           */

          function supportsCssVariables() {
            var forceRefresh =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : false;

            if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
              return supportsCssVariables_;
            }

            var supportsFunctionPresent =
              win.CSS && typeof win.CSS.supports === 'function';

            if (!supportsFunctionPresent) {
              return;
            }

            var explicitlySupportsCssVars = win.CSS.supports(
              '--css-vars',
              'yes'
            );
            /*
   * See: https://bugs.webkit.org/show_bug.cgi?id=154669
   * See: README section on Safari
   */

            var weAreFeatureDetectingSafari10plus =
              win.CSS.supports('(--css-vars: yes)') &&
              win.CSS.supports('color', '#00000000');

            if (
              explicitlySupportsCssVars ||
              weAreFeatureDetectingSafari10plus
            ) {
              supportsCssVariables_ = !detectEdgePseudoVarBug();
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
            var globalObj =
              arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : window;
            var forceRefresh =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : false;

            if (supportsPassive_ === undefined || forceRefresh) {
              var isSupported = false;

              try {
                /* eslint-disable getter-return */
                globalObj.document.addEventListener('test', null, {
                  get passive() {
                    isSupported = true;
                  },
                });
              } catch (e) {
                /* 不支持 */
              }

              supportsPassive_ = isSupported;
            }

            return supportsPassive_
              ? {
                  passive: true,
                }
              : false;
          }
          /**
           * 使用 matches (老版本使用 webkitMatchesSelector, msMatchesSelector) 来测试一个选择器是否被浏览器支持，比如 :active 等
           * @param {!Object} HTMLElementPrototype
           * @return {!Array<string>}
           */

          function getMatchesProperty(HTMLElementPrototype) {
            return ['webkitMatchesSelector', 'msMatchesSelector', 'matches']
              .filter(function(p) {
                return p in HTMLElementPrototype;
              })
              .pop();
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
            var normalizedX;
            var normalizedY; // Determine touch point relative to the ripple container.

            if (ev.type === 'touchstart') {
              normalizedX = ev.changedTouches[0].pageX - documentX;
              normalizedY = ev.changedTouches[0].pageY - documentY;
            } else {
              normalizedX = ev.pageX - documentX;
              normalizedY = ev.pageY - documentY;
            }

            return {
              x: normalizedX,
              y: normalizedY,
            };
          }

          /***/
        },

      /***/ './components/scroll-spy/plugins/catalogueSpy.js':
        /*!*******************************************************!*\
  !*** ./components/scroll-spy/plugins/catalogueSpy.js ***!
  \*******************************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es6.array.filter */ './node_modules/core-js/modules/es6.array.filter.js'
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! core-js/modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js'
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var _base_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! ../../base/util */ './components/base/util.js'
          );

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              var ownKeys = Object.keys(source);
              if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(
                      source,
                      sym
                    ).enumerable;
                  })
                );
              }
              ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            }
            return target;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          var isWheel =
            _base_util__WEBPACK_IMPORTED_MODULE_6__['default'].isWheel;
          var win = window;
          var doc = document;
          var resizeEvt =
            'orientationchange' in win ? 'orientationchange' : 'resize';
          var reg = /translateY\(([-\w]+)\)/;

          var CatalogueSpy =
            /*#__PURE__*/
            (function() {
              function CatalogueSpy(scrollSpy) {
                var _this = this;

                var config =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};

                _classCallCheck(this, CatalogueSpy);

                _defineProperty(this, 'adjustMenuHeight', function() {
                  var menuHeight = doc.documentElement.clientHeight - 64;
                  _this.$menuPanel.style.maxHeight = ''.concat(
                    menuHeight,
                    'px'
                  );
                });

                _defineProperty(this, 'handleScroll', function(prevent) {
                  return (
                    /* eslint-disable complexity */
                    function(e) {
                      var _this$$menuPanel = _this.$menuPanel,
                        scrollHeight = _this$$menuPanel.scrollHeight,
                        clientHeight = _this$$menuPanel.clientHeight;
                      var step = _this.config.step;
                      _this.maxOffset = scrollHeight - clientHeight; // 最大滚动的高度
                      // 判断鼠标滑轮向上还是向下滑动

                      var upDown;
                      var detail = e.detail,
                        wheelDelta = e.wheelDelta;

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

                      if (
                        prevent &&
                        _this.maxOffset > 0 &&
                        ((upDown === 'down' && Math.abs(y) < _this.maxOffset) ||
                          (upDown === 'up' && y > 0))
                      ) {
                        e.preventDefault();
                        e.stopPropagation();
                      }

                      if (
                        (upDown === 'up' && y === 0) ||
                        (upDown === 'down' && Math.abs(y) === _this.maxOffset)
                      ) {
                        return;
                      }

                      if (upDown === 'up' && y < 0) {
                        _this.$menuPanel.style.transform = 'translateY('.concat(
                          Math.min(y + step, 0),
                          'px)'
                        );
                      } else if (
                        upDown === 'down' &&
                        Math.abs(y) < _this.maxOffset
                      ) {
                        _this.$menuPanel.style.transform = 'translateY('.concat(
                          Math.max(y - step, -_this.maxOffset),
                          'px)'
                        );
                      }
                    }
                  );
                });

                _defineProperty(this, 'scrollMenu', function(lastSelector) {
                  var step = _this.config.step;
                  var $menuPanel = _this.$menuPanel;
                  var scrollHeight = $menuPanel.scrollHeight,
                    clientHeight = $menuPanel.clientHeight;
                  var maxOffset = scrollHeight - clientHeight; // 最大滚动的高度

                  if (maxOffset === 0) {
                    return;
                  }

                  maxOffset += 1; // 由于计算偏差，需要微调1个像素

                  /*
       * 如果当前菜单项隐藏，则向上拉
       * Fixme 注意这里还需计算 $menuPanel.parentElement padding 和 border 的值，待处理
       */

                  var menuRect = $menuPanel.parentElement.getBoundingClientRect();
                  var currentTarget = doc.querySelectorAll(
                    lastSelector.join(',')
                  );

                  if (currentTarget) {
                    Array.prototype.forEach.call(currentTarget, function(el) {
                      var rect = el.getBoundingClientRect();

                      while (
                        rect.top > 0 &&
                        rect.bottom > 0 &&
                        (rect.top < menuRect.top ||
                          rect.bottom > menuRect.bottom)
                      ) {
                        // 向上移动
                        var transform = $menuPanel.style.transform;
                        var y = reg.exec(transform);
                        y = y ? parseFloat(y[1], 10) : 0;

                        if (rect.top < menuRect.top) {
                          $menuPanel.style.transform = 'translateY('.concat(
                            Math.min(y + step, 0),
                            'px)'
                          );
                        } else {
                          $menuPanel.style.transform = 'translateY('.concat(
                            Math.max(y - step, -maxOffset),
                            'px)'
                          );
                        }

                        rect = el.getBoundingClientRect();
                      }
                    });
                  }
                });

                this.scrollSpy = scrollSpy;
                this.config = _objectSpread(
                  {},
                  CatalogueSpy.defaultConfig,
                  config
                );
                var _menuHeight = this.config.menuHeight;

                if (!_menuHeight) {
                  _menuHeight = document.documentElement.clientHeight - 64;
                  this.config.menuHeight = _menuHeight;
                }

                var _$menuPanel = scrollSpy.$menuPanel;
                _$menuPanel.style.transform = 'translateY(0)';
                _$menuPanel.style.maxHeight = ''.concat(_menuHeight, 'px');
                this.$menuPanel = _$menuPanel;
                win.addEventListener(resizeEvt, this.adjustMenuHeight, false);
              } // 调整菜单最大高度

              _createClass(CatalogueSpy, [
                {
                  key: 'mount',
                  value: function mount() {
                    /*
       * fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
       * http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
       */
                    this.$menuPanel.addEventListener(
                      isWheel ? 'mousewheel' : 'DOMMouseScroll',
                      this.handleScroll(true),
                      false
                    );
                  },
                },
                {
                  key: 'unmount',
                  value: function unmount() {
                    console.info('待补充');
                    win.removeEventListener(
                      resizeEvt,
                      this.adjustMenuHeight,
                      false
                    );
                  },
                },
              ]);

              return CatalogueSpy;
            })();

          _defineProperty(CatalogueSpy, 'defaultConfig', {
            menuHeight: null,
            // 设置菜单高度，如果不设置，则取当前浏览器可视高度
            step: 30, // 滚动鼠标，菜单滑动步长
          });

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = CatalogueSpy;

          /***/
        },

      /***/ './components/scroll-spy/scrollSpy.js':
        /*!********************************************!*\
  !*** ./components/scroll-spy/scrollSpy.js ***!
  \********************************************/
        /*! exports provided: default */
        /***/ function(module, __webpack_exports__, __webpack_require__) {
          'use strict';
          __webpack_require__.r(__webpack_exports__);
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
            /*! core-js/modules/es6.array.filter */ './node_modules/core-js/modules/es6.array.filter.js'
          );
          /* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_0__
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
            /*! core-js/modules/es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
          );
          /* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
            /*! core-js/modules/es6.object.keys */ './node_modules/core-js/modules/es6.object.keys.js'
          );
          /* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
            /*! core-js/modules/es6.object.define-property */ './node_modules/core-js/modules/es6.object.define-property.js'
          );
          /* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_3__
          );
          /* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
            /*! core-js/modules/es6.regexp.split */ './node_modules/core-js/modules/es6.regexp.split.js'
          );
          /* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_4__
          );
          /* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
            /*! core-js/modules/es6.array.sort */ './node_modules/core-js/modules/es6.array.sort.js'
          );
          /* harmony import */ var core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_sort__WEBPACK_IMPORTED_MODULE_5__
          );
          /* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
            /*! core-js/modules/es6.array.is-array */ './node_modules/core-js/modules/es6.array.is-array.js'
          );
          /* harmony import */ var core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_is_array__WEBPACK_IMPORTED_MODULE_6__
          );
          /* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
            /*! core-js/modules/es6.string.anchor */ './node_modules/core-js/modules/es6.string.anchor.js'
          );
          /* harmony import */ var core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_string_anchor__WEBPACK_IMPORTED_MODULE_7__
          );
          /* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
            /*! core-js/modules/es6.array.map */ './node_modules/core-js/modules/es6.array.map.js'
          );
          /* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_8__
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
            /*! core-js/modules/web.dom.iterable */ './node_modules/core-js/modules/web.dom.iterable.js'
          );
          /* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_9__
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
            /*! core-js/modules/es6.array.for-each */ './node_modules/core-js/modules/es6.array.for-each.js'
          );
          /* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/ __webpack_require__.n(
            core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_10__
          );
          /* harmony import */ var _base_util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
            /*! ../base/util */ './components/base/util.js'
          );

          function _objectSpread(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i] != null ? arguments[i] : {};
              var ownKeys = Object.keys(source);
              if (typeof Object.getOwnPropertySymbols === 'function') {
                ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(
                      source,
                      sym
                    ).enumerable;
                  })
                );
              }
              ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            }
            return target;
          }

          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError('Cannot call a class as a function');
            }
          }

          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ('value' in descriptor) descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }

          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps) _defineProperties(Constructor, staticProps);
            return Constructor;
          }

          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true,
              });
            } else {
              obj[key] = value;
            }
            return obj;
          }

          var win = window;
          var doc = document;
          var _Array$prototype = Array.prototype,
            forEach = _Array$prototype.forEach,
            map = _Array$prototype.map;

          var ScrollSpy =
            /*#__PURE__*/
            (function() {
              function ScrollSpy(element) {
                var _this = this;

                var config =
                  arguments.length > 1 && arguments[1] !== undefined
                    ? arguments[1]
                    : {};

                _classCallCheck(this, ScrollSpy);

                _defineProperty(this, 'scrollEvent', function(e) {
                  _this.process();
                });

                this.element = element;
                this.scrollElement = element.tagName === 'BODY' ? win : element;
                this.config = this.getConfig(config);
                var _this$config = this.config,
                  menu = _this$config.menu,
                  menuClsPrefix = _this$config.menuClsPrefix,
                  extend = _this$config.extend; // 菜单 目录 等选择器

                this.menuSelector = ''
                  .concat(menu, ' .')
                  .concat(menuClsPrefix, '-title');
                this.offsets = [];
                this.targets = [];
                this.activeTarget = null;
                this.scrollHeight = 0; // 如果默认不展开，则用样式来控制

                if (!extend) {
                  var extendStyle = doc.createElement('style');
                  extendStyle.innerHTML =
                    '\n          .menu-catalogue .menu-catalogue {\n            display: none;\n          }\n          .active + .menu-catalogue {\n            display: block;\n          }';
                  doc.getElementsByTagName('head')[0].append(extendStyle);
                } // 添加事件，页面滚动时，处理目录和内容对应坐标

                this.scrollElement.addEventListener(
                  _base_util__WEBPACK_IMPORTED_MODULE_11__['isWheel']
                    ? 'mousewheel'
                    : 'DOMMouseScroll',
                  this.scrollEvent,
                  false
                );
                var _this$config2 = this.config,
                  immedLoad = _this$config2.immedLoad,
                  initMenus = _this$config2.initMenus,
                  anchor = _this$config2.anchor; // 需要根据内容动态创建菜单列表

                if (initMenus) {
                  this.generateMenus();
                } // 菜单面板

                this.menuPanel = ''
                  .concat(menu, ' .')
                  .concat(menuClsPrefix, '.')
                  .concat(menuClsPrefix, '-catalogue');
                this.$menuPanel = doc.querySelector(this.menuPanel); // 不用锚点处理的情况

                if (anchor === false) {
                  // fixme 待改进，改成 事件代理模式
                  var menuElements = doc.querySelectorAll(this.menuSelector);
                  forEach.call(menuElements, function(el) {
                    el.addEventListener(
                      'click',
                      function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        var target = e.currentTarget;
                        var _this$config3 = _this.config,
                          offsetMethod = _this$config3.offsetMethod,
                          container = _this$config3.container;
                        var offsetXY = _this.config.offset;
                        var targetEl = doc.querySelector(
                          ''
                            .concat(container, ' [data-target="')
                            .concat(target.dataset, '"]')
                        ).parentNode;
                        var top =
                          offsetMethod === 'offset'
                            ? Object(
                                _base_util__WEBPACK_IMPORTED_MODULE_11__[
                                  'offset'
                                ]
                              )(targetEl).top
                            : Object(
                                _base_util__WEBPACK_IMPORTED_MODULE_11__[
                                  'position'
                                ]
                              )(targetEl).top;
                        var offsetBase =
                          offsetMethod === 'position'
                            ? _this.getScrollTop()
                            : 0; // fixme

                        _this.scrollElement.scrollTo(
                          0,
                          top + offsetBase - offsetXY
                        );

                        target.blur();

                        _this.process();
                      },
                      false
                    );
                  });
                } // 加载插件

                var pluginConfig = this.config.pluginConfig;
                var plugins = this.config.plugins;

                if (plugins) {
                  if (!Array.isArray(plugins)) {
                    plugins = [plugins];
                  }

                  this.plugins = [];
                  var container = this.config.container;
                  plugins.forEach(function(plugin) {
                    // 把当前实例传给插件
                    var instance = new plugin(_this, pluginConfig);
                    instance.mount();

                    _this.plugins.push(instance);
                  });
                }
                /*
     * 显示菜单
     * doc.querySelector(menu).style.display = 'block';
     */

                if (immedLoad) {
                  this.refresh();
                  this.process();
                }
              }

              _createClass(ScrollSpy, [
                {
                  key: 'getConfig',
                  value: function getConfig(config) {
                    var _config = _objectSpread(
                      {},
                      ScrollSpy.defaultConfig,
                      config
                    );

                    var menu = _config.menu;
                    var container = _config.container;

                    if (typeof menu !== 'string') {
                      // dom 对象
                      var id = menu.id;

                      if (!id) {
                        id = Object(
                          _base_util__WEBPACK_IMPORTED_MODULE_11__['getUuid']
                        )('scrollspy');
                        menu.id = id;
                      }

                      _config.menu = '#'.concat(id);
                    }

                    if (!container) {
                      container = doc.body; // 默认取 body
                    }

                    if (typeof container !== 'string') {
                      var _container = container,
                        _id = _container.id;

                      if (!_id) {
                        _id = Object(
                          _base_util__WEBPACK_IMPORTED_MODULE_11__['getUuid']
                        )('scrollspy');
                        container.id = _id;
                      }

                      _config.container = '#'.concat(_id);
                    }

                    var autoMethod =
                      this.scrollElement !== this.scrollElement.window
                        ? 'position'
                        : 'offset';
                    var offsetMethod =
                      _config.method === 'auto' ? autoMethod : _config.method;
                    _config.offsetMethod = offsetMethod;
                    return _config;
                  },
                  /**
                   * 动态创建菜单
                   */
                },
                {
                  key: 'generateMenus',
                  value: function generateMenus() {
                    var menus = this.element.querySelectorAll(
                      'h1,h2,h3,h4,h5,h6'
                    ); // 初始化根节点

                    var entries = {
                      level: 0,
                      children: [],
                      depth: 0,
                      parent: null,
                      text: null,
                      root: true,
                    }; // 前一个元素 level

                    var prevLevel = 0; // 上一个节点

                    var lastNode = null;
                    forEach.call(menus, function(el, index) {
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
                          el: el,
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
                            el: el,
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
                            el: el,
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
                            el: el,
                          };
                          ancestor.children.push(entry);
                        }
                      }

                      lastNode = entry;
                      prevLevel = level;
                    });
                    var html = this.generateMenusHtml(
                      entries.children,
                      this.config.prefix
                    );
                    doc.querySelector(this.config.menu).innerHTML = html;
                  },
                  /**
                   * 根据 nodes 节点 生成 html
                   * @param nodes
                   * @param prefix
                   * @return {string}
                   */
                },
                {
                  key: 'generateMenusHtml',
                  value: function generateMenusHtml(nodes, prefix) {
                    var _this$config4 = this.config,
                      menuClsPrefix = _this$config4.menuClsPrefix,
                      menuCls = _this$config4.menuCls;
                    var html = '';

                    if (nodes && nodes.length > 0) {
                      html = '<ul class="'
                        .concat(menuClsPrefix, ' ')
                        .concat(menuClsPrefix, '-catalogue')
                        .concat(menuCls ? ' '.concat(menuCls) : '', '">');

                      for (var i = 0, len = nodes.length; i < len; i++) {
                        var node = nodes[i]; // 为对应的内容加锚点

                        var newChild = document.createElement('a');
                        newChild.id = prefix + (i + 1);
                        newChild.className = ''.concat(
                          menuClsPrefix,
                          '-anchor'
                        );

                        if (this.config.anchor) {
                          newChild.href = '#'.concat(prefix + (i + 1));
                        } else {
                          newChild.dataset.menu = ''.concat(prefix + (i + 1));
                        }

                        newChild.setAttribute('aria-hidden', true);
                        node.el.insertBefore(newChild, node.el.firstChild);
                        html += '<li>';

                        if (this.config.anchor) {
                          html += '<a class="'
                            .concat(menuClsPrefix, '-title" href="#')
                            .concat(prefix)
                            .concat(i + 1, '">')
                            .concat(node.text, '</a>');
                        } else {
                          // 用 data-target 来控制，需要结合 js 来控制
                          html += '<a class="'
                            .concat(menuClsPrefix, '-title" data-target="')
                            .concat(prefix)
                            .concat(i + 1, '" href="#">')
                            .concat(node.text, '</a>');
                        }

                        if (node.children && node.children.length > 0) {
                          html += this.generateMenusHtml(
                            node.children,
                            ''.concat(prefix).concat(i + 1, '-')
                          );
                        }

                        html += '</li>';
                      }

                      html += '</ul>';
                    }

                    return html;
                  },
                  /**
                   * 滚动页面时，刷新相关数据
                   */
                },
                {
                  key: 'refresh',
                  value: function refresh() {
                    var _this2 = this;

                    var offsetMethod = this.config.offsetMethod;
                    var offsetBase =
                      offsetMethod === 'position' ? this.getScrollTop() : 0;
                    this.offsets = [];
                    this.targets = [];
                    this.scrollHeight = this.getScrollHeight(); // 把滚动监听的元素和坐标保存到offsets和targets中

                    var menuElements = doc.querySelectorAll(this.menuSelector);
                    map
                      .call(menuElements, function(element) {
                        // 目标元素
                        var target = null;
                        var _this2$config = _this2.config,
                          anchor = _this2$config.anchor,
                          container = _this2$config.container;
                        var selector = anchor
                          ? element.getAttribute('href')
                          : element.dataset.menu;
                        var targetSelector = anchor
                          ? element.getAttribute('href')
                          : ''
                              .concat(container, ' [data-target="')
                              .concat(element.dataset.menu, '"]');

                        if (targetSelector) {
                          target = doc.querySelector(targetSelector).parentNode;
                          var targetBCR = target.getBoundingClientRect();

                          if (targetBCR.width || targetBCR.height) {
                            return [
                              (offsetMethod === 'offset'
                                ? Object(
                                    _base_util__WEBPACK_IMPORTED_MODULE_11__[
                                      'offset'
                                    ]
                                  )(target).top
                                : Object(
                                    _base_util__WEBPACK_IMPORTED_MODULE_11__[
                                      'position'
                                    ]
                                  )(target).top) + offsetBase,
                              selector,
                            ];
                          }
                        }

                        return null;
                      })
                      .sort(function(a, b) {
                        if (!a || !b) {
                          return 0;
                        }

                        return a[0] - b[0];
                      })
                      .forEach(function(item) {
                        if (item) {
                          _this2.offsets.push(item[0]);

                          _this2.targets.push(item[1]);
                        }
                      });
                  }, // 鼠标滚动事件
                },
                {
                  key: 'process',

                  /**
                   * 滚动时触发该方法
                   * @returns {boolean|*}
                   */
                  value: function process() {
                    // 需要加 1 微调
                    var scrollTop =
                      this.getScrollTop() + this.config.offset + 1;
                    var scrollHeight = this.getScrollHeight();
                    var maxScroll =
                      this.config.offset +
                      scrollHeight -
                      this.getOffsetHeight(); // 不相等的话，重新刷新，比如改变页面窗口后

                    if (this.scrollHeight !== scrollHeight) {
                      this.refresh();
                    } // 滑到底部

                    if (scrollTop >= maxScroll) {
                      // 取最后一个
                      var target = this.targets[this.targets.length - 1];

                      if (this.activeTarget !== target) {
                        this.activate(target);
                      }

                      return;
                    } // 滑到头部

                    if (
                      this.activeTarget &&
                      scrollTop < this.offsets[0] &&
                      this.offsets[0] > 0
                    ) {
                      this.activeTarget = null;
                      this.clearActiveCls();
                      return;
                    }

                    for (var i = this.offsets.length; i--; ) {
                      var isActiveTarget =
                        this.activeTarget !== this.targets[i] &&
                        scrollTop >= this.offsets[i] &&
                        (this.offsets[i + 1] === undefined ||
                          scrollTop < this.offsets[i + 1]);

                      if (isActiveTarget) {
                        this.activate(this.targets[i]);
                      }
                    }
                  },
                  /**
                   * 设置当前活动的内容
                   * @param target
                   */
                },
                {
                  key: 'activate',
                  value: function activate(target) {
                    this.activeTarget = target;
                    this.clearActiveCls();
                    var anchor = this.config.anchor;
                    var queries = this.menuSelector.split(',');
                    var lastSelector = []; // 最后一个菜单项，即当前的子节点
                    // 当前选中的和父目录都添加活动样式

                    var parentEls = target.split('-');
                    queries = queries.map(function(query) {
                      var selector = [];
                      var catalog = '';
                      parentEls.forEach(function(item, index) {
                        if (index === 0) {
                          catalog += item;
                        } else {
                          catalog += '-'.concat(item);
                          selector.push(
                            anchor
                              ? ''
                                  .concat(query, '[href="')
                                  .concat(catalog, '"]')
                              : ''
                                  .concat(query, '[data-menu="')
                                  .concat(catalog, '"]')
                          );
                        }
                      });
                      lastSelector.push(selector[selector.length - 1]);
                      return selector.join(',');
                    });
                    var $link = doc.querySelectorAll(queries.join(','));

                    for (var i = 0, len = $link.length; i < len; i++) {
                      $link[i].classList.add('active');
                    }

                    this.plugins.forEach(function(plugin) {
                      if (typeof plugin.scrollMenu === 'function') {
                        plugin.scrollMenu(lastSelector);
                      }
                    }); // todo 事件，待补充

                    /*
       * $(this._scrollElement).trigger(Event.ACTIVATE, {
       * relatedTarget: target
       *})
       */
                  },
                },
                {
                  key: 'clearActiveCls',
                  value: function clearActiveCls() {
                    // 删除当前活动样式
                    var activeEls = doc.querySelectorAll(
                      ''.concat(this.menuSelector, '.active')
                    );

                    if (activeEls) {
                      for (var i = 0, len = activeEls.length; i < len; i++) {
                        activeEls[i].classList.remove('active');
                      }
                    }
                  }, // 卸载
                },
                {
                  key: 'unmount',
                  value: function unmount() {
                    // $.removeData(this._element, DATA_KEY)
                    this.scrollElement.removeEventListener(
                      _base_util__WEBPACK_IMPORTED_MODULE_11__['isWheel']
                        ? 'mousewheel'
                        : 'DOMMouseScroll',
                      this.scrollEvent,
                      false
                    );
                    this.element = null;
                    this.scrollElement = null;
                    this.config = null;
                    this.menu = null;
                    this.menuSelector = null;
                    this.container = null;
                    this.offsets = null;
                    this.targets = null;
                    this.activeTarget = null;
                    this.scrollHeight = null; // 卸载插件

                    if (this.plugins) {
                      this.plugins.forEach(function(plugin) {
                        plugin.unmount();
                      });
                      this.plugins = null;
                    }
                  },
                },
                {
                  key: 'getScrollTop',
                  value: function getScrollTop() {
                    return this.scrollElement === win
                      ? this.scrollElement.pageYOffset
                      : this.scrollElement.scrollTop;
                  },
                },
                {
                  key: 'getScrollHeight',
                  value: function getScrollHeight() {
                    return (
                      this.scrollElement.scrollHeight ||
                      Math.max(
                        doc.body.scrollHeight,
                        doc.documentElement.scrollHeight
                      )
                    );
                  },
                },
                {
                  key: 'getOffsetHeight',
                  value: function getOffsetHeight() {
                    return this.scrollElement === win
                      ? win.innerHeight
                      : this.scrollElement.getBoundingClientRect().height;
                  },
                },
              ]);

              return ScrollSpy;
            })();

          _defineProperty(ScrollSpy, 'defaultConfig', {
            offset: 0,
            method: 'auto',
            menu: '',
            // 菜单导航
            menuCls: null,
            // 自定义菜单样式
            menuClsPrefix: 'menu',
            // 菜单样式前缀
            container: null,
            // 需要监听的内容容器
            immedLoad: true,
            // 是否立即监听，如果设为 false， 则通过滑动鼠标来激活监听
            prefix: 'menu-',
            // 导航目录前缀
            anchor: true,
            // 是否用锚点来控制，默认用锚点处理
            animation: true,
            // 是否开启动画
            extend: false, // 默认菜单没有展开
          });

          /* harmony default export */ __webpack_exports__[
            'default'
          ] = ScrollSpy;

          /***/
        },

      /***/ './node_modules/core-js/modules/_a-function.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = function(it) {
            if (typeof it != 'function')
              throw TypeError(it + ' is not a function!');
            return it;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_add-to-unscopables.js':
        /*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 22.1.3.31 Array.prototype[@@unscopables]
          var UNSCOPABLES = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          )('unscopables');
          var ArrayProto = Array.prototype;
          if (ArrayProto[UNSCOPABLES] == undefined)
            __webpack_require__(
              /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
            )(ArrayProto, UNSCOPABLES, {});
          module.exports = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_an-object.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-includes.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // false -> Array#indexOf
          // true  -> Array#includes
          var toIObject = __webpack_require__(
            /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
          );
          var toLength = __webpack_require__(
            /*! ./_to-length */ './node_modules/core-js/modules/_to-length.js'
          );
          var toAbsoluteIndex = __webpack_require__(
            /*! ./_to-absolute-index */ './node_modules/core-js/modules/_to-absolute-index.js'
          );
          module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
              var O = toIObject($this);
              var length = toLength(O.length);
              var index = toAbsoluteIndex(fromIndex, length);
              var value;
              // Array#includes uses SameValueZero equality algorithm
              // eslint-disable-next-line no-self-compare
              if (IS_INCLUDES && el != el)
                while (length > index) {
                  value = O[index++];
                  // eslint-disable-next-line no-self-compare
                  if (value != value) return true;
                  // Array#indexOf ignores holes, Array#includes - not
                }
              else
                for (; length > index; index++)
                  if (IS_INCLUDES || index in O) {
                    if (O[index] === el) return IS_INCLUDES || index || 0;
                  }
              return !IS_INCLUDES && -1;
            };
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-methods.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-methods.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 0 -> Array#forEach
          // 1 -> Array#map
          // 2 -> Array#filter
          // 3 -> Array#some
          // 4 -> Array#every
          // 5 -> Array#find
          // 6 -> Array#findIndex
          var ctx = __webpack_require__(
            /*! ./_ctx */ './node_modules/core-js/modules/_ctx.js'
          );
          var IObject = __webpack_require__(
            /*! ./_iobject */ './node_modules/core-js/modules/_iobject.js'
          );
          var toObject = __webpack_require__(
            /*! ./_to-object */ './node_modules/core-js/modules/_to-object.js'
          );
          var toLength = __webpack_require__(
            /*! ./_to-length */ './node_modules/core-js/modules/_to-length.js'
          );
          var asc = __webpack_require__(
            /*! ./_array-species-create */ './node_modules/core-js/modules/_array-species-create.js'
          );
          module.exports = function(TYPE, $create) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            var create = $create || asc;
            return function($this, callbackfn, that) {
              var O = toObject($this);
              var self = IObject(O);
              var f = ctx(callbackfn, that, 3);
              var length = toLength(self.length);
              var index = 0;
              var result = IS_MAP
                ? create($this, length)
                : IS_FILTER
                  ? create($this, 0)
                  : undefined;
              var val, res;
              for (; length > index; index++)
                if (NO_HOLES || index in self) {
                  val = self[index];
                  res = f(val, index, O);
                  if (TYPE) {
                    if (IS_MAP) result[index] = res;
                    // map
                    else if (res)
                      switch (TYPE) {
                        case 3:
                          return true; // some
                        case 5:
                          return val; // find
                        case 6:
                          return index; // findIndex
                        case 2:
                          result.push(val); // filter
                      }
                    else if (IS_EVERY) return false; // every
                  }
                }
              return IS_FIND_INDEX
                ? -1
                : IS_SOME || IS_EVERY
                  ? IS_EVERY
                  : result;
            };
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-species-constructor.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-constructor.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var isArray = __webpack_require__(
            /*! ./_is-array */ './node_modules/core-js/modules/_is-array.js'
          );
          var SPECIES = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          )('species');

          module.exports = function(original) {
            var C;
            if (isArray(original)) {
              C = original.constructor;
              // cross-realm fallback
              if (
                typeof C == 'function' &&
                (C === Array || isArray(C.prototype))
              )
                C = undefined;
              if (isObject(C)) {
                C = C[SPECIES];
                if (C === null) C = undefined;
              }
            }
            return C === undefined ? Array : C;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_array-species-create.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_array-species-create.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
          var speciesConstructor = __webpack_require__(
            /*! ./_array-species-constructor */ './node_modules/core-js/modules/_array-species-constructor.js'
          );

          module.exports = function(original, length) {
            return new (speciesConstructor(original))(length);
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_cof.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var toString = {}.toString;

          module.exports = function(it) {
            return toString.call(it).slice(8, -1);
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_core.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var core = (module.exports = { version: '2.5.7' });
          if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

          /***/
        },

      /***/ './node_modules/core-js/modules/_ctx.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // optional / simple context binding
          var aFunction = __webpack_require__(
            /*! ./_a-function */ './node_modules/core-js/modules/_a-function.js'
          );
          module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
              case 1:
                return function(a) {
                  return fn.call(that, a);
                };
              case 2:
                return function(a, b) {
                  return fn.call(that, a, b);
                };
              case 3:
                return function(a, b, c) {
                  return fn.call(that, a, b, c);
                };
            }
            return function(/* ...args */) {
              return fn.apply(that, arguments);
            };
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_defined.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          // 7.2.1 RequireObjectCoercible(argument)
          module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_descriptors.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // Thank's IE8 for his funny defineProperty
          module.exports = !__webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          )(function() {
            return (
              Object.defineProperty({}, 'a', {
                get: function() {
                  return 7;
                },
              }).a != 7
            );
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/_dom-create.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var document = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          ).document;
          // typeof document.createElement is 'object' in old IE
          var is = isObject(document) && isObject(document.createElement);
          module.exports = function(it) {
            return is ? document.createElement(it) : {};
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_enum-bug-keys.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          // IE 8- don't enum bug keys
          module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
            ','
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_enum-keys.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-keys.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // all enumerable object keys, includes symbols
          var getKeys = __webpack_require__(
            /*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js'
          );
          var gOPS = __webpack_require__(
            /*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js'
          );
          var pIE = __webpack_require__(
            /*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js'
          );
          module.exports = function(it) {
            var result = getKeys(it);
            var getSymbols = gOPS.f;
            if (getSymbols) {
              var symbols = getSymbols(it);
              var isEnum = pIE.f;
              var i = 0;
              var key;
              while (symbols.length > i)
                if (isEnum.call(it, (key = symbols[i++]))) result.push(key);
            }
            return result;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_export.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var core = __webpack_require__(
            /*! ./_core */ './node_modules/core-js/modules/_core.js'
          );
          var hide = __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
          );
          var redefine = __webpack_require__(
            /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
          );
          var ctx = __webpack_require__(
            /*! ./_ctx */ './node_modules/core-js/modules/_ctx.js'
          );
          var PROTOTYPE = 'prototype';

          var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL
              ? global
              : IS_STATIC
                ? global[name] || (global[name] = {})
                : (global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
              // contains in native
              own = !IS_FORCED && target && target[key] !== undefined;
              // export native or passed
              out = (own ? target : source)[key];
              // bind timers to global for call from export context
              exp =
                IS_BIND && own
                  ? ctx(out, global)
                  : IS_PROTO && typeof out == 'function'
                    ? ctx(Function.call, out)
                    : out;
              // extend global
              if (target) redefine(target, key, out, type & $export.U);
              // export
              if (exports[key] != out) hide(exports, key, exp);
              if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
          };
          global.core = core;
          // type bitmap
          $export.F = 1; // forced
          $export.G = 2; // global
          $export.S = 4; // static
          $export.P = 8; // proto
          $export.B = 16; // bind
          $export.W = 32; // wrap
          $export.U = 64; // safe
          $export.R = 128; // real proto method for `library`
          module.exports = $export;

          /***/
        },

      /***/ './node_modules/core-js/modules/_fails.js':
        /*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = function(exec) {
            try {
              return !!exec();
            } catch (e) {
              return true;
            }
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_fix-re-wks.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_fix-re-wks.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var hide = __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
          );
          var redefine = __webpack_require__(
            /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
          );
          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          var defined = __webpack_require__(
            /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
          );
          var wks = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          );

          module.exports = function(KEY, length, exec) {
            var SYMBOL = wks(KEY);
            var fns = exec(defined, SYMBOL, ''[KEY]);
            var strfn = fns[0];
            var rxfn = fns[1];
            if (
              fails(function() {
                var O = {};
                O[SYMBOL] = function() {
                  return 7;
                };
                return ''[KEY](O) != 7;
              })
            ) {
              redefine(String.prototype, KEY, strfn);
              hide(
                RegExp.prototype,
                SYMBOL,
                length == 2
                  ? // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                    function(string, arg) {
                      return rxfn.call(string, this, arg);
                    }
                  : // 21.2.5.6 RegExp.prototype[@@match](string)
                    // 21.2.5.9 RegExp.prototype[@@search](string)
                    function(string) {
                      return rxfn.call(string, this);
                    }
              );
            }
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_global.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
          var global = (module.exports =
            typeof window != 'undefined' && window.Math == Math
              ? window
              : typeof self != 'undefined' && self.Math == Math
                ? self
                : // eslint-disable-next-line no-new-func
                  Function('return this')());
          if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

          /***/
        },

      /***/ './node_modules/core-js/modules/_has.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var hasOwnProperty = {}.hasOwnProperty;
          module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_hide.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var dP = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          );
          var createDesc = __webpack_require__(
            /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
          );
          module.exports = __webpack_require__(
            /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
          )
            ? function(object, key, value) {
                return dP.f(object, key, createDesc(1, value));
              }
            : function(object, key, value) {
                object[key] = value;
                return object;
              };

          /***/
        },

      /***/ './node_modules/core-js/modules/_html.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var document = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          ).document;
          module.exports = document && document.documentElement;

          /***/
        },

      /***/ './node_modules/core-js/modules/_ie8-dom-define.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          module.exports =
            !__webpack_require__(
              /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
            ) &&
            !__webpack_require__(
              /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
            )(function() {
              return (
                Object.defineProperty(
                  __webpack_require__(
                    /*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js'
                  )('div'),
                  'a',
                  {
                    get: function() {
                      return 7;
                    },
                  }
                ).a != 7
              );
            });

          /***/
        },

      /***/ './node_modules/core-js/modules/_inherit-if-required.js':
        /*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_inherit-if-required.js ***!
  \**************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var setPrototypeOf = __webpack_require__(
            /*! ./_set-proto */ './node_modules/core-js/modules/_set-proto.js'
          ).set;
          module.exports = function(that, target, C) {
            var S = target.constructor;
            var P;
            if (
              S !== C &&
              typeof S == 'function' &&
              (P = S.prototype) !== C.prototype &&
              isObject(P) &&
              setPrototypeOf
            ) {
              setPrototypeOf(that, P);
            }
            return that;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_iobject.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // fallback for non-array-like ES3 and non-enumerable old V8 strings
          var cof = __webpack_require__(
            /*! ./_cof */ './node_modules/core-js/modules/_cof.js'
          );
          // eslint-disable-next-line no-prototype-builtins
          module.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function(it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
              };

          /***/
        },

      /***/ './node_modules/core-js/modules/_is-array.js':
        /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array.js ***!
  \***************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 7.2.2 IsArray(argument)
          var cof = __webpack_require__(
            /*! ./_cof */ './node_modules/core-js/modules/_cof.js'
          );
          module.exports =
            Array.isArray ||
            function isArray(arg) {
              return cof(arg) == 'Array';
            };

          /***/
        },

      /***/ './node_modules/core-js/modules/_is-object.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = function(it) {
            return typeof it === 'object'
              ? it !== null
              : typeof it === 'function';
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_is-regexp.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 7.2.8 IsRegExp(argument)
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var cof = __webpack_require__(
            /*! ./_cof */ './node_modules/core-js/modules/_cof.js'
          );
          var MATCH = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          )('match');
          module.exports = function(it) {
            var isRegExp;
            return (
              isObject(it) &&
              ((isRegExp = it[MATCH]) !== undefined
                ? !!isRegExp
                : cof(it) == 'RegExp')
            );
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_iter-create.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var create = __webpack_require__(
            /*! ./_object-create */ './node_modules/core-js/modules/_object-create.js'
          );
          var descriptor = __webpack_require__(
            /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
          );
          var setToStringTag = __webpack_require__(
            /*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js'
          );
          var IteratorPrototype = {};

          // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
          __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
          )(
            IteratorPrototype,
            __webpack_require__(
              /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
            )('iterator'),
            function() {
              return this;
            }
          );

          module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
              next: descriptor(1, next),
            });
            setToStringTag(Constructor, NAME + ' Iterator');
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_iter-define.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var LIBRARY = __webpack_require__(
            /*! ./_library */ './node_modules/core-js/modules/_library.js'
          );
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var redefine = __webpack_require__(
            /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
          );
          var hide = __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
          );
          var Iterators = __webpack_require__(
            /*! ./_iterators */ './node_modules/core-js/modules/_iterators.js'
          );
          var $iterCreate = __webpack_require__(
            /*! ./_iter-create */ './node_modules/core-js/modules/_iter-create.js'
          );
          var setToStringTag = __webpack_require__(
            /*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js'
          );
          var getPrototypeOf = __webpack_require__(
            /*! ./_object-gpo */ './node_modules/core-js/modules/_object-gpo.js'
          );
          var ITERATOR = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          )('iterator');
          var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
          var FF_ITERATOR = '@@iterator';
          var KEYS = 'keys';
          var VALUES = 'values';

          var returnThis = function() {
            return this;
          };

          module.exports = function(
            Base,
            NAME,
            Constructor,
            next,
            DEFAULT,
            IS_SET,
            FORCED
          ) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
              if (!BUGGY && kind in proto) return proto[kind];
              switch (kind) {
                case KEYS:
                  return function keys() {
                    return new Constructor(this, kind);
                  };
                case VALUES:
                  return function values() {
                    return new Constructor(this, kind);
                  };
              }
              return function entries() {
                return new Constructor(this, kind);
              };
            };
            var TAG = NAME + ' Iterator';
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native =
              proto[ITERATOR] ||
              proto[FF_ITERATOR] ||
              (DEFAULT && proto[DEFAULT]);
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT
              ? !DEF_VALUES
                ? $default
                : getMethod('entries')
              : undefined;
            var $anyNative =
              NAME == 'Array' ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
              IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
              if (
                IteratorPrototype !== Object.prototype &&
                IteratorPrototype.next
              ) {
                // Set @@toStringTag to native iterators
                setToStringTag(IteratorPrototype, TAG, true);
                // fix for some old engines
                if (
                  !LIBRARY &&
                  typeof IteratorPrototype[ITERATOR] != 'function'
                )
                  hide(IteratorPrototype, ITERATOR, returnThis);
              }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
              VALUES_BUG = true;
              $default = function values() {
                return $native.call(this);
              };
            }
            // Define iterator
            if (
              (!LIBRARY || FORCED) &&
              (BUGGY || VALUES_BUG || !proto[ITERATOR])
            ) {
              hide(proto, ITERATOR, $default);
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
              methods = {
                values: DEF_VALUES ? $default : getMethod(VALUES),
                keys: IS_SET ? $default : getMethod(KEYS),
                entries: $entries,
              };
              if (FORCED)
                for (key in methods) {
                  if (!(key in proto)) redefine(proto, key, methods[key]);
                }
              else
                $export(
                  $export.P + $export.F * (BUGGY || VALUES_BUG),
                  NAME,
                  methods
                );
            }
            return methods;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_iter-step.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = function(done, value) {
            return { value: value, done: !!done };
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_iterators.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = {};

          /***/
        },

      /***/ './node_modules/core-js/modules/_library.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = false;

          /***/
        },

      /***/ './node_modules/core-js/modules/_meta.js':
        /*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_meta.js ***!
  \***********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var META = __webpack_require__(
            /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
          )('meta');
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var setDesc = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          ).f;
          var id = 0;
          var isExtensible =
            Object.isExtensible ||
            function() {
              return true;
            };
          var FREEZE = !__webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          )(function() {
            return isExtensible(Object.preventExtensions({}));
          });
          var setMeta = function(it) {
            setDesc(it, META, {
              value: {
                i: 'O' + ++id, // object ID
                w: {}, // weak collections IDs
              },
            });
          };
          var fastKey = function(it, create) {
            // return primitive with prefix
            if (!isObject(it))
              return typeof it == 'symbol'
                ? it
                : (typeof it == 'string' ? 'S' : 'P') + it;
            if (!has(it, META)) {
              // can't set metadata to uncaught frozen object
              if (!isExtensible(it)) return 'F';
              // not necessary to add metadata
              if (!create) return 'E';
              // add missing metadata
              setMeta(it);
              // return object ID
            }
            return it[META].i;
          };
          var getWeak = function(it, create) {
            if (!has(it, META)) {
              // can't set metadata to uncaught frozen object
              if (!isExtensible(it)) return true;
              // not necessary to add metadata
              if (!create) return false;
              // add missing metadata
              setMeta(it);
              // return hash weak collections IDs
            }
            return it[META].w;
          };
          // add metadata on freeze-family methods calling
          var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META))
              setMeta(it);
            return it;
          };
          var meta = (module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze,
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-create.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
          var anObject = __webpack_require__(
            /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
          );
          var dPs = __webpack_require__(
            /*! ./_object-dps */ './node_modules/core-js/modules/_object-dps.js'
          );
          var enumBugKeys = __webpack_require__(
            /*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js'
          );
          var IE_PROTO = __webpack_require__(
            /*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js'
          )('IE_PROTO');
          var Empty = function() {
            /* empty */
          };
          var PROTOTYPE = 'prototype';

          // Create object with fake `null` prototype: use iframe Object with cleared prototype
          var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = __webpack_require__(
              /*! ./_dom-create */ './node_modules/core-js/modules/_dom-create.js'
            )('iframe');
            var i = enumBugKeys.length;
            var lt = '<';
            var gt = '>';
            var iframeDocument;
            iframe.style.display = 'none';
            __webpack_require__(
              /*! ./_html */ './node_modules/core-js/modules/_html.js'
            ).appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(
              lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt
            );
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
          };

          module.exports =
            Object.create ||
            function create(O, Properties) {
              var result;
              if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
              } else result = createDict();
              return Properties === undefined
                ? result
                : dPs(result, Properties);
            };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-dp.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var anObject = __webpack_require__(
            /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
          );
          var IE8_DOM_DEFINE = __webpack_require__(
            /*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js'
          );
          var toPrimitive = __webpack_require__(
            /*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js'
          );
          var dP = Object.defineProperty;

          exports.f = __webpack_require__(
            /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
          )
            ? Object.defineProperty
            : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE)
                  try {
                    return dP(O, P, Attributes);
                  } catch (e) {
                    /* empty */
                  }
                if ('get' in Attributes || 'set' in Attributes)
                  throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
              };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-dps.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var dP = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          );
          var anObject = __webpack_require__(
            /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
          );
          var getKeys = __webpack_require__(
            /*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js'
          );

          module.exports = __webpack_require__(
            /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
          )
            ? Object.defineProperties
            : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties);
                var length = keys.length;
                var i = 0;
                var P;
                while (length > i) dP.f(O, (P = keys[i++]), Properties[P]);
                return O;
              };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gopd.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopd.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var pIE = __webpack_require__(
            /*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js'
          );
          var createDesc = __webpack_require__(
            /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
          );
          var toIObject = __webpack_require__(
            /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
          );
          var toPrimitive = __webpack_require__(
            /*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js'
          );
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var IE8_DOM_DEFINE = __webpack_require__(
            /*! ./_ie8-dom-define */ './node_modules/core-js/modules/_ie8-dom-define.js'
          );
          var gOPD = Object.getOwnPropertyDescriptor;

          exports.f = __webpack_require__(
            /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
          )
            ? gOPD
            : function getOwnPropertyDescriptor(O, P) {
                O = toIObject(O);
                P = toPrimitive(P, true);
                if (IE8_DOM_DEFINE)
                  try {
                    return gOPD(O, P);
                  } catch (e) {
                    /* empty */
                  }
                if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
              };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gopn-ext.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn-ext.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
          var toIObject = __webpack_require__(
            /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
          );
          var gOPN = __webpack_require__(
            /*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js'
          ).f;
          var toString = {}.toString;

          var windowNames =
            typeof window == 'object' && window && Object.getOwnPropertyNames
              ? Object.getOwnPropertyNames(window)
              : [];

          var getWindowNames = function(it) {
            try {
              return gOPN(it);
            } catch (e) {
              return windowNames.slice();
            }
          };

          module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == '[object Window]'
              ? getWindowNames(it)
              : gOPN(toIObject(it));
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gopn.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gopn.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
          var $keys = __webpack_require__(
            /*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js'
          );
          var hiddenKeys = __webpack_require__(
            /*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js'
          ).concat('length', 'prototype');

          exports.f =
            Object.getOwnPropertyNames ||
            function getOwnPropertyNames(O) {
              return $keys(O, hiddenKeys);
            };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gops.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gops.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          exports.f = Object.getOwnPropertySymbols;

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-gpo.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var toObject = __webpack_require__(
            /*! ./_to-object */ './node_modules/core-js/modules/_to-object.js'
          );
          var IE_PROTO = __webpack_require__(
            /*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js'
          )('IE_PROTO');
          var ObjectProto = Object.prototype;

          module.exports =
            Object.getPrototypeOf ||
            function(O) {
              O = toObject(O);
              if (has(O, IE_PROTO)) return O[IE_PROTO];
              if (
                typeof O.constructor == 'function' &&
                O instanceof O.constructor
              ) {
                return O.constructor.prototype;
              }
              return O instanceof Object ? ObjectProto : null;
            };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-keys-internal.js':
        /*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var toIObject = __webpack_require__(
            /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
          );
          var arrayIndexOf = __webpack_require__(
            /*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js'
          )(false);
          var IE_PROTO = __webpack_require__(
            /*! ./_shared-key */ './node_modules/core-js/modules/_shared-key.js'
          )('IE_PROTO');

          module.exports = function(object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while (names.length > i)
              if (has(O, (key = names[i++]))) {
                ~arrayIndexOf(result, key) || result.push(key);
              }
            return result;
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-keys.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 19.1.2.14 / 15.2.3.14 Object.keys(O)
          var $keys = __webpack_require__(
            /*! ./_object-keys-internal */ './node_modules/core-js/modules/_object-keys-internal.js'
          );
          var enumBugKeys = __webpack_require__(
            /*! ./_enum-bug-keys */ './node_modules/core-js/modules/_enum-bug-keys.js'
          );

          module.exports =
            Object.keys ||
            function keys(O) {
              return $keys(O, enumBugKeys);
            };

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-pie.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-pie.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          exports.f = {}.propertyIsEnumerable;

          /***/
        },

      /***/ './node_modules/core-js/modules/_object-sap.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-sap.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // most Object methods by ES6 should accept primitives
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var core = __webpack_require__(
            /*! ./_core */ './node_modules/core-js/modules/_core.js'
          );
          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            $export(
              $export.S +
                $export.F *
                  fails(function() {
                    fn(1);
                  }),
              'Object',
              exp
            );
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_property-desc.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports = function(bitmap, value) {
            return {
              enumerable: !(bitmap & 1),
              configurable: !(bitmap & 2),
              writable: !(bitmap & 4),
              value: value,
            };
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_redefine.js':
        /*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var hide = __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
          );
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var SRC = __webpack_require__(
            /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
          )('src');
          var TO_STRING = 'toString';
          var $toString = Function[TO_STRING];
          var TPL = ('' + $toString).split(TO_STRING);

          __webpack_require__(
            /*! ./_core */ './node_modules/core-js/modules/_core.js'
          ).inspectSource = function(it) {
            return $toString.call(it);
          };

          (module.exports = function(O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction)
              has(val, SRC) ||
                hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
              O[key] = val;
            } else if (!safe) {
              delete O[key];
              hide(O, key, val);
            } else if (O[key]) {
              O[key] = val;
            } else {
              hide(O, key, val);
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
          })(Function.prototype, TO_STRING, function toString() {
            return (
              (typeof this == 'function' && this[SRC]) || $toString.call(this)
            );
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/_set-proto.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_set-proto.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // Works with __proto__ only. Old v8 can't work with null proto objects.
          /* eslint-disable no-proto */
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var anObject = __webpack_require__(
            /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
          );
          var check = function(O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null)
              throw TypeError(proto + ": can't set as prototype!");
          };
          module.exports = {
            set:
              Object.setPrototypeOf ||
              ('__proto__' in {} // eslint-disable-line
                ? (function(test, buggy, set) {
                    try {
                      set = __webpack_require__(
                        /*! ./_ctx */ './node_modules/core-js/modules/_ctx.js'
                      )(
                        Function.call,
                        __webpack_require__(
                          /*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js'
                        ).f(Object.prototype, '__proto__').set,
                        2
                      );
                      set(test, []);
                      buggy = !(test instanceof Array);
                    } catch (e) {
                      buggy = true;
                    }
                    return function setPrototypeOf(O, proto) {
                      check(O, proto);
                      if (buggy) O.__proto__ = proto;
                      else set(O, proto);
                      return O;
                    };
                  })({}, false)
                : undefined),
            check: check,
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_set-to-string-tag.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var def = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          ).f;
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var TAG = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          )('toStringTag');

          module.exports = function(it, tag, stat) {
            if (it && !has((it = stat ? it : it.prototype), TAG))
              def(it, TAG, { configurable: true, value: tag });
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_shared-key.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var shared = __webpack_require__(
            /*! ./_shared */ './node_modules/core-js/modules/_shared.js'
          )('keys');
          var uid = __webpack_require__(
            /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
          );
          module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_shared.js':
        /*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var core = __webpack_require__(
            /*! ./_core */ './node_modules/core-js/modules/_core.js'
          );
          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var SHARED = '__core-js_shared__';
          var store = global[SHARED] || (global[SHARED] = {});

          (module.exports = function(key, value) {
            return (
              store[key] || (store[key] = value !== undefined ? value : {})
            );
          })('versions', []).push({
            version: core.version,
            mode: __webpack_require__(
              /*! ./_library */ './node_modules/core-js/modules/_library.js'
            )
              ? 'pure'
              : 'global',
            copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/_strict-method.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_strict-method.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );

          module.exports = function(method, arg) {
            return (
              !!method &&
              fails(function() {
                // eslint-disable-next-line no-useless-call
                arg
                  ? method.call(
                      null,
                      function() {
                        /* empty */
                      },
                      1
                    )
                  : method.call(null);
              })
            );
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-html.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-html.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          var defined = __webpack_require__(
            /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
          );
          var quot = /"/g;
          // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
          var createHTML = function(string, tag, attribute, value) {
            var S = String(defined(string));
            var p1 = '<' + tag;
            if (attribute !== '')
              p1 +=
                ' ' +
                attribute +
                '="' +
                String(value).replace(quot, '&quot;') +
                '"';
            return p1 + '>' + S + '</' + tag + '>';
          };
          module.exports = function(NAME, exec) {
            var O = {};
            O[NAME] = exec(createHTML);
            $export(
              $export.P +
                $export.F *
                  fails(function() {
                    var test = ''[NAME]('"');
                    return (
                      test !== test.toLowerCase() || test.split('"').length > 3
                    );
                  }),
              'String',
              O
            );
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-trim.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_string-trim.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var defined = __webpack_require__(
            /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
          );
          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          var spaces = __webpack_require__(
            /*! ./_string-ws */ './node_modules/core-js/modules/_string-ws.js'
          );
          var space = '[' + spaces + ']';
          var non = '\u200b\u0085';
          var ltrim = RegExp('^' + space + space + '*');
          var rtrim = RegExp(space + space + '*$');

          var exporter = function(KEY, exec, ALIAS) {
            var exp = {};
            var FORCE = fails(function() {
              return !!spaces[KEY]() || non[KEY]() != non;
            });
            var fn = (exp[KEY] = FORCE ? exec(trim) : spaces[KEY]);
            if (ALIAS) exp[ALIAS] = fn;
            $export($export.P + $export.F * FORCE, 'String', exp);
          };

          // 1 -> String#trimLeft
          // 2 -> String#trimRight
          // 3 -> String#trim
          var trim = (exporter.trim = function(string, TYPE) {
            string = String(defined(string));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
          });

          module.exports = exporter;

          /***/
        },

      /***/ './node_modules/core-js/modules/_string-ws.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-ws.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          module.exports =
            '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-absolute-index.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var toInteger = __webpack_require__(
            /*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js'
          );
          var max = Math.max;
          var min = Math.min;
          module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-integer.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          // 7.1.4 ToInteger
          var ceil = Math.ceil;
          var floor = Math.floor;
          module.exports = function(it) {
            return isNaN((it = +it)) ? 0 : (it > 0 ? floor : ceil)(it);
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-iobject.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // to indexed object, toObject with fallback for non-array-like ES3 strings
          var IObject = __webpack_require__(
            /*! ./_iobject */ './node_modules/core-js/modules/_iobject.js'
          );
          var defined = __webpack_require__(
            /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
          );
          module.exports = function(it) {
            return IObject(defined(it));
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-length.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 7.1.15 ToLength
          var toInteger = __webpack_require__(
            /*! ./_to-integer */ './node_modules/core-js/modules/_to-integer.js'
          );
          var min = Math.min;
          module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-object.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 7.1.13 ToObject(argument)
          var defined = __webpack_require__(
            /*! ./_defined */ './node_modules/core-js/modules/_defined.js'
          );
          module.exports = function(it) {
            return Object(defined(it));
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_to-primitive.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 7.1.1 ToPrimitive(input [, PreferredType])
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          // instead of the ES6 spec version, we didn't implement @@toPrimitive case
          // and the second argument - flag - preferred type is a string
          module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (
              S &&
              typeof (fn = it.toString) == 'function' &&
              !isObject((val = fn.call(it)))
            )
              return val;
            if (
              typeof (fn = it.valueOf) == 'function' &&
              !isObject((val = fn.call(it)))
            )
              return val;
            if (
              !S &&
              typeof (fn = it.toString) == 'function' &&
              !isObject((val = fn.call(it)))
            )
              return val;
            throw TypeError("Can't convert object to primitive value");
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_uid.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports) {
          var id = 0;
          var px = Math.random();
          module.exports = function(key) {
            return 'Symbol('.concat(
              key === undefined ? '' : key,
              ')_',
              (++id + px).toString(36)
            );
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_wks-define.js':
        /*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-define.js ***!
  \*****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var core = __webpack_require__(
            /*! ./_core */ './node_modules/core-js/modules/_core.js'
          );
          var LIBRARY = __webpack_require__(
            /*! ./_library */ './node_modules/core-js/modules/_library.js'
          );
          var wksExt = __webpack_require__(
            /*! ./_wks-ext */ './node_modules/core-js/modules/_wks-ext.js'
          );
          var defineProperty = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          ).f;
          module.exports = function(name) {
            var $Symbol =
              core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != '_' && !(name in $Symbol))
              defineProperty($Symbol, name, { value: wksExt.f(name) });
          };

          /***/
        },

      /***/ './node_modules/core-js/modules/_wks-ext.js':
        /*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_wks-ext.js ***!
  \**************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          exports.f = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/_wks.js':
        /*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var store = __webpack_require__(
            /*! ./_shared */ './node_modules/core-js/modules/_shared.js'
          )('wks');
          var uid = __webpack_require__(
            /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
          );
          var Symbol = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          ).Symbol;
          var USE_SYMBOL = typeof Symbol == 'function';

          var $exports = (module.exports = function(name) {
            return (
              store[name] ||
              (store[name] =
                (USE_SYMBOL && Symbol[name]) ||
                (USE_SYMBOL ? Symbol : uid)('Symbol.' + name))
            );
          });

          $exports.store = store;

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.filter.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.filter.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var $filter = __webpack_require__(
            /*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js'
          )(2);

          $export(
            $export.P +
              $export.F *
                !__webpack_require__(
                  /*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js'
                )([].filter, true),
            'Array',
            {
              // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
              filter: function filter(callbackfn /* , thisArg */) {
                return $filter(this, callbackfn, arguments[1]);
              },
            }
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.for-each.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var $forEach = __webpack_require__(
            /*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js'
          )(0);
          var STRICT = __webpack_require__(
            /*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js'
          )([].forEach, true);

          $export($export.P + $export.F * !STRICT, 'Array', {
            // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
            forEach: function forEach(callbackfn /* , thisArg */) {
              return $forEach(this, callbackfn, arguments[1]);
            },
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.index-of.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var $indexOf = __webpack_require__(
            /*! ./_array-includes */ './node_modules/core-js/modules/_array-includes.js'
          )(false);
          var $native = [].indexOf;
          var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

          $export(
            $export.P +
              $export.F *
                (NEGATIVE_ZERO ||
                  !__webpack_require__(
                    /*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js'
                  )($native)),
            'Array',
            {
              // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
              indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
                return NEGATIVE_ZERO
                  ? // convert -0 to +0
                    $native.apply(this, arguments) || 0
                  : $indexOf(this, searchElement, arguments[1]);
              },
            }
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.is-array.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.is-array.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );

          $export($export.S, 'Array', {
            isArray: __webpack_require__(
              /*! ./_is-array */ './node_modules/core-js/modules/_is-array.js'
            ),
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.iterator.js':
        /*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var addToUnscopables = __webpack_require__(
            /*! ./_add-to-unscopables */ './node_modules/core-js/modules/_add-to-unscopables.js'
          );
          var step = __webpack_require__(
            /*! ./_iter-step */ './node_modules/core-js/modules/_iter-step.js'
          );
          var Iterators = __webpack_require__(
            /*! ./_iterators */ './node_modules/core-js/modules/_iterators.js'
          );
          var toIObject = __webpack_require__(
            /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
          );

          // 22.1.3.4 Array.prototype.entries()
          // 22.1.3.13 Array.prototype.keys()
          // 22.1.3.29 Array.prototype.values()
          // 22.1.3.30 Array.prototype[@@iterator]()
          module.exports = __webpack_require__(
            /*! ./_iter-define */ './node_modules/core-js/modules/_iter-define.js'
          )(
            Array,
            'Array',
            function(iterated, kind) {
              this._t = toIObject(iterated); // target
              this._i = 0; // next index
              this._k = kind; // kind
              // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            },
            function() {
              var O = this._t;
              var kind = this._k;
              var index = this._i++;
              if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
              }
              if (kind == 'keys') return step(0, index);
              if (kind == 'values') return step(0, O[index]);
              return step(0, [index, O[index]]);
            },
            'values'
          );

          // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
          Iterators.Arguments = Iterators.Array;

          addToUnscopables('keys');
          addToUnscopables('values');
          addToUnscopables('entries');

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.map.js':
        /*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.map.js ***!
  \*******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var $map = __webpack_require__(
            /*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js'
          )(1);

          $export(
            $export.P +
              $export.F *
                !__webpack_require__(
                  /*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js'
                )([].map, true),
            'Array',
            {
              // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
              map: function map(callbackfn /* , thisArg */) {
                return $map(this, callbackfn, arguments[1]);
              },
            }
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.some.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.some.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var $some = __webpack_require__(
            /*! ./_array-methods */ './node_modules/core-js/modules/_array-methods.js'
          )(3);

          $export(
            $export.P +
              $export.F *
                !__webpack_require__(
                  /*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js'
                )([].some, true),
            'Array',
            {
              // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
              some: function some(callbackfn /* , thisArg */) {
                return $some(this, callbackfn, arguments[1]);
              },
            }
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.array.sort.js':
        /*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.sort.js ***!
  \********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var aFunction = __webpack_require__(
            /*! ./_a-function */ './node_modules/core-js/modules/_a-function.js'
          );
          var toObject = __webpack_require__(
            /*! ./_to-object */ './node_modules/core-js/modules/_to-object.js'
          );
          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          var $sort = [].sort;
          var test = [1, 2, 3];

          $export(
            $export.P +
              $export.F *
                (fails(function() {
                  // IE8-
                  test.sort(undefined);
                }) ||
                  !fails(function() {
                    // V8 bug
                    test.sort(null);
                    // Old WebKit
                  }) ||
                  !__webpack_require__(
                    /*! ./_strict-method */ './node_modules/core-js/modules/_strict-method.js'
                  )($sort)),
            'Array',
            {
              // 22.1.3.25 Array.prototype.sort(comparefn)
              sort: function sort(comparefn) {
                return comparefn === undefined
                  ? $sort.call(toObject(this))
                  : $sort.call(toObject(this), aFunction(comparefn));
              },
            }
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.date.now.js':
        /*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es6.date.now.js ***!
  \******************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 20.3.3.1 / 15.9.4.4 Date.now()
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );

          $export($export.S, 'Date', {
            now: function() {
              return new Date().getTime();
            },
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.number.constructor.js':
        /*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.constructor.js ***!
  \****************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var cof = __webpack_require__(
            /*! ./_cof */ './node_modules/core-js/modules/_cof.js'
          );
          var inheritIfRequired = __webpack_require__(
            /*! ./_inherit-if-required */ './node_modules/core-js/modules/_inherit-if-required.js'
          );
          var toPrimitive = __webpack_require__(
            /*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js'
          );
          var fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          var gOPN = __webpack_require__(
            /*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js'
          ).f;
          var gOPD = __webpack_require__(
            /*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js'
          ).f;
          var dP = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          ).f;
          var $trim = __webpack_require__(
            /*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js'
          ).trim;
          var NUMBER = 'Number';
          var $Number = global[NUMBER];
          var Base = $Number;
          var proto = $Number.prototype;
          // Opera ~12 has broken Object#toString
          var BROKEN_COF =
            cof(
              __webpack_require__(
                /*! ./_object-create */ './node_modules/core-js/modules/_object-create.js'
              )(proto)
            ) == NUMBER;
          var TRIM = 'trim' in String.prototype;

          // 7.1.3 ToNumber(argument)
          var toNumber = function(argument) {
            var it = toPrimitive(argument, false);
            if (typeof it == 'string' && it.length > 2) {
              it = TRIM ? it.trim() : $trim(it, 3);
              var first = it.charCodeAt(0);
              var third, radix, maxCode;
              if (first === 43 || first === 45) {
                third = it.charCodeAt(2);
                if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
              } else if (first === 48) {
                switch (it.charCodeAt(1)) {
                  case 66:
                  case 98:
                    radix = 2;
                    maxCode = 49;
                    break; // fast equal /^0b[01]+$/i
                  case 79:
                  case 111:
                    radix = 8;
                    maxCode = 55;
                    break; // fast equal /^0o[0-7]+$/i
                  default:
                    return +it;
                }
                for (
                  var digits = it.slice(2), i = 0, l = digits.length, code;
                  i < l;
                  i++
                ) {
                  code = digits.charCodeAt(i);
                  // parseInt parses a string to a first unavailable symbol
                  // but ToNumber should return NaN if a string contains unavailable symbols
                  if (code < 48 || code > maxCode) return NaN;
                }
                return parseInt(digits, radix);
              }
            }
            return +it;
          };

          if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
            $Number = function Number(value) {
              var it = arguments.length < 1 ? 0 : value;
              var that = this;
              return that instanceof $Number &&
                // check on 1..constructor(foo) case
                (BROKEN_COF
                  ? fails(function() {
                      proto.valueOf.call(that);
                    })
                  : cof(that) != NUMBER)
                ? inheritIfRequired(new Base(toNumber(it)), that, $Number)
                : toNumber(it);
            };
            for (
              var keys = __webpack_require__(
                  /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
                )
                  ? gOPN(Base)
                  : // ES3:
                    (
                      'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                      // ES6 (in case, if modules with ES6 Number statics required before):
                      'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                      'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                    ).split(','),
                j = 0,
                key;
              keys.length > j;
              j++
            ) {
              if (has(Base, (key = keys[j])) && !has($Number, key)) {
                dP($Number, key, gOPD(Base, key));
              }
            }
            $Number.prototype = proto;
            proto.constructor = $Number;
            __webpack_require__(
              /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
            )(global, NUMBER, $Number);
          }

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.number.is-nan.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 20.1.2.4 Number.isNaN(number)
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );

          $export($export.S, 'Number', {
            isNaN: function isNaN(number) {
              // eslint-disable-next-line no-self-compare
              return number != number;
            },
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.object.create.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.create.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
          $export($export.S, 'Object', {
            create: __webpack_require__(
              /*! ./_object-create */ './node_modules/core-js/modules/_object-create.js'
            ),
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.object.define-property.js':
        /*!********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.define-property.js ***!
  \********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
          $export(
            $export.S +
              $export.F *
                !__webpack_require__(
                  /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
                ),
            'Object',
            {
              defineProperty: __webpack_require__(
                /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
              ).f,
            }
          );

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.object.keys.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.keys.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 19.1.2.14 Object.keys(O)
          var toObject = __webpack_require__(
            /*! ./_to-object */ './node_modules/core-js/modules/_to-object.js'
          );
          var $keys = __webpack_require__(
            /*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js'
          );

          __webpack_require__(
            /*! ./_object-sap */ './node_modules/core-js/modules/_object-sap.js'
          )('keys', function() {
            return function keys(it) {
              return $keys(toObject(it));
            };
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.object.set-prototype-of.js':
        /*!*********************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.set-prototype-of.js ***!
  \*********************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // 19.1.3.19 Object.setPrototypeOf(O, proto)
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          $export($export.S, 'Object', {
            setPrototypeOf: __webpack_require__(
              /*! ./_set-proto */ './node_modules/core-js/modules/_set-proto.js'
            ).set,
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.regexp.split.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.split.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          // @@split logic
          __webpack_require__(
            /*! ./_fix-re-wks */ './node_modules/core-js/modules/_fix-re-wks.js'
          )('split', 2, function(defined, SPLIT, $split) {
            'use strict';
            var isRegExp = __webpack_require__(
              /*! ./_is-regexp */ './node_modules/core-js/modules/_is-regexp.js'
            );
            var _split = $split;
            var $push = [].push;
            var $SPLIT = 'split';
            var LENGTH = 'length';
            var LAST_INDEX = 'lastIndex';
            if (
              'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
              'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
              'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
              '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
              '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
              ''[$SPLIT](/.?/)[LENGTH]
            ) {
              var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
              // based on es5-shim implementation, need to rework it
              $split = function(separator, limit) {
                var string = String(this);
                if (separator === undefined && limit === 0) return [];
                // If `separator` is not a regex, use native split
                if (!isRegExp(separator))
                  return _split.call(string, separator, limit);
                var output = [];
                var flags =
                  (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
                var lastLastIndex = 0;
                var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
                // Make `global` and avoid `lastIndex` issues by working with a copy
                var separatorCopy = new RegExp(separator.source, flags + 'g');
                var separator2, match, lastIndex, lastLength, i;
                // Doesn't need flags gy, but they don't hurt
                if (!NPCG)
                  separator2 = new RegExp(
                    '^' + separatorCopy.source + '$(?!\\s)',
                    flags
                  );
                while ((match = separatorCopy.exec(string))) {
                  // `separatorCopy.lastIndex` is not reliable cross-browser
                  lastIndex = match.index + match[0][LENGTH];
                  if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
                    // eslint-disable-next-line no-loop-func
                    if (!NPCG && match[LENGTH] > 1)
                      match[0].replace(separator2, function() {
                        for (i = 1; i < arguments[LENGTH] - 2; i++)
                          if (arguments[i] === undefined) match[i] = undefined;
                      });
                    if (match[LENGTH] > 1 && match.index < string[LENGTH])
                      $push.apply(output, match.slice(1));
                    lastLength = match[0][LENGTH];
                    lastLastIndex = lastIndex;
                    if (output[LENGTH] >= splitLimit) break;
                  }
                  if (separatorCopy[LAST_INDEX] === match.index)
                    separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                }
                if (lastLastIndex === string[LENGTH]) {
                  if (lastLength || !separatorCopy.test('')) output.push('');
                } else output.push(string.slice(lastLastIndex));
                return output[LENGTH] > splitLimit
                  ? output.slice(0, splitLimit)
                  : output;
              };
              // Chakra, V8
            } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
              $split = function(separator, limit) {
                return separator === undefined && limit === 0
                  ? []
                  : _split.call(this, separator, limit);
              };
            }
            // 21.1.3.17 String.prototype.split(separator, limit)
            return [
              function split(separator, limit) {
                var O = defined(this);
                var fn = separator == undefined ? undefined : separator[SPLIT];
                return fn !== undefined
                  ? fn.call(separator, O, limit)
                  : $split.call(String(O), separator, limit);
              },
              $split,
            ];
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.string.anchor.js':
        /*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.anchor.js ***!
  \***********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          // B.2.3.2 String.prototype.anchor(name)
          __webpack_require__(
            /*! ./_string-html */ './node_modules/core-js/modules/_string-html.js'
          )('anchor', function(createHTML) {
            return function anchor(name) {
              return createHTML(this, 'a', 'name', name);
            };
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.string.trim.js':
        /*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.trim.js ***!
  \*********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          // 21.1.3.25 String.prototype.trim()
          __webpack_require__(
            /*! ./_string-trim */ './node_modules/core-js/modules/_string-trim.js'
          )('trim', function($trim) {
            return function trim() {
              return $trim(this, 3);
            };
          });

          /***/
        },

      /***/ './node_modules/core-js/modules/es6.symbol.js':
        /*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.symbol.js ***!
  \****************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          'use strict';

          // ECMAScript 6 symbols shim
          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var has = __webpack_require__(
            /*! ./_has */ './node_modules/core-js/modules/_has.js'
          );
          var DESCRIPTORS = __webpack_require__(
            /*! ./_descriptors */ './node_modules/core-js/modules/_descriptors.js'
          );
          var $export = __webpack_require__(
            /*! ./_export */ './node_modules/core-js/modules/_export.js'
          );
          var redefine = __webpack_require__(
            /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
          );
          var META = __webpack_require__(
            /*! ./_meta */ './node_modules/core-js/modules/_meta.js'
          ).KEY;
          var $fails = __webpack_require__(
            /*! ./_fails */ './node_modules/core-js/modules/_fails.js'
          );
          var shared = __webpack_require__(
            /*! ./_shared */ './node_modules/core-js/modules/_shared.js'
          );
          var setToStringTag = __webpack_require__(
            /*! ./_set-to-string-tag */ './node_modules/core-js/modules/_set-to-string-tag.js'
          );
          var uid = __webpack_require__(
            /*! ./_uid */ './node_modules/core-js/modules/_uid.js'
          );
          var wks = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          );
          var wksExt = __webpack_require__(
            /*! ./_wks-ext */ './node_modules/core-js/modules/_wks-ext.js'
          );
          var wksDefine = __webpack_require__(
            /*! ./_wks-define */ './node_modules/core-js/modules/_wks-define.js'
          );
          var enumKeys = __webpack_require__(
            /*! ./_enum-keys */ './node_modules/core-js/modules/_enum-keys.js'
          );
          var isArray = __webpack_require__(
            /*! ./_is-array */ './node_modules/core-js/modules/_is-array.js'
          );
          var anObject = __webpack_require__(
            /*! ./_an-object */ './node_modules/core-js/modules/_an-object.js'
          );
          var isObject = __webpack_require__(
            /*! ./_is-object */ './node_modules/core-js/modules/_is-object.js'
          );
          var toIObject = __webpack_require__(
            /*! ./_to-iobject */ './node_modules/core-js/modules/_to-iobject.js'
          );
          var toPrimitive = __webpack_require__(
            /*! ./_to-primitive */ './node_modules/core-js/modules/_to-primitive.js'
          );
          var createDesc = __webpack_require__(
            /*! ./_property-desc */ './node_modules/core-js/modules/_property-desc.js'
          );
          var _create = __webpack_require__(
            /*! ./_object-create */ './node_modules/core-js/modules/_object-create.js'
          );
          var gOPNExt = __webpack_require__(
            /*! ./_object-gopn-ext */ './node_modules/core-js/modules/_object-gopn-ext.js'
          );
          var $GOPD = __webpack_require__(
            /*! ./_object-gopd */ './node_modules/core-js/modules/_object-gopd.js'
          );
          var $DP = __webpack_require__(
            /*! ./_object-dp */ './node_modules/core-js/modules/_object-dp.js'
          );
          var $keys = __webpack_require__(
            /*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js'
          );
          var gOPD = $GOPD.f;
          var dP = $DP.f;
          var gOPN = gOPNExt.f;
          var $Symbol = global.Symbol;
          var $JSON = global.JSON;
          var _stringify = $JSON && $JSON.stringify;
          var PROTOTYPE = 'prototype';
          var HIDDEN = wks('_hidden');
          var TO_PRIMITIVE = wks('toPrimitive');
          var isEnum = {}.propertyIsEnumerable;
          var SymbolRegistry = shared('symbol-registry');
          var AllSymbols = shared('symbols');
          var OPSymbols = shared('op-symbols');
          var ObjectProto = Object[PROTOTYPE];
          var USE_NATIVE = typeof $Symbol == 'function';
          var QObject = global.QObject;
          // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
          var setter =
            !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

          // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
          var setSymbolDesc =
            DESCRIPTORS &&
            $fails(function() {
              return (
                _create(
                  dP({}, 'a', {
                    get: function() {
                      return dP(this, 'a', { value: 7 }).a;
                    },
                  })
                ).a != 7
              );
            })
              ? function(it, key, D) {
                  var protoDesc = gOPD(ObjectProto, key);
                  if (protoDesc) delete ObjectProto[key];
                  dP(it, key, D);
                  if (protoDesc && it !== ObjectProto)
                    dP(ObjectProto, key, protoDesc);
                }
              : dP;

          var wrap = function(tag) {
            var sym = (AllSymbols[tag] = _create($Symbol[PROTOTYPE]));
            sym._k = tag;
            return sym;
          };

          var isSymbol =
            USE_NATIVE && typeof $Symbol.iterator == 'symbol'
              ? function(it) {
                  return typeof it == 'symbol';
                }
              : function(it) {
                  return it instanceof $Symbol;
                };

          var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
              if (!D.enumerable) {
                if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                it[HIDDEN][key] = true;
              } else {
                if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                D = _create(D, { enumerable: createDesc(0, false) });
              }
              return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
          };
          var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys((P = toIObject(P)));
            var i = 0;
            var l = keys.length;
            var key;
            while (l > i) $defineProperty(it, (key = keys[i++]), P[key]);
            return it;
          };
          var $create = function create(it, P) {
            return P === undefined
              ? _create(it)
              : $defineProperties(_create(it), P);
          };
          var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, (key = toPrimitive(key, true)));
            if (
              this === ObjectProto &&
              has(AllSymbols, key) &&
              !has(OPSymbols, key)
            )
              return false;
            return E ||
              !has(this, key) ||
              !has(AllSymbols, key) ||
              (has(this, HIDDEN) && this[HIDDEN][key])
              ? E
              : true;
          };
          var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(
            it,
            key
          ) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (
              it === ObjectProto &&
              has(AllSymbols, key) &&
              !has(OPSymbols, key)
            )
              return;
            var D = gOPD(it, key);
            if (
              D &&
              has(AllSymbols, key) &&
              !(has(it, HIDDEN) && it[HIDDEN][key])
            )
              D.enumerable = true;
            return D;
          };
          var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
              if (
                !has(AllSymbols, (key = names[i++])) &&
                key != HIDDEN &&
                key != META
              )
                result.push(key);
            }
            return result;
          };
          var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto;
            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
              if (
                has(AllSymbols, (key = names[i++])) &&
                (IS_OP ? has(ObjectProto, key) : true)
              )
                result.push(AllSymbols[key]);
            }
            return result;
          };

          // 19.4.1.1 Symbol([description])
          if (!USE_NATIVE) {
            $Symbol = function Symbol() {
              if (this instanceof $Symbol)
                throw TypeError('Symbol is not a constructor!');
              var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
              var $set = function(value) {
                if (this === ObjectProto) $set.call(OPSymbols, value);
                if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                  this[HIDDEN][tag] = false;
                setSymbolDesc(this, tag, createDesc(1, value));
              };
              if (DESCRIPTORS && setter)
                setSymbolDesc(ObjectProto, tag, {
                  configurable: true,
                  set: $set,
                });
              return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
              return this._k;
            });

            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__(
              /*! ./_object-gopn */ './node_modules/core-js/modules/_object-gopn.js'
            ).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__(
              /*! ./_object-pie */ './node_modules/core-js/modules/_object-pie.js'
            ).f = $propertyIsEnumerable;
            __webpack_require__(
              /*! ./_object-gops */ './node_modules/core-js/modules/_object-gops.js'
            ).f = $getOwnPropertySymbols;

            if (
              DESCRIPTORS &&
              !__webpack_require__(
                /*! ./_library */ './node_modules/core-js/modules/_library.js'
              )
            ) {
              redefine(
                ObjectProto,
                'propertyIsEnumerable',
                $propertyIsEnumerable,
                true
              );
            }

            wksExt.f = function(name) {
              return wrap(wks(name));
            };
          }

          $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol,
          });

          for (
            var es6Symbols = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                ','
              ),
              j = 0;
            es6Symbols.length > j;

          )
            wks(es6Symbols[j++]);

          for (
            var wellKnownSymbols = $keys(wks.store), k = 0;
            wellKnownSymbols.length > k;

          )
            wksDefine(wellKnownSymbols[k++]);

          $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
            // 19.4.2.1 Symbol.for(key)
            for: function(key) {
              return has(SymbolRegistry, (key += ''))
                ? SymbolRegistry[key]
                : (SymbolRegistry[key] = $Symbol(key));
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(sym) {
              if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
              for (var key in SymbolRegistry)
                if (SymbolRegistry[key] === sym) return key;
            },
            useSetter: function() {
              setter = true;
            },
            useSimple: function() {
              setter = false;
            },
          });

          $export($export.S + $export.F * !USE_NATIVE, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols,
          });

          // 24.3.2 JSON.stringify(value [, replacer [, space]])
          $JSON &&
            $export(
              $export.S +
                $export.F *
                  (!USE_NATIVE ||
                    $fails(function() {
                      var S = $Symbol();
                      // MS Edge converts symbol values to JSON as {}
                      // WebKit converts symbol values to JSON as null
                      // V8 throws on boxed symbols
                      return (
                        _stringify([S]) != '[null]' ||
                        _stringify({ a: S }) != '{}' ||
                        _stringify(Object(S)) != '{}'
                      );
                    })),
              'JSON',
              {
                stringify: function stringify(it) {
                  var args = [it];
                  var i = 1;
                  var replacer, $replacer;
                  while (arguments.length > i) args.push(arguments[i++]);
                  $replacer = replacer = args[1];
                  if ((!isObject(replacer) && it === undefined) || isSymbol(it))
                    return; // IE8 returns string on undefined
                  if (!isArray(replacer))
                    replacer = function(key, value) {
                      if (typeof $replacer == 'function')
                        value = $replacer.call(this, key, value);
                      if (!isSymbol(value)) return value;
                    };
                  args[1] = replacer;
                  return _stringify.apply($JSON, args);
                },
              }
            );

          // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
          $Symbol[PROTOTYPE][TO_PRIMITIVE] ||
            __webpack_require__(
              /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
            )($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
          // 19.4.3.5 Symbol.prototype[@@toStringTag]
          setToStringTag($Symbol, 'Symbol');
          // 20.2.1.9 Math[@@toStringTag]
          setToStringTag(Math, 'Math', true);
          // 24.3.3 JSON[@@toStringTag]
          setToStringTag(global.JSON, 'JSON', true);

          /***/
        },

      /***/ './node_modules/core-js/modules/es7.symbol.async-iterator.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.symbol.async-iterator.js ***!
  \*******************************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          __webpack_require__(
            /*! ./_wks-define */ './node_modules/core-js/modules/_wks-define.js'
          )('asyncIterator');

          /***/
        },

      /***/ './node_modules/core-js/modules/web.dom.iterable.js':
        /*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
        /*! no static exports found */
        /***/ function(module, exports, __webpack_require__) {
          var $iterators = __webpack_require__(
            /*! ./es6.array.iterator */ './node_modules/core-js/modules/es6.array.iterator.js'
          );
          var getKeys = __webpack_require__(
            /*! ./_object-keys */ './node_modules/core-js/modules/_object-keys.js'
          );
          var redefine = __webpack_require__(
            /*! ./_redefine */ './node_modules/core-js/modules/_redefine.js'
          );
          var global = __webpack_require__(
            /*! ./_global */ './node_modules/core-js/modules/_global.js'
          );
          var hide = __webpack_require__(
            /*! ./_hide */ './node_modules/core-js/modules/_hide.js'
          );
          var Iterators = __webpack_require__(
            /*! ./_iterators */ './node_modules/core-js/modules/_iterators.js'
          );
          var wks = __webpack_require__(
            /*! ./_wks */ './node_modules/core-js/modules/_wks.js'
          );
          var ITERATOR = wks('iterator');
          var TO_STRING_TAG = wks('toStringTag');
          var ArrayValues = Iterators.Array;

          var DOMIterables = {
            CSSRuleList: true, // TODO: Not spec compliant, should be false.
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true, // TODO: Not spec compliant, should be false.
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true, // TODO: Not spec compliant, should be false.
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false,
          };

          for (
            var collections = getKeys(DOMIterables), i = 0;
            i < collections.length;
            i++
          ) {
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
              if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
              if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
              Iterators[NAME] = ArrayValues;
              if (explicit)
                for (key in $iterators)
                  if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
          }

          /***/
        },

      /******/
    }
  );
});
//# sourceMappingURL=map/perfect.js.map
