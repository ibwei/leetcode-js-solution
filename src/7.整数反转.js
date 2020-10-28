/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
/**
 * @solution 1
 * @rumtime beats 28.77%
 * @memory usage beats 5.22%
 * @description js原生api大法,写法简单,但是效率不行
 */
/* var reverse = function (x) {
  let r = parseInt(`${Math.abs(x)}`.split('').reverse().join(''));
  if (r < Math.pow(-2, 31) || r > Math.pow(2, 31) - 1) {
    r = 0;
  }
  return x > 0 ? r : -r;
}; */
/**
 * @solution 2
 * @rumtime beats 92.74%
 * @memory usage beats 65.22%
 * @description 优化翻转过程
 */
var reverse = function (x) {
  let r = x > 0 ? x : -x
  let stringR = String(r)
  let sum = 0
  for (let i = stringR.length - 1; i > -1; i--) {
    sum += Number(stringR[i]) * Math.pow(10, i)
  }
  if (sum < Math.pow(-2, 31) || sum > Math.pow(2, 31) - 1) {
    sum = 0
  }
  return x > 0 ? sum : -sum
}
// @lc code=end
