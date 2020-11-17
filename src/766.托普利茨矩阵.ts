/*
 * @lc app=leetcode.cn id=766 lang=typescript
 *
 * [766] 托普利茨矩阵
 */

// @lc code=start

/**
 * @description483/483 cases passed (88 ms)
 * @runtime Your runtime beats 100 % of typescript submissions
 * @memory Your memory usage beats 25 % of typescript submissions (40.5 MB)
 */
function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 1; i < matrix.length; i++) {
    let c = matrix[i - 1]
    for (let j = 1; j < matrix[i].length; j++) {
      let x = j - 1
      // console.log(`matrix[i]=${c[j]}`)
      if (x >= 0 && x < c.length) {
        if (c[x] !== matrix[i][j]) {
          return false
        }
      }
    }
  }
  return true
}
// @lc code=end

/* console.log(
  isToeplitzMatrix([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [9, 5, 1, 2]
  ])
) */
