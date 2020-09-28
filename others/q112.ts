// 112. 路径总和 https://leetcode-cn.com/problems/path-sum/

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

function hasPathSum(root: TreeNode | null, sum: number): boolean {
    if (!root) return sum === 0;
    if (!root.left && !root.right) return root.val === sum;
    let result = false;
    function walk(node: TreeNode, inSum: number) {
        if (!node.left && !node.right) {
            if (inSum + node.val === sum) result = true;
        }
        if (node.left) {
            walk(node.left, inSum + node.val)
        }
        if (node.right) {
            walk(node.right, inSum + node.val)
        }
    }

    walk(root, root.val);
    return result;
};