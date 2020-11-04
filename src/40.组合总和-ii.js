/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/**
 * @runtime Your runtime beats 82.64 % of javascript submissions
 * @memory Your memory usage beats 46.67 % of javascript submissions (39.5 MB)
 */
var combinationSum2 = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b)
  const result = []
  const track = []
  const trackBack = (candidates, target, index) => {
    if (target === 0) {
      result.push([...track])
      return
    }
    if (target < 0) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) {
        continue
      }
      track.push(candidates[i])
      trackBack(candidates, target - candidates[i], i + 1)
      track.pop()
    }
  }

  trackBack(candidates, target, 0)

  return result
}
// @lc code=end
