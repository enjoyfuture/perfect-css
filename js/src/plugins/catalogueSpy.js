import perfect from '../perfect';
import util from '../util';
const {isWheel} = util;

const CatalogueSpy = ((perfect) => {
  const doc = document;
  const reg = /translateY\(([-\w]+)\)/;

  class CatalogueSpy {
    static defaultConfig = {
      menuHeight: null, // 设置菜单高度，如果不设置，则取当前浏览器可视高度
      step: 10, // 滚动鼠标，菜单滑动步长
    };

    constructor(scrollSpy, config = {}) {
      this.scrollSpy = scrollSpy;
      this.config = {...CatalogueSpy.defaultConfig, ...config};

      let {menuHeight} = this.config;
      if (!menuHeight) {
        menuHeight = 400; // todo ，取浏览器可视化高度，待实现
        this.config.menuHeight = menuHeight;
      }

      const {$menuPanel} = scrollSpy;
      $menuPanel.style.transform = 'translateY(0)';
      $menuPanel.style.height = `${menuHeight}px`;
      this.$menuPanel = $menuPanel;
    }

    mount() {
      // fixme 待改进，改成 scrollSpy 触发该事件，参考 web-guide 项目
      // http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/
      this.$menuPanel.addEventListener(isWheel ? 'mousewheel' : 'DOMMouseScroll', this.handleScroll(true), false);
    }

    handleScroll = (prevent) => {
      return (event) => {
        const {scrollHeight} = this.$menuPanel;
        const {menuHeight, step} = this.config;
        this.maxOffset = scrollHeight - menuHeight; // 最大滚动的高度

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

        if (prevent) {
          event.preventDefault();
          event.stopPropagation();
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
      const {menuHeight, step} = this.config;
      const {$menuPanel} = this;
      const {scrollHeight} = $menuPanel;
      const maxOffset = scrollHeight - menuHeight; // 最大滚动的高度

      // 如果当前菜单项隐藏，则向上拉
      const menuRect = $menuPanel.parentElement.getBoundingClientRect();
      const currentTarget = doc.querySelectorAll(lastSelector.join(','));
      currentTarget.forEach((el) => {
        let rect = el.getBoundingClientRect();
        while (rect.top < menuRect.top || rect.bottom > menuRect.bottom) { // 向上移动
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
    };

    unmount() {
      console.info('待补充');
    }

  }

  perfect.CatalogueSpy = CatalogueSpy;
  return CatalogueSpy;
})(perfect);

export default CatalogueSpy;
