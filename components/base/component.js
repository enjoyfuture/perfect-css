/**
 * 组件接口，所有的组件都应该继承该组件
 */
class Component {

  /**
   * 提供静态方法，用来挂载实例化组件
   * 子组件可以覆盖该方法
   * @param element
   * @returns {Component}
   */
  static mount(element) {
    return new Component(element);
  }

  constructor(element, ...config) {
    this.element = element;
    // 设置 config 到 this 上
    for (const key of config) {
      this[key] = config[key];
    }
    this.init();
  }

  init() {
    // 初始化
    // 子组件可以覆盖该方法，具体实现要初始化的内容
  }

  // 卸载组件
  unmount() {
    // 子组件可以盖该方法
  }

  /**
   * 公共方法，添加注册事件
   * @param evtType
   * @param handler
   */
  listen(evtType, handler) {
    this.element.addEventListener(evtType, handler);
  }

  /**
   * 公共方法，卸载已注册的事件
   * @param evtType
   * @param handler
   */
  unlisten(evtType, handler) {
    this.element.removeEventListener(evtType, handler);
  }

  /**
   * 公共方法，创建并分发事件
   * @param evtType 事件名称
   * @param detail 当事件初始化时传递的数据
   * @param bubbles 表明该事件是否会冒泡
   * @param cancelable 表明该事件是否可以被取消
   */
  emit(evtType, detail, bubbles = false, cancelable = false) {
    let evt;
    if (typeof CustomEvent === 'function') {
      evt = new CustomEvent(evtType, {
        detail,
        bubbles,
        cancelable,
      });
    } else {
      evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(evtType, bubbles, cancelable, detail);
    }

    this.element.dispatchEvent(evt);
  }
}

export default Component;
