// 404. 左叶子之和 https://leetcode-cn.com/problems/sum-of-left-leaves/

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

function sumOfLeftLeaves(root: TreeNode | null): number {
    let total = 0;
    if (!root) return total;
    function process(node: TreeNode | null) {
        if (!node) return
        if (node.left) {
            if (!node.left.left && !node.left.right) total+=node.left.val
            process(node.left)
        }
        if (node.right) {
            process(node.right)
        }
    }

    process(root)

    return total;
};