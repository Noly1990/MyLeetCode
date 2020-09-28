// 94. 二叉树的中序遍历 https://leetcode-cn.com/problems/binary-tree-inorder-traversal/

import TreeNode from "./TreeNode"

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

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return []
    let arr: number[] = []
    function midOrder(node: TreeNode | null) {
        if (!node) return
        if (node.left) midOrder(node.left)
        arr.push(node.val)
        if (node.right) midOrder(node.right)
    }
    midOrder(root)
    return arr;
};