// js 累加算法性能对比测试
const n = 10**6;

(() => {
  console.time(`for`);
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
    if (i === n) {
      console.log(`ok`, result);
    }
  }
  console.timeEnd(`for`);
})();

(() => {
  console.time(`math`);
  const result = (n * (n + 1)) / 2;
  console.log(`ok`, result);
  console.timeEnd(`math`);
})();
