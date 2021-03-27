/*
 * @lc app=leetcode.cn id=287 lang=typescript
 *
 * [287] 寻找重复数
 */

/**
 * @param {string} s
 * @return {boolean}
 * @solution 1
 * @rumtime beats 44%
 * @memory usage beats 68%
 * @description 先排序，再二分法查找
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  const len = nums.length
  const sortArr = nums.sort((a, b) => a - b)

  let start = 0,
    end = len

  while (start < end) {
    const mid = Math.floor((start + end) / 2)
    // 等于，后面重复
    if (sortArr[mid] >= mid + 1) {
      if (sortArr[mid] === sortArr[mid + 1]) return nums[mid]
      start = mid + 1
    } else {
      // 前面重复
      if (sortArr[mid] === sortArr[mid - 1]) {
        return sortArr[mid]
      }
      end = mid - 1
    }
  }
}
// @lc code=end

// console.log(findDuplicate([1, 4, 4, 2, 4]))
