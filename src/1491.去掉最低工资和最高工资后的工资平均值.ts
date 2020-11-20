/*
 * @lc app=leetcode.cn id=1491 lang=typescript
 *
 * [1491] 去掉最低工资和最高工资后的工资平均值
 */

// @lc code=start
/**
 * @runtime Your runtime beats 26.09 % of typescript submissions
 * @memory Your memory usage beats 8.7 % of typescript submissions (40.2 MB)
 */
function average(salary: number[]): number {
  let max = Math.max(...salary)
  let min = Math.min(...salary)
  let sum = 0
  for (let i = 0; i < salary.length; i++) {
    sum += salary[i]
  }
  return (sum - max - min) / (salary.length - 2)
}
// @lc code=end
