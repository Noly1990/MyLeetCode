import TreeNode from "./TreeNode";

// 111. 二叉树的最小深度 https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
function minDepth(root: TreeNode | null): number {
    if (!root) return 0;
    if (root.left && !root.right) return 1+ minDepth(root.left)
    if (root.right && !root.left) return 1+minDepth(root.right)
    return 1 + Math.min(minDepth(root.left),minDepth(root.right))
};