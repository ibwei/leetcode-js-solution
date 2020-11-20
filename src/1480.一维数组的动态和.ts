/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start

/**
 * @description 53/53 cases passed (76 ms)
 * @runtime Your runtime beats 94.51 % of typescript submissions
 * @memory Your memory usage beats 16.48 % of typescript submissions (40.4 MB)
 */
function runningSum(nums: number[]): number[] {
  const numbers: number[] = []
  nums.reduce((pre, now) => {
    numbers.push(pre + now)
    return pre + now
  }, 0)
  return numbers
}
// @lc code=end
