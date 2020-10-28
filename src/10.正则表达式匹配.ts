/*
 * @lc app=leetcode.cn id=11 lang=typescript
 *
 * [11] 盛最多水的容器
 */
/**
 * @runtime Your runtime beats 5.59 % of typescript submissions
 * @memory Your memory usage beats 7.14 % of typescript submissions (41.5 MB)
 */
// @lc code=start
function maxArea(height: number[]): number {
  let max: number = 0
  // 最大的数  O(n2)
  /* for (let i = 0; i < height.length - 1; i++){
    let temp: number = 0
    for (let j = i + 1; j < height.length; j++){
      temp = Math.min(height[i], height[j]) * (j - i)
      if (temp > max) {
        max = temp
      }
    }
  } */
  /**
   * @runtime Your runtime beats 74.53 % of typescript submissions
   * @memory Your memory usage beats 5.71 % of typescript submissions (41.9 MB)
   */
  let left = 0,
    rigth = height.length - 1

  while (left < rigth) {
    const temp = Math.min(height[left], height[rigth]) * (rigth - left)
    if (temp > max) {
      max = temp
    }
    if (height[left] > height[rigth]) {
      rigth--
    } else {
      left++
    }
  }
  return max
}
// @lc code=end
// console.log(maxArea([1,1]))
