/*
 * @lc app=leetcode.cn id=405 lang=typescript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start

/**
 * @runtime Your runtime beats 75 % of typescript submissions
 * @memory Your memory usage beats 25 % of typescript submissions (40.2 MB)
 */
function toHex(num: number): string {
  const char = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
  ]
  let res = ''

  if (num === 0) {
    return '0'
  }
  while (num !== 0) {
    res = char[num & 15] + res
    num = num >>> 4
  }
  return res
}
// @lc code=end
