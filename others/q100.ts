// 100. 相同的树 https://leetcode-cn.com/problems/same-tree/

import TreeNode from "./TreeNode";

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};