// 530. 二叉搜索树的最小绝对差 https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/

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


function getMinimumDifference(root: TreeNode | null): number {

    let arr: number[] = []

    function midOrder(node: TreeNode | null) {
        if (!node) return
        if (node.left) midOrder(node.left)
        arr.push(node.val)
        if (node.right) midOrder(node.right)
    }

    midOrder(root);

    let min = Number.MAX_SAFE_INTEGER;

    for (let i = 1; i < arr.length; i++) {
        let temp = Math.abs(arr[i] - arr[i - 1])
        if (temp < min) min = temp
    }
    return min;
};


function getMinimumDifference2(root: TreeNode | null): number {

    let pre: number | undefined = undefined;

    let min = Number.MAX_SAFE_INTEGER;

    if (!root) return 0

    function midOrder(node: TreeNode | null) {  
        if (!node) return
        if (node.left) midOrder(node.left)
        if (pre!==undefined) {
            let temp = Math.abs(node.val - pre)
            if (temp < min) min = temp
        }

        pre = node.val
        if (node.right) midOrder(node.right)
    }

    if (root.left) midOrder(root.left)
    if (pre!==undefined) {
        let temp = Math.abs(root.val - pre)
        if (temp < min) min = temp
    }

    pre = root.val
    if (root.right) midOrder(root.right)

    return min;
};