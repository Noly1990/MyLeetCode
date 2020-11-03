// 129. 求根到叶子节点数字之和 https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

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

function sumNumbers(root: TreeNode | null): number {
    if (!root) return 0;
    let arr: string[] = [];

    function add(node: TreeNode | null, pre: string) {
        if (!node) return
        if (!node.left && !node.right) arr.push(`${pre}${node.val}`)
        if (node.left) add(node.left, pre + node.val)
        if (node.right) add(node.right, pre + node.val)
    }

    add(root,'');

    return arr.map(v => parseInt(v, 10)).reduce((p, v)=>p+v, 0)
};