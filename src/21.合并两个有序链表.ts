/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2
  } else if (l2 === null) {
    return l1
  }

  let node = null

  if (l1.val < l2.val) {
    node = l1
    node.next = mergeTwoLists(l1.next, l2)
  } else {
    node = l2
    node.next = mergeTwoLists(l1, l2.next)
  }
  return node
}
// @lc code=end
