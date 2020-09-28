import TreeNode from "./TreeNode";

// 1750 面试题 17.12. BiNode  https://leetcode-cn.com/problems/binode-lcci/
function convertBiNode(root: TreeNode | null): TreeNode | null {

    let head = new TreeNode();
    let recent = head;
    function midOrder(node: TreeNode | null) {
        if (!node) return
        if (node.left) midOrder(node.left)
        recent.right = node;
        node.left = null;
        recent = recent.right
        if (node.right) midOrder(node.right)
    }

    midOrder(root)
    return head.right;
};