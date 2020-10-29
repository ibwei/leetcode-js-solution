/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start

/**
 * @runtime Your runtime beats 70 % of typescript submissions
 * @memory Your memory usage beats 18.75 % of typescript submissions (41.5 MB)
 */
function searchRange(nums: number[], target: number): number[] {
  let left = 0,
    right = nums.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      let leftPos = mid,
        rightPos = mid
      while (leftPos - 1 >= 0 && nums[leftPos - 1] === target) leftPos--
      while (leftPos + 1 < nums.length && nums[rightPos + 1] === target) rightPos++
      return [leftPos, rightPos]
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return [-1, -1]
}
// @lc code=end
