/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * [6] Z 字形变换
 */

// @lc code=start

/**
 * @runtime Your runtime beats 75 % of typescript submissions
 * @memory Your memory usage beats 40.18 % of typescript submissions (43.8 MB)
 * @description 时间 O(n)
 */
function convert(s: string, numRows: number): string {
  if (s.length <= numRows || numRows === 1) {
    return s
  }
  const str: string[] = new Array(numRows).fill('')
  // isDown 方向标志
  let isDown = true,
    column = 0
  for (let i = 0; i < s.length; i++) {
    if (column === numRows - 1) {
      isDown = false
    }
    if (column === 0) {
      isDown = true
    }
    str[column] += s[i]
    if (isDown) {
      column++
    } else {
      column--
    }
  }
  return str.join('')
}
// @lc code=end

//console.log(convert('PAYPALISHIRING', 4));

/**
 * @runtime Your runtime beats 11.36 % of typescript submissions
 * @memory Your memory usage beats 5.07 % of typescript submissions (58.8 MB)
 * @description 这种解法很垃圾,还费内存
 */

/* function convert(s: string, numRows: number): string {
  if (s.length <= numRows) {
    return s;
  }
  if (numRows === 1) {
    return s;
  }
  const result: string[][] = [];
  for (let i = 0; i < numRows; i++) {
    result[i] = [];
    for (let j = 0; j < s.length / 2; j++) {
      result[i][j] = '';
    }
  }

  // 遍历每一个字符
  for (let i = 0, row = 0; i < s.length; row = row + 1) {
    // 当是完全填充部分
    if (row % (numRows - 1) === 0) {
      for (let j = 0; j < numRows; j++) {
        result[j][row] = s[i];
        i = i + 1;
      }
    } else {
      // 当处于 Z 字变化的部分,只需要赋值一个数,赋值的目标行数是 (numRows-row-1)
      const th = row % (numRows - 1);
      result[numRows - th - 1][row] = s[i];
      i++;
    }
  }

  let answer = '';

  for (let i = 0; i < result.length; i++) {
    answer += result[i].filter((key) => Boolean(key)).join('');
  }
  return answer;
} */
