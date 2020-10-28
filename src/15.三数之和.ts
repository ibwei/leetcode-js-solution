/**
 * @lc app=leetcode.cn id=15 lang=typescript
 * @runtime Your runtime beats 48.78 % of typescript submissions
 @ @memory Your memory usage beats 23.41 % of typescript submissions (49.8 MB)
 * [15] 三数之和
 */

// @lc code=start

function threeSum(nums: number[]): Array<Array<number>> {
  if (!nums.length || nums.length < 3) return []

  const answer: Array<Array<number>> = []
  const sortedArray = nums.sort((a: number, b: number) => a - b)
  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] > 0) break
    if (i > 0 && sortedArray[i - 1] === sortedArray[i]) continue
    let start = i + 1,
      end = sortedArray.length - 1,
      target = sortedArray[i]
    while (start < end) {
      if (sortedArray[start] + sortedArray[end] + target === 0) {
        answer.push([target, sortedArray[start], sortedArray[end]])
        while (start < end && sortedArray[start] === sortedArray[start + 1]) {
          start++
        }
        start++
        while (start < end && sortedArray[end] === sortedArray[end - 1]) {
          end--
        }
        end--
      } else if (start < end && sortedArray[start] + sortedArray[end] + target < 0) {
        start++
      } else {
        end--
      }
    }
  }
  return answer
}
// @lc code=end

/* 

  O(n^3) 超出时间限制了

  const answer: Array<Array<number>> = [];
  const copyNums: Array<number> = [...nums];
  const uniqueKey = new Map();

  const getAscArr = (a: number, b: number, c: number): Array<number> =>
    [a, b, c].sort();
  // 每次取一个数的全部可能出来
  for (let i = 0; copyNums.length > 2; i++) {
    // 取第一个数出来
    const first: number = copyNums.pop() as number;
    for (let j = 0; copyNums.length > 1 && j < copyNums.length; j++) {
      const target = 0 - first;
      let temp = copyNums[j];
      let findNum = target - temp;
      if (copyNums.lastIndexOf(findNum) > j) {
        const keyItem = getAscArr(first, temp, findNum);
        const key = keyItem.join('');
        if (!uniqueKey.has(key)) {
          answer.push(keyItem);
          uniqueKey.set(key, 1);
        }
      }
    }
  }
*/

console.log(threeSum([3, 0, -2, -1, 1, 2]))
