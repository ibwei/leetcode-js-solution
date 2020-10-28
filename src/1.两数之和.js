/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/** 
 * @solution 1
 * @rumtime beats 16.31%
 * @memory usage beats 100%
 var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const diffPos = nums.indexOf(diff);
    if (diffPos !== -1 && diffPos !== i) {
      return [i, diffPos];
    }
  }
}; */
/**
 * @solution 2
 * @rumtime beats 69.2%
 * @memory usage beats 8.47%
 *  metho */
var twoSum = function(nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]
    if (map.has(diff)) {
      return [i, map.get(diff)]
    }
    map.set(nums[i], i)
  }
}
// @lc code=end
