/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

 /** 
 * @runtime Your runtime beats 99.31 % of javascript submissions
 * @memory Your memory usage beats 9.97 % of javascript submissions (37.7 MB)
 * @description 这可能就是简单难度，一个二分法就完事了
 */
var guessNumber = function(n) {
  let left =1,right =n
  while(left<=right){
    let mid = Math.floor((left+right)/2)
    let result = guess(mid)
    if(result===0){
      return mid
    }else if(result===-1){
      right = mid -1
    }else{
      left = mid +1
    }
  }
}
// @lc code=end
