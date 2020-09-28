// 968. 监控二叉树  https://leetcode-cn.com/problems/binary-tree-cameras/

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

function minCameraCover(root: TreeNode | null): number {
    if (!root) return 1;

    let map: Map<TreeNode, number[]> = new Map()

    function getIndex(parent: boolean, isForce: boolean) {
        if (parent) {
            if (isForce) return 0
            return 1
        } else {
            if (isForce) return 2
            return 3
        }
        return 4
    }

    function process(node: TreeNode, parent: boolean, isForce: boolean): number {
        let index = getIndex(parent, isForce);
        let arr = map.get(node);
        if (!arr) {
            map.set(node, [])
        } else {
            if (arr[index] !== undefined) return arr[index]
        }
        let v = 0;
        if (isForce) {
            v = 1;
            if (node.left) {
                v += process(node.left, true, false)
            }
            if (node.right) {
                v += process(node.right, true, false)
            }
            let a = map.get(node) || [];
            a[index] = v;
            return v;
        }
        if (!node.left && !node.right && !parent) {
            v = 1;
        }
        if (node.left && !node.right && !parent) {
            v = Math.min(process(node.left, false, true), process(node.left, true, false) + 1);
        }
        if (node.left && !node.right && parent) {
            v = Math.min(process(node.left, false, false), process(node.left, true, false) + 1)
        }
        if (node.right && !node.left && !parent) {
            v = Math.min(process(node.right, false, true), process(node.right, true, false) + 1)
        }
        if (node.right && !node.left && parent) {
            v = Math.min(process(node.right, false, false), process(node.right, true, false) + 1)
        }
        if (node.left && node.right && parent) {
            v = Math.min(process(node.left, false, false) + process(node.right, false, false), 1 + process(node.left, true, false) + process(node.right, true, false))
        }
        if (node.left && node.right && !parent) {
            v = Math.min(process(
                node.left, true, false) + process(node.right, true, false) + 1,
                process(node.left, false, true) + process(node.right, false, false),
                process(node.left, false, false) + process(node.right, false, true),
            )
        }
        arr = map.get(node) || [];
        arr[index] = v;
        return v
    }
    return Math.min(process(root, false, false))
};