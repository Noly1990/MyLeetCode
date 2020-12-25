// 103. 二叉树的锯齿形层序遍历 https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/

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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let queue: TreeNode[] = [root];
    let ans: number[][] = [[root.val]];
    let index = 1;
    while (queue.length > 0) {
        let temp = [];
        let vArr = []
        for (let node of queue) {
            if (node.left) {
                temp.push(node.left);
                if (index % 2 !== 0) {
                    vArr.unshift(node.left.val)
                } else {
                    vArr.push(node.left.val)
                }
            }
            if (node.right) {
                temp.push(node.right);
                if (index % 2 !== 0) {
                    vArr.unshift(node.right.val)
                } else {
                    vArr.push(node.right.val)
                }
            }
        }
        if (vArr.length > 0) {
            ans.push(vArr);
        }
        queue = temp;
        index++;
    }
    return ans;
};