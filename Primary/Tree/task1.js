// 二叉树的最大深度

// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    if (!root.left && !root.right) {
      return 1
    } else if (!root.left) {
      return maxDepth(root.right)+1
    } else if (!root.right) {
      return maxDepth(root.left)+1
    } else {
      return bigger(maxDepth(root.right),maxDepth(root.left))+1
    }
};

function bigger(a,b) {
  if (a>b) {
    return a;
  } else {
    return b;
  }
}