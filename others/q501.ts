//  501. 二叉搜索树中的众数 https://leetcode-cn.com/problems/find-mode-in-binary-search-tree/

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

function findMode(root: TreeNode | null): number[] {
    if (!root) return []
    let res: any = {}
    let maxCount = 0
    let r: number[] = []

    function process(node: TreeNode | null) {
        res[node.val] = (res[node.val] || 0) + 1
        if (res[node.val] >= maxCount) {
            if (res[node.val] > maxCount) r = []
            maxCount = res[node.val]
            r.push(node.val)
        }
        if (node.left) process(node.left)
        if (node.right) process(node.right)
    }
    process(root)
    return r
};