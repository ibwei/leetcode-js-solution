/*
 * @lc app=leetcode.cn id=434 lang=typescript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start

/**
 * @runtime Your runtime beats 50 % of typescript submissions
 * @memory Your memory usage beats 50 % of typescript submissions (40 MB)
 */

function countSegments(s: string): number {
  let isFind = false,
    count = 0
  for (let i = 0; i < s.length; i++) {
    if (!isFind && s[i] !== ' ') {
      isFind = true
      count++
    }
    if (isFind && s[i] === ' ') {
      isFind = false
    }
  }
  return count
}

// @lc code=end
// console.log(countSegments('Hello, my name is John'))
