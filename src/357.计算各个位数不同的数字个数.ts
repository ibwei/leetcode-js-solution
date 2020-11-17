/*
 * @lc app=leetcode.cn id=357 lang=typescript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
function countNumbersWithUniqueDigits(n: number): number {
  // 11 ,22,33 , 111,112,110,113,114
  // 1位数  0 个   1，2，3，4

  /** 
   * 
   * @description 这种方法会超出时间限制
   let b = Math.pow(10, n)
      let sum = 0
      for (let i = 0; i < b; i++) {
      let arr = `${i}`.split('')
         if (arr.length === new Set(arr).size) {
      sum++
    }
  }
  return sum */

  const b = Math.pow(10, n)
}
// @lc code=end
