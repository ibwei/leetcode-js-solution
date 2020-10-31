/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @runtime Your runtime beats 59.09 % of typescript submissions
 * @memory Your memory usage beats 11.36 % of typescript submissions (40.1 MB)
 */
function isSubsequence(s: string, t: string): boolean {
  if (!s) {
    return true
  }
  let currentPos = -1
  for (let i = 0; i < s.length; i++) {
    currentPos = t.indexOf(s[i], currentPos + 1)
    if (currentPos === -1) {
      return false
    }
  }
  return true
}
// @lc code=end
// console.log(isSubsequence('abc', 'ahbgdc'))
