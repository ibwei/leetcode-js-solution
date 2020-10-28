/*
 * @lc app=leetcode.cn id=18 lang=typescript
 *
 * [18] 四数之和
 */

// @lc code=start
function fourSum(nums: number[], target: number): number[][] {
  const res: number[][] = []
  nums.sort((a, b) => a - b)
  const len: number = nums.length
  for (let i = 0; i < len - 3; i++) {
    if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue
    if (i > 0 && nums[i - 1] === nums[i]) continue
    for (let j = i + 1; j < len - 2; j++) {
      if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) break
      if (nums[i] + nums[j] + nums[len - 1] + nums[len - 2] < target) continue
      if (j > i + 1 && nums[j - 1] === nums[j]) continue
      let L = j + 1,
        R = len - 1
      while (L < R) {
        const sum = nums[i] + nums[j] + nums[L] + nums[R]
        if (sum > target) {
          R--
        } else if (sum < target) {
          L++
        } else {
          res.push([nums[i], nums[j], nums[L], nums[R]])
          while (L < R && nums[L] === nums[L + 1]) L++
          while (L < R && nums[R] === nums[R - 1]) R--
          L++
          R--
        }
      }
    }
  }
  return res
}

// @lc code=end
/**
 * @runtime Your runtime beats 17.14 % of typescript submissions
 * @memory Your memory usage beats 25.76 % of typescript submissions (41 MB)
 * @method  暴力解法最垃圾   
 
  const answer: number[][] = [];
  const m = new Map();
  const arr = nums.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 3; i++) {
    if (arr[i] > target && arr[i + 1] > 0) break;
    for (let j = i + 1; j < arr.length - 2; j++) {
      if (arr[i] + arr[j] > target && arr[j + 1] > 0) break;
      for (let k = j + 1; k < arr.length - 1; k++) {
        if (arr[i] + arr[j] + arr[k] > target && arr[k + 1] > 0) break;
        for (let z = k + 1; z < arr.length; z++) {
          let sum = arr[i] + arr[j] + arr[k] + arr[z];
          if (sum === target) {
            const key = `${arr[i]}${arr[j]}${arr[k]}${arr[z]}`;
            if (!m.has(key)) {
              answer.push([arr[i], arr[j], arr[k], arr[z]]);
              m.set(key, 1);
            }
          }
        }
      }
    }
  }

  return answer;
} */

// console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11));
