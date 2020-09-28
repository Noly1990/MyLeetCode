// 235. 二叉搜索树的最近公共祖先 https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let theOne = null;
    function process(node) {
        if (!node) return [false, false]
        let s = [node.val === p.val, node.val === q.val];
        let l = process(node.left);
        let r = process(node.right);
        node.flag = [l[0] || r[0] || s[0], l[1] || r[1] || s[1]]
        if (!theOne && node.flag[0] && node.flag[1]) theOne = node
        return node.flag;
    }
    process(root)
    return theOne;
};