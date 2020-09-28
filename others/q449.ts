// 449. 序列化和反序列化二叉搜索树  https://leetcode-cn.com/problems/serialize-and-deserialize-bst/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import TreeNode from "./TreeNode";

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return '';
    let arr = []
    function pre(node) {
        if (node) {
            arr.push(node.val)
        }
        if (node.left) {
            pre(node.left)
        }


        if (node.right) {
            pre(node.right)
        }
    }
    pre(root)
    return arr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) return null;
    let arr = data.split(',').map(v => parseInt(v, 10));
    let root = new TreeNode(arr[0]);
    function createNode(node, b, e) {
        let f = arr[b];
        if (f < node.val) {
            node.left = new TreeNode(f);
            if (e - b > 0) {
                let bigIndex = -1;
                for (let i = b + 1; i <= e; i++) {
                    if (arr[i] > node.val) {
                        bigIndex = i
                        break;
                    }
                }
                if (bigIndex > -1) {
                    if (bigIndex - b > 1) {
                        createNode(node.left, b + 1, bigIndex - 1)
                    }

                    node.right = new TreeNode(arr[bigIndex])
                    if (e - bigIndex > 0) {
                        createNode(node.right, bigIndex + 1, e)
                    }

                } else {
                    createNode(node.left, b + 1, e)
                }
            }
        } else {
            node.right = new TreeNode(f);
            if (e - b > 0) {
                createNode(node.right, b + 1, e)
            }

        }
    }

    if (arr.length > 1) {
        createNode(root, 1, arr.length - 1)
    }

    return root;
};
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
let s = serialize(new TreeNode(12, new TreeNode(11), new TreeNode(13)));


console.log(s)

console.log(deserialize
    (s))

    console.log(deserialize("12,13,14"))