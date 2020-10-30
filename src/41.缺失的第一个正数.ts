/*
 * @lc app=leetcode.cn id=41 lang=typescript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  if (nums.length === 1) {
    if (nums[0] < 0) {
      return 1
    } else if (nums[0] === 0) {
      return 1
    } else if (nums[0] === 1) {
      return 2
    } else {
      return 1
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      nums[i] = Number.MAX_SAFE_INTEGER
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(nums[i]) < nums.length && nums[Math.abs(nums[i]) - 1] > 0)
      nums[Math.abs(nums[i]) - 1] *= -1
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      return i + 1
    }
  }
  return nums.length + 1
}
// @lc code=end
//console.log(firstMissingPositive([1, 1]))
