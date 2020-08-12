
import * as app from "./index";

if (module.hot) {
  module.hot.accept('./index.js', function() {
    console.log('✅🔥🚀 在 APP 的入口统一控制 HMR');
    // app();
  })
}
