import Component from '../base/component';
import {
  supportsCssVariables, applyPassive,
  getMatchesProperty, getNormalizedEventCoords,
} from './util';

// 定义常量
const classes = {
  ELEMENT: 'ripple-impact',
  UNBOUNDED: 'ripple-unbounded',
  FOCUSED: 'ripple-impact-focused',
  ACTIVE: 'ripple-impact-active',
  INACTIVE: 'ripple-impact-inactive',
};

const strings = {
  VAR_SIZE: '--ripple-size',
  VAR_LEFT: '--ripple-left',
  VAR_TOP: '--ripple-top',
  VAR_SCALE: '--ripple-scale',
  VAR_TRANSLATE_START: '--ripple-translate-start',
  VAR_TRANSLATE_END: '--ripple-translate-end',
};

const numbers = {
  PADDING: 10, // 波纹 padding
  INITIAL_ORIGIN_SCALE: 0.6, // 初始波纹缩放比例
  DEACTIVATION_TIMEOUT_MS: 225, // 从活动状态到结束持续的时间，看 scss 变量 $ripple-translate-duration
  DEACTIVATION_MS: 150, // 非活动状态到结束持续的时间，看 scss 变量 $ripple-fade-out-duration
};

// 非活动状态和活动状态对应
const DEACTIVATION_ACTIVATION_PAIRS = {
  mouseup: 'mousedown',
  pointerup: 'pointerdown',
  touchend: 'touchstart',
  keyup: 'keydown',
  blur: 'focus',
};

class Ripple extends Component {

  static get classes() {
    return classes;
  }

  static get strings() {
    return strings;
  }

  static get numbers() {
    return numbers;
  }

  /**
   * 静态方法实例化 Ripple 组件
   * @param element
   * @param unbounded
   * @returns {Ripple}
   */
  static mount(element, {unbounded = undefined} = {}) {
    const ripple = new Ripple(element);
    if (unbounded !== undefined) {
      ripple.unbounded = /** @type {boolean} */ unbounded;
    }
    return ripple;
  }

  /**
   * @param {Ripple} instance
   * @return {RippleAdapter}
   */
  static createAdapter(instance) {
    const matches = getMatchesProperty(HTMLElement.prototype);

    // 封装一些适配器方法
    return {
      isSupportsCssVars: () => supportsCssVariables(window),
      isUnbounded: () => instance.unbounded,
      isActive: () => instance.element[matches](':active'),
      isDisabled: () => instance.disabled,
      addClass: (className) => instance.element.classList.add(className),
      removeClass: (className) => instance.element.classList.remove(className),
      registerImpactHandler: (evtType, handler) =>
        instance.element.addEventListener(evtType, handler, applyPassive()),
      deregisterImpactHandler: (evtType, handler) =>
        instance.element.removeEventListener(evtType, handler, applyPassive()),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      updateCssVariable: (varName, value) => instance.element.style.setProperty(varName, value),
      removeCssVariable: (varName) => instance.element.style.removeProperty(varName),
      computeBoundingRect: () => instance.element.getBoundingClientRect(),
      getWindowPageOffset: () => ({x: window.pageXOffset, y: window.pageYOffset}),
    };
  }

  /**
   * 重置 Ripple 活动状态
   * @returns {}
   */
  static resetActivationState() {
    return {
      isActivated: false, // 当前是否为活动状态
      hasDeactivationUXRun: false, // 是否有取消激活运行状态
      wasActivatedByPointer: false, // 是否是通过鼠标或触摸来激活(也可以调用方法激活)
      wasElementMadeActive: false, // 元素是否处于活动状态，即 element.matches(':active') 为 true
      activationStartTime: 0, // 开始时间
      activationEvent: null, // 当前事件对象 event
      isProgrammatic: false, // 是否在当前活动进程中
    };
  }

