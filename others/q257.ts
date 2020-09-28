// 257. 二叉树的所有路径 https://leetcode-cn.com/problems/binary-tree-paths/

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

function binaryTreePaths(root: TreeNode | null): string[] {
    if (!root) return [];
    let ans:string[] = [];

    function process(node: TreeNode | null, prefix: string) {
        if (!node) return
                if (!node.left && !node.right) {
            ans.push(prefix + node.val);
            return
        }
        if (node.left) process(node.left, `${prefix}${node.val}->`)
        if (node.right) process(node.right, `${prefix}${node.val}->`)

    }
 if (!root.left && !root.right) {
            ans.push(root.val +'')
        }
    if (root.left) process(root.left, `${root.val}->`)
    if (root.right) process(root.right, `${root.val}->`)
    
    return ans;
};