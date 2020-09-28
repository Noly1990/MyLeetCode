// 104. 二叉树的最大深度 https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/

import TreeNode from "./TreeNode";

function maxDepth(root: TreeNode | null): number {
    return root === null ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};