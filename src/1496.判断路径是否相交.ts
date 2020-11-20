/*
 * @lc app=leetcode.cn id=1496 lang=typescript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
function isPathCrossing(path: string): boolean {
  let x = 0,
    y = 0
  const m = new Map<string, number>()
  m.set('00', 1)
  for (let i = 0; i < path.length; i++) {
    switch (path[i]) {
      case 'N':
        y++
        break
      case 'S':
        y--
        break
      case 'E':
        x++
        break
      case 'W':
        x--
        break
    }
    if (m.has(`${x}${y}`)) {
      return true
    }
    m.set(`${x}${y}`, 1)
  }
  return false
}
// @lc code=end
