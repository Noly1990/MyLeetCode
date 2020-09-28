// 538. 把二叉搜索树转换 为累加树 https://leetcode-cn.com/problems/convert-bst-to-greater-tree/

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

function convertBST(root: TreeNode | null): TreeNode | null {
    let total = 0;
    function process(node: TreeNode | null) {
        if (!node) return 
        process(node.right)
        node.val +=total;
        total = node.val
        process(node.left)
    }

    process(root);

    return root
};