/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @result 34/34 cases passed (8112 ms)
 * @runtime Your runtime beats 6.67 % of typescript submissions
 * @memory Your memory usage beats 53.33 % of typescript submissions (46.6 MB)
 * 不符合题意，用了 O(n^2)时间效率
 */
/* function findDisappearedNumbers(nums: number[]): number[] {
  const result: number[] = []
  for (let i = 1; i <= nums.length; i++) {
    if (nums.indexOf(i) === -1) {
      result.push(i)
    }
  }
  return result
} */
/**
 * @description 34/34 cases passed (116 ms)
 * @runtime Your runtime beats 95 % of typescript submissions
 * @memory Your memory usage beats 65 % of typescript submissions (46.5 MB)
 */
function findDisappearedNumbers(nums: number[]): number[] {
  for (let i = 0; i < nums.length; i++) {
    let newIndex = Math.abs(nums[i]) - 1
    if (nums[newIndex] > 0) {
      nums[newIndex] *= -1
    }
  }

  const result = []

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i - 1] > 0) {
      result.push(i)
    }
  }

  return result
}
// @lc code=end
// [4, 3, 2, 7, 8, 2, 3, 1]
/**
 * [-4, -3, -2, -7, -8, -2, -3, -1]
 *
 * [-4, -3, -2, 4, -8, -2, -3, -1]
 */
