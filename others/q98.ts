// 98. 验证二叉搜索树 https://leetcode-cn.com/problems/validate-binary-search-tree/

import TreeNode from "./TreeNode";

function isValidBST(root: TreeNode | null): boolean {
    if (!root) return true;
    if (root.left && root.left.val >= root.val) return false;
    if (root.right && root.right.val <= root.val) return false;
    return isValidBST(root.left) && isValidBST(root.right);
};