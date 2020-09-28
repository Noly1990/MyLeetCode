// 113. 路径总和 II  https://leetcode-cn.com/problems/path-sum-ii/

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

function pathSum(root: TreeNode | null, sum: number): number[][] {
    if (!root) return [];

    if (!root.left && !root.right && root.val === sum) return [[root.val]];


    let left =  pathSum(root.left, sum - root.val);
    left.forEach(v => v.unshift(root.val));

    let right = pathSum(root.right, sum - root.val);
    right.forEach(v => v.unshift(root.val));

    return left.concat(right)

};