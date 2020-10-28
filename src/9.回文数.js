/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 * @solution 1
 * @rumtime beats 61.77%
 * @memory usage beats 98.22%
 * @description 转换成字符串,第一个和最后一个比较，以此进行
 */
/* var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  const xString = String(x);
  const len = xString.length;
  for (let i = 0, j = len - 1; i <= j; i++, j--) {
    if (xString.charCodeAt(i) !== xString.charCodeAt(j)) {
      return false;
    }
  }
  return true;
}; */
/**
 * @solution 1
 * @rumtime beats 34.77%
 * @memory usage beats 66.22%
 * @description 原生api大发，效率不行
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  return String(x).split('').reverse().join('') == x
}
// @lc code=end
