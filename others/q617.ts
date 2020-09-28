//617. 合并二叉树 https://leetcode-cn.com/problems/merge-two-binary-trees/

import TreeNode from "./TreeNode";

function mergeTrees(t1: TreeNode | null, t2: TreeNode | null): TreeNode | null {
    if (!t1) return t2
    function process(node1: TreeNode | null, node2: TreeNode | null) {
        if (node1 && node2) {
            node1.val = node2.val + node1.val

            if (!node1.left && node2.left) {
                node1.left = node2.left
            } else {
                process(node1.left, node2.left)

            }
            if (!node1.right && node2.right) {
                node1.right = node2.right;
            } else {
                process(node1.right, node2.right)
            }
        }
    }

    process(t1, t2)

    return t1
};