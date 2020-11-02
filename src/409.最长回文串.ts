/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start

/**
 * @runtime Your runtime beats 40 % of typescript submissions
 * @memory Your memory usage beats 20 % of typescript submissions (41.1 MB)
 */

function longestPalindrome(s: string): number {
  const m = new Set<string>()
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (m.has(s[i])) {
      count += 2
      m.delete(s[i])
    } else {
      m.add(s[i])
    }
  }
  return m.size > 0 ? count + 1 : count
}
// @lc code=end
