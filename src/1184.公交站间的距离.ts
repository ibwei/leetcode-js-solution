/*
 * @lc app=leetcode.cn id=1184 lang=typescript
 *
 * [1184] 公交站间的距离
 */

// @lc code=start
function distanceBetweenBusStops(
  distance: number[],
  start: number,
  destination: number
): number {
  let leftDistance = 0
  for (let i = start; i !== destination; i--) {
    if (i === 0) {
      i === distance.length - 1
    }
    leftDistance += distance[i]
  }
  let rightDistance = 0
  for (let i = start; i < destination; i++) {
    rightDistance += distance[i]
  }
  return Math.max(leftDistance, rightDistance)
}
// @lc code=end
