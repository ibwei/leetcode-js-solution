/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = []
  let validBrackets = 0
  for (let i = 0; i < s.length - 1; ) {
    if (stack[i] === '(' && stack[i + 1] === ')') {
      validBrackets += 2
      stack.splice(i, 2)
    } else {
      i++
    }
  }
  return validBrackets
}
// @lc code=end
