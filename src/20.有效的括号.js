/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * @solution 1
 * @rumtime beats 15.97%
 * @memory usage beats 6.06%
 * @description 利用正则表达式，效率低
 */
/* var isValid = function (s) {
  if (!s.length) {
    return true;
  }
  const pre = s;
  s = s.replace(/\(\)/g, '');
  s = s.replace(/\[\]/g, '');
  s = s.replace(/\{\}/g, '');
  if (pre === s) {
    return false;
  } else {
    return isValid(s);
  }
}; */
/**
 * @param {string} s
 * @return {boolean}
 * @solution 1
 * @rumtime beats 66.65%
 * @memory usage beats 100%
 * @description  利用栈先进先出的特点
 */
var isValid = function (s) {
  let stack = []
  let dict = {
    ['(']: ')',
    [')']: '(',
    ['{']: '}',
    ['}']: '{',
    ['[']: ']',
    [']']: '['
  }

  for (let i = 0; i < s.length; i++) {
    if (stack.length && dict[stack[stack.length - 1]] === s[i]) {
      stack.pop()
    } else {
      stack.push(s[i])
    }
  }
  return !stack.length
}
// @lc code=end
