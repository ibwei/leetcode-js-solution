/*
 * @lc app=leetcode.cn id=509 lang=typescript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @description 31/31 cases passed (84 ms)
 * @runtime Your runtime beats 85.65 % of typescript submissions
 * @memory Your memory usage beats 22.06 % of typescript submissions (40 MB)
 */

function fib(N: number): number {
  const f = [0, 1]
  for (let i = 2; i <= N; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[N]
}
// @lc code=end

/**
   * 31/31 cases passed (112 ms)
Your runtime beats 16.18 % of typescript submissions
Your memory usage beats 17.65 % of typescript submissions (40.1 MB)
*/
/* if (N === 1) {
    return 1
  } else if (N === 0) {
    return 0
  } else {
    return fib(N - 2) + fib(N - 1)
  } */
