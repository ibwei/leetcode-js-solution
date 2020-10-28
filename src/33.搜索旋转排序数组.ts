/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start

/**
 * @runtime Your runtime beats 100 % of typescript submissions
 * @memory Your memory usage beats 7.14 % of typescript submissions (40.4 MB)
 */
function search(nums: number[], target: number): number {
  let start = 0,
    end = nums.length - 1
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      return mid
    }
    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1
      } else {
        start = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return -1
}
// @lc code=end

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
