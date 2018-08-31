/** @type {string|undefined} */
let storedTransformPropertyName;

/**
 * Returns the name of the correct transform property to use on the current browser.
 * 返回 transform 兼容性写法
 * @param {!Window} globalObj
 * @param {boolean=} forceRefresh
 * @return {string}
 */
function getTransformPropertyName(globalObj, forceRefresh = false) {
  if (storedTransformPropertyName === undefined || forceRefresh) {
    const el = globalObj.document.createElement('div');
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
function clamp(value, min = 0, max = 1) {
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
  return getBezierCoordinate(solvePositionFromXValue(time, x1, x2), y1, y2);
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
  }

  // Step one - from 4 points to 3
  let ic0 = t * c1;
  let ic1 = c1 + t * (c2 - c1);
  const ic2 = c2 + t * (1 - c2);

  // Step two - from 3 points to 2
  ic0 += t * (ic1 - ic0);
  ic1 += t * (ic2 - ic1);

  // Final step - last point
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
  const epsilon = 1e-6;
  const maxIterations = 8; // 迭代次数

  if (xVal <= 0) {
    return 0;
  } else if (xVal >= 1) {
    return 1;
  }

  // Initial estimate of t using linear interpolation.
  let t = xVal;

  // Try gradient descent to solve for t. If it works, it is very fast.
  let tMin = 0;
  let tMax = 1;
  let value = 0;
  for (let i = 0; i < maxIterations; i++) {
    value = getBezierCoordinate(t, x1, x2);
    const derivative =
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
  for (let i = 0; Math.abs(value - xVal) > epsilon && i < maxIterations; i++) {
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
}

// 返回当前元素在父元素中的索引 index，是否过滤掉分隔符 list-divider，默认过滤
function getElementIndexOfParent(element, filter) {
  const parentNode = element.parentNode;
  const children = parentNode.children;
  let index = 0;
  for (let i = 0, len = children.length; i < len; i++) {
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

export {
  getTransformPropertyName,
  clamp,
  bezierProgress,
  getElementIndexOfParent,
};
