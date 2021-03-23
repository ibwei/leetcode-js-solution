/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start
function trap(height: number[]): number {
  // 一次遍历每一个柱子能积的水
  // 先找最高点
  let max = Math.max(...height)
  let maxPos = height.indexOf(max)
  // 左边

  let maxList = []
  for (let i = maxPos; i > 0; i--) {}

  for (let i = 1; i < maxPos; i++) {}
}
// @lc code=end
