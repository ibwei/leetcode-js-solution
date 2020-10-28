/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

/**
 *  @method1
 *  @decription 2091/2091 cases passed (156 ms)
 *  @runtime Your runtime beats 41.54 % of typescript submissions
 *  @usage Your memory usage beats 14.29 % of typescript submissions (45.4 MB)
 *
 *  @method2
 *  @decription 2091/2091 cases passed (152 ms)
 *  @runtimeYour runtime beats 51.54 % of typescript submissions
 *  @usage Your memory usage beats 15.13 % of typescript submissions (45.3 MB)
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  function findKth(nums1: number[], i: number, nums2: number[], j: number, k: number): number {
    if (i >= nums1.length) return nums2[j + k - 1]
    if (j >= nums2.length) return nums1[i + k - 1]
    if (k === 1) {
      return Math.min(nums1[i], nums2[j])
    }
    const midValue1 =
      i + Math.floor(k / 2) - 1 < nums1.length
        ? nums1[i + Math.floor(k / 2) - 1]
        : Number.MAX_VALUE
    const midValue2 =
      j + Math.floor(k / 2) - 1 < nums2.length
        ? nums2[j + Math.floor(k / 2) - 1]
        : Number.MAX_VALUE
    if (midValue1 < midValue2) {
      return findKth(nums1, i + Math.floor(k / 2), nums2, j, k - Math.floor(k / 2))
    } else {
      return findKth(nums1, i, nums2, j + Math.floor(k / 2), k - Math.floor(k / 2))
    }
  }

  let i = nums1.length
  let j = nums2.length
  let left = (i + j + 1) / 2
  let right = (i + j + 2) / 2
  console.log(findKth(nums1, 0, nums2, 0, right))
  return (findKth(nums1, 0, nums2, 0, right) + findKth(nums1, 0, nums2, 0, left)) / 2

  // @method 1 API const sortedNums = [...nums1, ...nums2].sort((a: number, b: number) => a - b);
  /*  @method 2 const sortedNums: number[] = [];
  
    const len1 = nums1.length,
      len2 = nums2.length;
    let pos1 = 0,
      pos2 = 0;
    for (let i = 0; i < len1 + len2; i++) {
      if (pos1 === len1) {
        sortedNums.push(nums2[pos2++]);
        continue;
      }
      if (pos2 === len2) {
        sortedNums.push(nums1[pos1++]);
        continue;
      }
      if (nums1[pos1] < nums2[pos2]) {
        sortedNums.push(nums1[pos1]);
        pos1++;
      } else {
        sortedNums.push(nums2[pos2]);
        pos2++;
      }
    }
    const len = sortedNums.length;
    if (len === 2) {
      return (sortedNums[0] + sortedNums[1]) / 2;
    }
  
    if (len === 1) {
      return sortedNums[0];
    }
  
    if (len % 2 === 0) {
      const first = Math.floor((len - 1) / 2);
      const second = first + 1;
      return (sortedNums[first] + sortedNums[second]) / 2;
    }
  
    return sortedNums[Math.floor((len - 1) / 2)]; */
}
// @lc code=end

console.log(findMedianSortedArrays([1, 3], [2]))
