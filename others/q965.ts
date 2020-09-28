// 965. 单值二叉树 https://leetcode-cn.com/problems/univalued-binary-tree/

import TreeNode from "./TreeNode";

function isUnivalTree(root: TreeNode | null): boolean {
    if (!root) return false;
    const v = root.val;
    let r = true;
    function check(node: TreeNode) {
        if (!r) return
        if (node.val !== v) r = false;
        if (node.left) check(node.left)
        if (node.right) check(node.right)
    }
    check(root)
    return r;
};

