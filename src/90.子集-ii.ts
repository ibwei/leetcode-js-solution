/*
 * @lc app=leetcode.cn id=90 lang=typescript
 *
 * [90] 子集 II
 */

// @lc code=start

/**
 * @runtime Your runtime beats 100 % of typescript submissions
 * @memory Your memory usage beats 8.7 % of typescript submissions (41 MB)
 */
function subsetsWithDup(nums: number[]): number[][] {
  const res: number[][] = [[]]
  nums = nums.sort((a, b) => a - b)
  function dfs(track: number[], index: number) {
    for (let i = index; i < nums.length; i++) {
      if (i > index && nums[i] === nums[i - 1]) {
        continue
      }
      track.push(nums[i])
      res.push([...track])
      dfs(track, i + 1)
      track.pop()
    }
  }
  dfs([], 0)
  return res
}
// @lc code=end
