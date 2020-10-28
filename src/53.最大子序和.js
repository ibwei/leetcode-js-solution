/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * @rumtime beats 57.77%
 * @memory usage beats 11.76%
 * @description
 */
/* var maxSubArray = function (nums) {
  const length = nums.length;
  let currentSum = nums[0],
    max = nums[0];
  for (let i = 1; i < length; i++) {
    currentSum = Math.max(nums[i] + currentSum, nums[i]);
    max = Math.max(currentSum, max);
  }
  return max;
}; */

/**
 * @param {number[]} nums
 * @return {number}
 * @rumtime beats 23.77%
 * @memory usage beats 94.76%
 * @description  动态规划
 */
var maxSubArray = function (nums) {
  const length = nums.length
  for (let i = 1; i < length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] = nums[i - 1] + nums[i]
    }
  }
  return Math.max(...nums)
}
// @lc code=end
