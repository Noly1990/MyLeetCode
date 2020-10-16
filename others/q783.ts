// 783. 二叉搜索树节点最小距离 https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/

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

function minDiffInBST(root: TreeNode | null): number {
    
    let arr:number[] = []

    function midOrder(node: TreeNode | null) {
        if (!node) return
        if (node.left) midOrder(node.left)
        arr.push(node.val)
        if (node.right) midOrder(node.right)
    }

    midOrder(root);

    let min = Number.MAX_SAFE_INTEGER;

    for (let i=1;i<arr.length;i++) {
        let temp = Math.abs(arr[i] - arr[i-1]) 
        if (temp < min) min = temp
    }
    return min;
};