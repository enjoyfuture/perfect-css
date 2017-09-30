import perfect from '../perfect';
import util from '../util';

const {isWheel} = util;

const win = window;
const doc = document;
const resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';

const reg = /translateY\(([-\w]+)\)/;

class _CatalogueSpy {
  static defaultConfig = {
    menuHeight: null, // 设置菜单高度，如果不设置，则取当前浏览器可视高度
    step: 30, // 滚动鼠标，菜单滑动步长
  };

  constructor(scrollSpy, config = {}) {
    this.scrollSpy = scrollSpy;
    this.config = {..._CatalogueSpy.defaultConfig, ...config};

    let {menuHeight} = this.config;
    if (!menuHeight) {
      menuHeight = document.documentElement.clientHeight - 64;
      this.config.menuHeight = menuHeight;
    }

    const {$menuPanel} = scrollSpy;
    $menuPanel.style.transform = 'translateY(0)';
    $menuPanel.style.maxHeight = `${menuHeight}px`;
    this.$menuPanel = $menuPanel;

    win.addEventListener(resizeEvt, this.adjustMenuHeight, false);
  }

  // 调整菜单最大高度
  adjustMenuHeight = () => {
    const menuHeight = doc.documentElement.clientHeight - 64;
    this.$menuPanel.style.maxHeight = `${menuHeight}px`;
  };

  mount() {
    // fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
    // http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
    this.$menuPanel.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleScroll(true), false);
  }

  handleScroll = (prevent) => {
    return (event) => {
      const {scrollHeight, clientHeight} = this.$menuPanel;
      const {step} = this.config;
      this.maxOffset = scrollHeight - clientHeight; // 最大滚动的高度

      if (prevent && this.maxOffset > 0) {
        event.preventDefault();
        event.stopPropagation();
      }

      // 判断鼠标滑轮向上还是向下滑动
      let upDown;
      const {detail, wheelDelta} = event;
      if (detail) {
        if (detail < 0) { // up
          upDown = 'up';
        } else if (detail > 0) { // down
          upDown = 'down';
        }
      } else if (wheelDelta) { //
        if (wheelDelta > 0) { // up
          upDown = 'up';
        }
        if (wheelDelta < 0) { // down
          upDown = 'down';
        }
      }

      const {transform} = this.$menuPanel.style;

      let y = reg.exec(transform);
      y = y ? parseFloat(y[1], 10) : 0;

      if ((upDown === 'up' && y === 0) || (upDown === 'down' && Math.abs(y) === this.maxOffset)) {
        return;
      }

      if (upDown === 'up' && y < 0) {
        this.$menuPanel.style.transform = `translateY(${Math.min(y + step, 0)}px)`;
      } else if (upDown === 'down' && Math.abs(y) < this.maxOffset) {
        this.$menuPanel.style.transform = `translateY(${Math.max(y - step, -this.maxOffset)}px)`;
      }
    };
  };

  // 当定位到某一个菜单项时，而由于限制了高度，该菜单有可能不在可视范围内
  scrollMenu = (lastSelector) => {
    const {step} = this.config;
    const {$menuPanel} = this;
    const {scrollHeight, clientHeight} = $menuPanel;
    let maxOffset = scrollHeight - clientHeight; // 最大滚动的高度
    if (maxOffset === 0) {
      return;
    }
    maxOffset += 1; // 由于计算偏差，需要微调1个像素
    // 如果当前菜单项隐藏，则向上拉
    // Fixme 注意这里还需计算 $menuPanel.parentElement padding 和 border 的值，待处理
    const menuRect = $menuPanel.parentElement.getBoundingClientRect();
    const currentTarget = doc.querySelectorAll(lastSelector.join(','));
    if (currentTarget) {
      Array.prototype.forEach.call(currentTarget, (el) => {
        let rect = el.getBoundingClientRect();
        while (rect.top > 0 && rect.bottom > 0 && (rect.top < menuRect.top || rect.bottom > menuRect.bottom)) { // 向上移动
          const {transform} = $menuPanel.style;
          let y = reg.exec(transform);
          y = y ? parseFloat(y[1], 10) : 0;
          if (rect.top < menuRect.top) {
            $menuPanel.style.transform = `translateY(${Math.min(y + step, 0)}px)`;
          } else {
            $menuPanel.style.transform = `translateY(${Math.max(y - step, -maxOffset)}px)`;
          }
          rect = el.getBoundingClientRect();
        }
      });
    }
  };

  unmount() {
    console.info('待补充');
    win.removeEventListener(resizeEvt, this.adjustMenuHeight, false);
  }

}

const CatalogueSpy = ((perfect) => {
  perfect.CatalogueSpy = _CatalogueSpy;
  return _CatalogueSpy;
})(perfect);

export default CatalogueSpy;
