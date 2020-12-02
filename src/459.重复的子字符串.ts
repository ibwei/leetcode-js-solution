/*
 * @lc app=leetcode.cn id=459 lang=typescript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @description 120/120 cases passed (2444 ms)
 * @runtime Your runtime beats 5.94 % of typescript submissions
 * @memory Your memory usage beats 5 % of typescript submissions (76.2 MB)
 */
/* function repeatedSubstringPattern(s: string): boolean {
  const pos = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[0]) {
      pos.push(i)
    }
  }
  if (pos.length < 2) {
    return false
  }
  for (let i = 1; i < pos.length; i++) {
    if (pos[i] > s.length / 2) {
      return false
    }
    let repeat = s.slice(0, pos[i])
    // console.log('repaeat', repeat)
    const r = s.replace(new RegExp(repeat, 'g'), '')
    if (!r) {
      return true
    }
  }
  return false
} */

/**
 * @description 120/120 cases passed (84 ms) 构造 s+s,掐头去尾
 * @runtime Your runtime beats 88.12 % of typescript submissions
 * @memory Your memory usage beats 41 % of typescript submissions (41.4 MB) */
function repeatedSubstringPattern(s: string): boolean {
  return (s + s).slice(1, s.length * 2 - 1).indexOf(s) !== -1
}
// @lc code=end
// console.log(repeatedSubstringPattern('babbabbabbabbab'))

// bc abc  abc   abc abc ab
