/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * @description Your runtime beats 51.16 % of javascript submissions
 * @description Your memory usage beats 21.56 % of javascript submissions (38.7 MB)
 */
var findKthPositive = function (arr, k) {
  const maxLen = arr.length + k
  let missCount = 0
  let target = 0
  let currentCount = 0
  for (let i = 1; i <= maxLen; i++) {
    if (arr[currentCount] === i) {
      currentCount += 1
    } else {
      target = i
      missCount += 1
    }
    // 如果所给的数组都已经命中，则就是当前的 i+（总需要 miss的-已经miss 了的）
    if (currentCount === arr.length) {
      return i + (k - missCount)
    }
    // 如果 miss 的次数已经满了，则返回上一个最大 miss 的数
    if (missCount === k) {
      return target
    }
  }
}

// @lc code=end
console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([1, 2, 3, 4], 2))

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * @description Your runtime beats 40.7 % of javascript submissions
 * @description Your memory usage beats 6.27 % of javascript submissions (39.5 MB)
 */
/* var findKthPositive = function (arr, k) {
  const lastNumber = [];
  const i = 1;
  const maxLen = arr.length + k;
  for (let i = 0; i < maxLen; i++) {
    const target = i + 1;
    if (arr.indexOf(target) === -1) {
      lastNumber.push(target);
    }
    if (lastNumber.length === k) {
      break;
    }
  }
  return lastNumber[k - 1];
}; */
