"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-08-01
 * @modified
 *
 * @description
 * @difficulty Easy Medium Hard
 * @complexity O(n)
 * @augments
 * @example
 * @link
 * @solutions
 *
 */

import { SUM as sum } from "./math";
import logs from "./logs";


logs();

const log = console.log;

// log(`Webpack HMR In Action 🚀`)


if (module.hot) {
  module.hot.accept('./math.js', function() {
    console.log('✅🔥🚀 hot module replacement!');
    // sum();
  })
}

// const h1 = document.querySelector(`h1`);
// h1.style.color = "#0f0";

const btn = document.querySelector(`#btn`);
if (btn) {
  btn.addEventListener(`click`, () => {
    try {
      const result = sum(2, 3);
      // log(`sum(2, 3) =`, result)
      log(`result =`, result)
    } catch (e) {
      log(`add error`, e)
    }
  });
}




