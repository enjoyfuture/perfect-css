import perfect from '../perfect';
import util from '../util';
const {isWheel} = util;

const CatalogueSpy = ((perfect) => {
  const doc = document;

  class CatalogueSpy {
    constructor(scrollSpy) {
      this.scrollSpy = scrollSpy;

      // 滑动步长
      this.step = 20;
      // 设置菜单高度，动态取浏览器窗口高度 fixme
      const menuHeight = 400;

      const menuPanel = doc.querySelector(scrollSpy.menuPanel);
      const {clientHeight} = menuPanel;
      this.maxOffset = clientHeight - menuHeight; // 最大滚动的高度

      menuPanel.style.transform = 'translateY(0)';
      menuPanel.style.height = `${menuHeight}px`;
      this.menuPanel = menuPanel;
    }

    mount() {
      // fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
      this.menuPanel.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', (event) => {
        if (this.maxOffset <= 0) { // 当窗口大小改变时，需要重新计算，fixme
          return;
        }
        event.preventDefault();
        event.stopPropagation();

        // 判断鼠标滑轮向上还是向下滑动
        let upDown;
        const {detail, wheelDelta} = event;
        if (detail) {
          if (detail < 0) { // up
            upDown = 'up';
          } else if (detail > 0) { // down
            upDown = 'down';
          }
        } else if (wheelDelta) { // IE 6 7 8
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

        if (upDown === 'up' && y < 0) {
          this.menuPanel.style.transform = `translateY(${Math.min(y + this.step, 0)}px)`;
        } else if (upDown === 'down' && Math.abs(y) < this.maxOffset) {
          this.menuPanel.style.transform = `translateY(${Math.max(y - this.step, -this.maxOffset)}px)`;
        }
      }, false);
    }

    unmount() {
      console.info('待补充');
    }

  }

  perfect.CatalogueSpy = CatalogueSpy;
  return CatalogueSpy;
})(perfect);

export default CatalogueSpy;
