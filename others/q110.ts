// 110. 平衡二叉树 https://leetcode-cn.com/problems/balanced-binary-tree/

import TreeNode from "./TreeNode";

function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;

    function nodeDepth(node: TreeNode | null): number {
        if (!node) return 0;
        return Math.max(nodeDepth(node.left), nodeDepth(node.right)) + 1;
    }
    if (Math.abs(nodeDepth(root.left) - nodeDepth(root.right)) > 1) {
        return false
    }
    return isBalanced(root.left) && isBalanced(root.right);
};


