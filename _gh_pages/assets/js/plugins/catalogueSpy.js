(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../perfect', '../util'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../perfect'), require('../util'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.perfect, global.util);
    global.catalogueSpy = mod.exports;
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

  var isWheel = _util2.default.isWheel;


  var CatalogueSpy = function (perfect) {
    var doc = document;
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
          menuHeight = 400; // todo ，取浏览器可视化高度，待实现
          this.config.menuHeight = menuHeight;
        }

        var $menuPanel = scrollSpy.$menuPanel;

        $menuPanel.style.transform = 'translateY(0)';
        $menuPanel.style.maxHeight = menuHeight + 'px';
        this.$menuPanel = $menuPanel;
      }

      _createClass(CatalogueSpy, [{
        key: 'mount',
        value: function mount() {
          // fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
          // http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
          this.$menuPanel.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleScroll(true), false);
        }
      }, {
        key: 'unmount',
        value: function unmount() {
          console.info('待补充');
        }
      }]);

      return CatalogueSpy;
    }();

    CatalogueSpy.defaultConfig = {
      menuHeight: null, // 设置菜单高度，如果不设置，则取当前浏览器可视高度
      step: 10 // 滚动鼠标，菜单滑动步长
    };

    var _initialiseProps = function _initialiseProps() {
      var _this = this;

      this.handleScroll = function (prevent) {
        return function (event) {
          var _$menuPanel = _this.$menuPanel,
              scrollHeight = _$menuPanel.scrollHeight,
              clientHeight = _$menuPanel.clientHeight;
          var step = _this.config.step;

          _this.maxOffset = scrollHeight - clientHeight; // 最大滚动的高度

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

          if (prevent && _this.maxOffset > 0) {
            event.preventDefault();
            event.stopPropagation();
          }

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
        // 如果当前菜单项隐藏，则向上拉
        // Fixme 注意这里还需计算 $menuPanel.parentElement padding 和 border 的值
        // 待处理
        var menuRect = $menuPanel.parentElement.getBoundingClientRect();
        var currentTarget = doc.querySelectorAll(lastSelector.join(','));
        Array.prototype.forEach.call(currentTarget, function (el) {
          var rect = el.getBoundingClientRect();
          while (rect.top < menuRect.top || rect.bottom > menuRect.bottom) {
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
      };
    };

    perfect.CatalogueSpy = CatalogueSpy;
    return CatalogueSpy;
  }(_perfect2.default);

  exports.default = CatalogueSpy;
});
//# sourceMappingURL=catalogueSpy.js.map
