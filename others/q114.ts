//  114. 二叉树展开为链表 https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/

import TreeNode from "./TreeNode";

function flatten(root: any): void {
    
    if (root === null) return
    const newNode = new TreeNode();
    let recent = newNode;
    function preorder(node: TreeNode | null) {
        if (!node) return
        recent.right = new TreeNode(node.val);
        recent=recent.right;
        if (node.left) preorder(node.left)
        if (node.right) preorder(node.right)
    }
    preorder(root)
    if (root) {
        root.left = null
        root.right = newNode?.right?.right;
    }

};