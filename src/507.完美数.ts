/*
 * @lc app=leetcode.cn id=507 lang=typescript
 *
 * [507] 完美数
 */

// @lc code=start

function checkPerfectNumber(num: number): boolean {
  return num == 6 || num == 28 || num == 496 || num == 8128 || num == 33550336
  /* if(num%2!==0) return false
  let count = num
  let boundary = Math.floor(num / 2)
  for (let i = 1; i <= boundary; i++) {
    if (num % i === 0) {
      count -= i
    }
  }
  return count === 0 ? true : false
  */
}
// @lc code=end
