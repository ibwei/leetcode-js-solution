/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @solution 1
 * @param {number[]} nums
 * @return {number}
 * @rumtime beats 15.97%
 * @memory usage beats 6.06%
 * @description 利用set去重特性
 */
/* var removeDuplicates = function (nums) {
  nums = [...new Set(nums)];
  return nums.length;
}; */

/**
 * @solution 2
 * @rumtime beats 36.97%
 * @memory usage beats 6.35%
 * @description 利用hashtable记录
 */
var removeDuplicates = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], i)
    } else {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
/**
 * @solution 3
 * @rumtime beats 17.97%
 * @memory usage beats 6.35%
 * @description 利用题目说的已排好序的特性
 */
/* var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
}; */
/**
 * @solution 4
 * @rumtime beats 36.97%
 * @memory usage beats 6.35%
 * @description 利用题目说的已排好序的特性
 */

// @lc code=end
