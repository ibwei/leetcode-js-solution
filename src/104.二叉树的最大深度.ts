/*
 * @lc app=leetcode.cn id=104 lang=typescript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 * @runtime Your runtime beats 53.27 % of typescript submissions
 * @memory Your memory usage beats 24.35 % of typescript submissions (42 MB)
 * @description 这种是递归，还可以层次遍历（广度优先）
 */

function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
}
// @lc code=end