  constructor(element, config) {
    super(element, config);
    // 用来处理是否设置了 disabled
    /* config.disabled */
    this.disabled = this.disabled || false;

    // 是否是无界限的 Ripple
    this.unbounded = this.unbounded || false;

    // 创建适配器
    this.adapter = Ripple.createAdapter(this);

    // 用来处理 requestAnimationFrame 返回的值
    this.layoutFrame = 0;

    // Ripple Rect size
    this.rippleSize = {width: 0, height: 0};

    // 初始化 Ripple 默认活动状态
    this.activationState = Ripple.resetActivationState();

    // 动画持续的时长
    this.duration = 0;

    // 波纹初始大小
    this.initialSize = 0;

    // 波纹扩散最大的圆弧
    this.maxRadius = 0;

    // 无解限制坐标
    this.unboundedCoords = {
      left: 0,
      top: 0,
    };

    // 缩放比例
    this.scale = 0;

    // activation setTimeout Id
    this.activationTimer = null;

    // deactivation removal setTimeout Id
    this.deactivationRemovalTimer = null;

    // 动画是否结束
    this.activationAnimationHasEnded = false;

    // activation setTimeout 函数
    this.activationTimerCallback = () => {
      this.activationAnimationHasEnded = true;
      this.runDeactivationAnimation();
    };

    // 事件与监听函数名称对应
    this.listenerInfos = [
      {activate: 'touchstart', deactivate: 'touchend'},
      {activate: 'pointerdown', deactivate: 'pointerup'},
      {activate: 'mousedown', deactivate: 'mouseup'},
      {activate: 'keydown', deactivate: 'keyup'},
      {focus: 'focus', blur: 'blur'},
    ];

    // 监听函数 Map
    this.listeners = {
      activate: (e) => this.activate(e),
      deactivate: (e) => this.deactivate(e),
      focus: () => requestAnimationFrame(
        () => this.adapter.addClass(classes.FOCUSED),
      ),
      blur: () => requestAnimationFrame(
        () => this.adapter.removeClass(classes.FOCUSED),
      ),
    };

    this._init();
  }

  // 是否支持 css 变量
  isSupported() {
    return this.adapter.isSupportsCssVars();
  }

  // 初始化组件
  _init() {
    if (!this.isSupported()) {
      return;
    }

    this.addEventListeners();

    const {ELEMENT, UNBOUNDED} = classes;
    requestAnimationFrame(() => {
      this.adapter.addClass(ELEMENT);
      if (this.adapter.isUnbounded()) {
        this.adapter.addClass(UNBOUNDED);
      }
      this.layoutInternal();
    });
  }

  /**
   * 重新布局，重置波纹参数
   * 比如当窗口改变时，调用该方法
   */
  layout() {
    if (this.layoutFrame) {
      cancelAnimationFrame(this.layoutFrame);
    }
    this.layoutFrame = requestAnimationFrame(() => {
      this.layoutInternal();
      this.layoutFrame = 0;
    });
  }

