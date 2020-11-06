/*
 * @lc app=leetcode.cn id=441 lang=typescript
 *
 * [441] 排列硬币
 */

// @lc code=start

/** 
 * @tests 1336 / 1336 cases passed(108 ms)
 * @runtime Your runtime beats 92.86 % of typescript submissions
 * @memory Your memory usage beats 35.71 % of typescript submissions(40.4 MB) */
function arrangeCoins(n: number): number {
  // 1, 3, 6, 10, 15, 21
  let sum = 0
  for (let i = 1; ; i++) {
    sum = sum + i   // 1,3,6,10
    if (sum === n) {
      return i
    }
    if (sum > n) {
      return i - 1
    }
  }
};
// @lc code=end

