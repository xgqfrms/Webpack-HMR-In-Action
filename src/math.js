"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-0
 * @modified
 *
 * @description math.js
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

const log = console.log;

class MathClass {
  constructor(name) {
    this.name = name || math.name;
  }
  // 静态方法
  static sum(a, b) {
    log(`a ** b`, a, b)
    return a ** b;
    // log(`a + b`, a, b)
    // return a + b;
  }
  // 实例方法
  sum(a, b) {
    return a + b;
  }
}

const SUM = MathClass.sum;

export default MathClass;

export {
  SUM,
};
