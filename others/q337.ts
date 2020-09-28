// 337. 打家劫舍 III https://leetcode-cn.com/problems/house-robber-iii/
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

import TreeNode from "./TreeNode";

function rob(root: TreeNode | null): number {
    const tMap: Map<any, number> = new Map();
    const fMap: Map<any, number> = new Map();
    function process(node: TreeNode | null, parent: boolean): number {
        if (!node) return 0;
        if (parent) {
            if (tMap.has(node)) return tMap.get(node) || 0;
            tMap.set(node, process(node.left, false) + process(node.right, false))
            return tMap.get(node) || 0;
        } else {
            if (fMap.has(node)) return fMap.get(node) || 0;
            let pick = node.val + process(node.left, true) + process(node.right, true)
            let notPick = process(node.left, false) + process(node.right, false);
            fMap.set(node, Math.max(pick, notPick))
            return fMap.get(node) || 0;
        }
    }

    return Math.max(process(root, true), process(root, false))
};