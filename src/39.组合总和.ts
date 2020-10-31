/*
 * @lc app=leetcode.cn id=39 lang=typescript
 *
 * [39] 组合总和
 */

// @lc code=start

/**
 * @runtime Your runtime beats 85.63 % of typescript submissions
 * @memory  Your memory usage beats 41.67 % of typescript submissions (41.3 MB)
 * @description 直接用回溯法+剪枝就完事啦
 */
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = []
  const trackBack = (track: number[]) => {
    for (let i = 0; i < candidates.length; i++) {
      if (track.length > 0 && candidates[i] < track[track.length - 1]) {
        continue
      }
      track.push(candidates[i])
      const sum = track.reduce((total, value) => (total += value), 0)
      if (sum === target) {
        result.push([...track])
      }
      if (sum < target) {
        trackBack(track)
      }
      track.pop()
    }
  }

  trackBack([])
  return result
}
// @lc code=end
