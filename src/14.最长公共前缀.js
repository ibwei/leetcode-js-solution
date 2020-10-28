/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * @solution 1
 * @rumtime beats 65.77%
 * @memory usage beats 100%
 * @description 最长公共前缀一定在最短的那个单词中产生，可以用最短的那个单词，一一和其他单词比较
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) {
    return ''
  }
  const len = strs.length
  let minPos = 0
  for (let i = 0; i < len; i++) {
    if (strs[i].length < strs[minPos].length) {
      minPos = i
    }
  }
  const minStringLength = strs[minPos].length
  for (let i = minStringLength; i > 0; i--) {
    const maxPrefix = strs[minPos].slice(0, i)
    const flag = strs.every((item) => {
      return item.startsWith(maxPrefix)
    })
    if (flag === true) {
      return maxPrefix
    }
  }
  return ''
}
// @lc code=end
