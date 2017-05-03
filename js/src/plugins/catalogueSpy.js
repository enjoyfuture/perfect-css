import perfect from '../perfect';
import util from '../util';
const {isWheel} = util;

const CatalogueSpy = ((perfect) => {
  const doc = document;

  class CatalogueSpy {
    static defaultConfig = {

    };

    constructor(scrollSpy, config = {}) {
      this.scrollSpy = scrollSpy;
      this.config = {...CatalogueSpy.defaultConfig, ...config};

      // 滑动步长
      this.step = 20;
      // 设置菜单高度，动态取浏览器窗口高度 fixme
      this.menuHeight = 300;

      const menuPanel = doc.querySelector(scrollSpy.menuPanel);
      menuPanel.style.transform = 'translateY(0)';
      menuPanel.style.height = `${this.menuHeight}px`;
      this.menuPanel = menuPanel;
    }

    mount() {
      // fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
      // http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
      this.menuPanel.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleScroll(true), false);
    }

    handleScroll = (prevent) => {
      return (event) => {
        const {scrollHeight} = this.menuPanel;
        this.maxOffset = scrollHeight - this.menuHeight; // 最大滚动的高度

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

        const {transform} = this.menuPanel.style;
        const reg = /translateY\(([-\w]+)\)/;

        let y = reg.exec(transform);
        y = y ? parseFloat(y[1], 10) : 0;

        if ((upDown === 'up' && y === 0) || (upDown === 'down' && Math.abs(y) === this.maxOffset)) {
          return;
        }

        if (prevent) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (upDown === 'up' && y < 0) {
          this.menuPanel.style.transform = `translateY(${Math.min(y + this.step, 0)}px)`;
        } else if (upDown === 'down' && Math.abs(y) < this.maxOffset) {
          this.menuPanel.style.transform = `translateY(${Math.max(y - this.step, -this.maxOffset)}px)`;
        }
      };
    };

    unmount() {
      console.info('待补充');
    }

  }

  perfect.CatalogueSpy = CatalogueSpy;
  return CatalogueSpy;
})(perfect);

export default CatalogueSpy;
