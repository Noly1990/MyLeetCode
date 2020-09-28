// 1673 面试题 04.04. 检查平衡性  https://leetcode-cn.com/problems/check-balance-lcci/

import TreeNode from "./TreeNode";

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;

    function nodeDepth(node: TreeNode | null) {
        if (!node) return 0;
        node.val = Math.max(nodeDepth(node.left), nodeDepth(node.right)) + 1
        return node.val;
    }

    nodeDepth(root.left);
    nodeDepth(root.right)

    function myBalance(root: TreeNode | null) {
        if (!root) return true;
        if (Math.abs(root.left.val - root.right.val) > 1) {
            return false
        }

        return myBalance(root.left) && myBalance(root.right)
    }
    

    return myBalance(root);
};

function isBalanced2(root: TreeNode | null): boolean {
    if (!root) return true;
    if (Math.abs(nodeDepth(root.left) - nodeDepth(root.right)) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right);
};

function nodeDepth(node: TreeNode | null): number {
    if (!node) return 0;
    return Math.max(nodeDepth(node.left), nodeDepth(node.right)) + 1;
}