  // 初始化波纹个参数
  layoutInternal() {
    this.rippleRect = this.adapter.computeBoundingRect();
    const {width, height} = this.rippleRect;

    // 元素大小
    const maxDim = Math.max(width, height);
    // 波纹直径
    const diameter = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));

    // 初始波纹大小，取元素大小的 60%
    this.initialSize = maxDim * numbers.INITIAL_ORIGIN_SCALE;

    // 波纹扩散圆弧，直径 + padding
    this.maxRadius = diameter + numbers.PADDING;
    // 计算缩放比例
    this.scale = this.maxRadius / this.initialSize;
    this.duration = 1000 * Math.sqrt(this.maxRadius / 1024);
    this.updateCssVariableValue();
  }

  updateCssVariableValue() {
    const {
      VAR_SIZE, VAR_LEFT, VAR_TOP, VAR_SCALE,
    } = strings;

    this.adapter.updateCssVariable(VAR_SIZE, `${this.initialSize}px`);
    this.adapter.updateCssVariable(VAR_SCALE, this.scale);

    if (this.adapter.isUnbounded()) {
      const {width, height} = this.rippleRect;
      this.unboundedCoords = {
        left: Math.round((width / 2) - (this.initialSize / 2)),
        top: Math.round((height / 2) - (this.initialSize / 2)),
      };

      this.adapter.updateCssVariable(VAR_LEFT, `${this.unboundedCoords.left}px`);
      this.adapter.updateCssVariable(VAR_TOP, `${this.unboundedCoords.top}px`);
    }
  }

  // 设置监听事件
  addEventListeners() {
    this.listenerInfos.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter.registerImpactHandler(info[k], this.listeners[k]);
      });
    });

    // 注册 resize 事件
    this.adapter.registerResizeHandler(this.layout);
  }

  // 删除事件
  removeEventListeners() {
    this.listenerInfos.forEach((info) => {
      Object.keys(info).forEach((k) => {
        this.adapter.deregisterImpactHandler(info[k], this.listeners[k]);
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
  activate(e) {
    if (this.adapter.isDisabled()) {
      return;
    }

    const {activationState} = this;
    if (activationState.isActivated) {
      return;
    }

    activationState.isActivated = true;
    activationState.isProgrammatic = e === null;
    activationState.activationEvent = e;
    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : (
      e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown'
    );
    activationState.activationStartTime = Date.now();

    requestAnimationFrame(() => {
      // 对于 keydown 事件需要判断是否当前为活动状态，即 element.matches(':active')
      // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
      // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
      activationState.wasElementMadeActive = (e && e.type === 'keydown') ? this.adapter.isActive() : true;
      if (activationState.wasElementMadeActive) {
        this.animateActivation();
      } else {
        // 如果元素没有被激活，重置 Ripple 状态
        this.activationState = Ripple.resetActivationState();
      }
    });
  }

  // 处理 Ripple 动画
  animateActivation() {
    const {VAR_TRANSLATE_START, VAR_TRANSLATE_END} = strings;
    const {
      ACTIVE,
      INACTIVE,
    } = classes;
    const {DEACTIVATION_TIMEOUT_MS} = numbers;

    let translateStart = '';
    let translateEnd = '';

    if (!this.adapter.isUnbounded()) {
      const {startPoint, endPoint} = this.getTranslationCoords();
      translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
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
    this.activationTimer = setTimeout(() => this.activationTimerCallback(), DEACTIVATION_TIMEOUT_MS);
  }

  /**
   * 返回Translation 开始和结束坐标
   * @returns {{startPoint: ({x: number, y: number}|*), endPoint: {x: number, y: number}}}
   */
  getTranslationCoords() {
    const {activationState} = this;
    const {activationEvent, wasActivatedByPointer} = activationState;
    const {width, height} = this.rippleRect;

    let startPoint;
    if (wasActivatedByPointer) {
      startPoint = getNormalizedEventCoords(activationEvent,
        this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect(),
      );
    } else {
      startPoint = {
        x: width / 2,
        y: height / 2,
      };
    }
    // Center the element around the start point.
    startPoint = {
      x: startPoint.x - (this.initialSize / 2),
      y: startPoint.y - (this.initialSize / 2),
    };

    const endPoint = {
      x: (width / 2) - (this.initialSize / 2),
      y: (height / 2) - (this.initialSize / 2),
    };

    return {startPoint, endPoint};
  }

  /**
   * 运行 Deactivation 动画
   */
  runDeactivationAnimation() {
    const {INACTIVE} = classes;
    const {hasDeactivationUXRun, isActivated} = this.activationState;
    const activationHasEnded = hasDeactivationUXRun || !isActivated;
    if (activationHasEnded && this.activationAnimationHasEnded) {
      this.rmActivationClasses();
      this.adapter.addClass(INACTIVE);
      this.deactivationRemovalTimer = setTimeout(() => {
        this.adapter.removeClass(INACTIVE);
      }, numbers.DEACTIVATION_MS);
    }
  }

  /**
   * 删除活动状态
   */
  rmActivationClasses() {
    const {ACTIVE} = classes;
    this.adapter.removeClass(ACTIVE);
    this.activationAnimationHasEnded = false;
    this.adapter.computeBoundingRect();
  }

  /**
   * 取消活动状态事件
   * @param e
   * @private
   */
  deactivate(e) {
    const {activationState} = this;
    // 如果当前不是活动状态，则取消
    if (!activationState.isActivated) {
      return;
    }
    // 如果是进行中的取消过程
    if (activationState.isProgrammatic) {
      const evtObject = null;
      const state = {...activationState};
      requestAnimationFrame(() => this.animateDeactivation(evtObject, state));
      this.activationState = Ripple.resetActivationState();
      return;
    }

    const actualActivationType = DEACTIVATION_ACTIVATION_PAIRS[e.type];
    const expectedActivationType = activationState.activationEvent.type;
    // NOTE: Pointer events are tricky - https://patrickhlauke.github.io/touch/tests/results/
    // Essentially, what we need to do here is decouple the deactivation UX from the actual
    // deactivation state itself. This way, touch/pointer events in sequence do not trample one
    // another.
    const needsDeactivationUX = actualActivationType === expectedActivationType;
    let needsActualDeactivation = needsDeactivationUX;
    if (activationState.wasActivatedByPointer) {
      needsActualDeactivation = e.type === 'mouseup';
    }

    const state = {...activationState};
    requestAnimationFrame(() => {
      if (needsDeactivationUX) {
        this.activationState.hasDeactivationUXRun = true;
        this.animateDeactivation(e, state);
      }

      if (needsActualDeactivation) {
        this.activationState = Ripple.resetActivationState();
      }
    });
  }

  /**
   * @param {Event} e
   * @param {!ActivationStateType} options
   * @private
   */
  animateDeactivation(e, {wasActivatedByPointer, wasElementMadeActive}) {
    const {FOCUSED} = classes;
    if (wasActivatedByPointer || wasElementMadeActive) {
      // Remove class left over by element being focused
      this.adapter.removeClass(FOCUSED);
      this.runDeactivationAnimation();
    }
  }
}


export default Ripple;
