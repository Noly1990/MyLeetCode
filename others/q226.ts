// 226. 翻转二叉树 https://leetcode-cn.com/problems/invert-binary-tree/

import TreeNode from "./TreeNode";

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

function invertTree(root: TreeNode | null): TreeNode | null {

    if (!root) return root;

    function process(node: TreeNode | null) {
        if (!node) return
        let temp = node.left;
        node.left = node.right;
        node.right = temp;
        if (node.left) process(node.left)
        if (node.right) process(node.right)
    }

    process(root)
    return root;
};