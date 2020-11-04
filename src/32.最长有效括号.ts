/*
 * @lc app=leetcode.cn id=32 lang=typescript
 *
 * [32] 最长有效括号
 */

// @lc code=start
function longestValidParentheses(s: string): number {
  const stack = s.split('')
  let validBrackets = 0
  function count(stack: string[], len: number) {
    for (let i = 0; i < stack.length - 1; ) {
      if (stack[i] === '(' && stack[i + 1] === ')') {
        validBrackets += 2
        stack.splice(i, 2)
      } else {
        i++
      }
    }
    if (stack.length === len) {
      return
    } else {
      count(stack, stack.length)
    }
  }
  count(stack, stack.length)
}
// @lc code=end
