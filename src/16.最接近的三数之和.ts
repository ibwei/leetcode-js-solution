/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
  let min = Number.MAX_SAFE_INTEGER
  let sortedArray = nums.sort((a: number, b: number) => a - b)

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (i > 0 && sortedArray[i] === sortedArray[i - 1]) {
      continue
    }
    let start = i + 1,
      end = sortedArray.length - 1
    while (start < end) {
      let sum = sortedArray[start] + sortedArray[end] + sortedArray[i]

      if (sum === target) {
        return target
      }
      if (Math.abs(target - sum) < Math.abs(min - target)) {
        min = sum
      }
      if (sum < target) {
        while (start < end && sortedArray[start] === sortedArray[start + 1]) {
          start++
        }
        start++
      } else {
        while (start < end && sortedArray[end] === sortedArray[end - 1]) {
          end--
        }
        end--
      }
    }
  }
  return min
}
// @lc code=end
