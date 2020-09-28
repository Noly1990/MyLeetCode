// 637. 二叉树的层平均值 https://leetcode-cn.com/problems/average-of-levels-in-binary-tree/

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

function averageOfLevels(root: TreeNode | null): number[] {
    let arr: number[] = [];

    let nodes = [root];
    let index = 0;

    while (nodes.length > 0) {
        let temp = [];
        let num = 0;
        let total = 0;
        for (let p of nodes) {
            total += p.val;
            num++;
            if (p.left) temp.push(p.left)
            if (p.right) temp.push(p.right);
        }
        arr[index] = total / num;
        nodes = temp;
    }

    return arr
};