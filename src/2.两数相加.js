/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * @description your runtime beats 99.23 % of javascript submissions
 * @descriptionYour memory usage beats 13.21 % of javascript submissions (43.2 MB)
 */

function ListNode(val) {
  this.val = val
  this.next = null
}
var addTwoNumbers = function(l1, l2) {
  // 首先两个列表以此相加，直到彼此都为 null
  const resultArray = []
  let isOverFlow = false
  while (l1 !== null || l2 !== null) {
    let val1 = 0,
      val2 = 0
    if (l1 !== null) {
      val1 = l1.val
      l1 = l1.next
    }
    if (l2 !== null) {
      val2 = l2.val
      l2 = l2.next
    }
    // 得到第一步的结果，先复制给当前暂存变量 tempNode
    let temp = isOverFlow ? val1 + val2 + 1 : val2 + val1
    if (temp > 9) {
      isOverFlow = true
      temp = temp % 10
    } else {
      isOverFlow = false
    }
    resultArray.push(temp)
  }

  if (isOverFlow) {
    resultArray.push(1)
  }
  let list = []
  for (let i = 0; i < resultArray.length; i++) {
    list.push(new ListNode(resultArray[i]))
  }
  for (let i = 0; i < resultArray.length - 1; i++) {
    list[i].next = list[i + 1]
  }
  return list[0]
}
// @lc code=end

/* let node3 = new ListNode(3);
let node2 = new ListNode(4);
let node1 = new ListNode(2);
node1.next = node2;
node2.next = node3;

let node6 = new ListNode(4, null);
let node5 = new ListNode(6, node6);
let node4 = new ListNode(5, node5);

node4.next = node5;
node5.next = node6;
console.log(addTwoNumbers(node1, node4)); */

/* 
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/*
var addTwoNumbers = function(l1, l2) {
    let head = null,
        tail = null;
    let isOverFlow = false;
    while (l1 != null || l2 != null || isOverFlow) {
        let x = 0,
            y = 0,
            val;
        if (l1 != null) {
            x = l1.val;
        }
        if (l2 != null) {
            y = l2.val;
        }
        if (isOverFlow) {
            val = x + y + 1;
            isOverFlow = false;
        } else {
            val = x + y;
        }
        if (val >= 10) {
            val = Math.floor(val % 10);
            isOverFlow = true;
        }
        // console.log(val)
        let pNew = new ListNode(val);
        if (head == null) {
            head = pNew;
            tail = pNew;
        } else {
            tail.next = pNew;
            tail = pNew;
        }
        if (l1 != null) {
            l1 = l1.next;
        }
        if (l2 != null) {
            l2 = l2.next;
        }
    }
    return head;

};
*/

/* 

function addTwoNumbers(l1, l2) {
  let l3 = new ListNode(0);
  let l = l3;
  let carry = 0
  while (!!l1 || !! l2) {
    let cum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    l.next = new ListNode(cum % 10);
    carry = cum >= 10 ? 1 : 0;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    l = l.next;
  }
  if (carry > 0) {
    l.next = new ListNode(carry);
  }
  return l3.next;
};
*/
