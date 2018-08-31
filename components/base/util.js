// 提供工具类方法

const MAX_UUID = 1000000;

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
  const styles = element.ownerDocument.defaultView.getComputedStyle(
    element,
    null
  );
  if (property) {
    const cssValue = styles.getPropertyValue(property) || styles[property];
    if (extra) {
      const num = parseFloat(cssValue);
      return extra === true || isFinite(num) ? num || 0 : cssValue;
    }
    return cssValue;
  }
  return styles;
}

function getOffsetParent(elem) {
  /* eslint-disable prefer-destructuring */
  let offsetParent = elem.offsetParent;

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
export function getUuid(prefix) {
  let _prefix = prefix;
  do {
    // eslint-disable-next-line no-bitwise
    _prefix += ~~(Math.random() * MAX_UUID); // "~~" acts like a faster Math.floor() here
  } while (document.getElementById(_prefix));

  return _prefix;
}

// 根据浏览器设置其鼠标滑轮事件
export const isWheel = (() => {
  /*
   * compatibility: mouse wheel event
   * http://www.w3help.org/zh-cn/causes/SD9015
   */
  const ua = navigator.userAgent;
  // ie 11 /gecko/i.test(ua) value is true ,so need to judge /firefox/i.test(ua)
  if (/gecko/i.test(ua) && !/webkit/i.test(ua) && /firefox/i.test(ua)) {
    // Firefox
    return false;
  }
  // IE Safari Chrome Opera
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
export function offset(el) {
  if (!el) {
    return;
  }

  let docElem, win, doc;

  /*
   * Support: IE <=11 only
   * Running getBoundingClientRect on a
   * disconnected node in IE throws an error
   */
  if (!el.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  const rect = el.getBoundingClientRect();

  // Make sure element is not hidden (display: none)
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
export function position(elem) {
  if (!elem) {
    return null;
  }

  let offsetParent,
    offsetXY,
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
    left:
      offsetXY.left - parentOffset.left - getStyles(elem, 'marginLeft', true),
  };
}

const util = {
  getUuid,
  isWheel,
  offset,
  position,
};

export default util;
