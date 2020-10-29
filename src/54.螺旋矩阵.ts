/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start

/**
 * @runtime Your runtime beats 75 % of typescript submissions
 * @memory Your memory usage beats 7.14 % of typescript submissions (40.3 MB)
 */
function spiralOrder(matrix: number[][]): number[] {
  //
  const result: Array<number> = []

  let c = 0,
    r = 0
  let column = matrix.length - 1,
    row
  if (matrix.length === 1) {
    return matrix[0]
  }
  if (Array.isArray(matrix[0])) {
    row = matrix[0].length - 1
    if (matrix[0].length === 1) {
      return matrix.map(item => item) as any
    }
  } else {
    return matrix as any
  }

  while (c < matrix.length - 1 && r < matrix[0].length - 1) {
    if (row === r) {
      for (let i = c; i <= column; i++) {
        result.push(matrix[i][r])
      }
      break
    } else if (column === c) {
      for (let i = r; i <= row; i++) {
        result.push(matrix[c][i])
      }
      break
    } else {
      dc(c, r, column, row)
    }

    c++
    r++
    column--
    row--
  }

  function dc(c: number, r: number, column: number, row: number): void {
    let currentCol = c,
      currentRow = r

    // ->
    for (; currentRow <= row; currentRow++) {
      result.push(matrix[c][currentRow])
    }

    // ↓
    for (currentCol = c + 1; currentCol <= column; currentCol++) {
      result.push(matrix[currentCol][row])
    }

    // <-
    for (currentRow = row - 1; currentRow >= r && currentRow < row; currentRow--) {
      result.push(matrix[column][currentRow])
    }

    // ↑
    for (currentCol = column - 1; currentCol > c; currentCol--) {
      result.push(matrix[currentCol][r])
    }
  }
  return result
}
// @lc code=end
/* 
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
)
 */
