// 106. 从中序与后序遍历序列构造二叉树 https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {

    if (inorder.length === 0 || postorder.length === 0) return null;

    if (inorder.length === 1 || postorder.length === 1) return new TreeNode(inorder[0])

    let v = postorder[postorder.length - 1];

    let vIndex = inorder.indexOf(v);

    let node = new TreeNode(v);

    node.left = buildTree(inorder.slice(0, vIndex), postorder.slice(0, vIndex))

    node.right = buildTree(inorder.slice(vIndex + 1), postorder.slice(vIndex, postorder.length - 1))

    return node;
};