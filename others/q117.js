// 117. 填充每个节点的下一个右侧节点指针 II https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node-ii/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root
    let queue = [root];
    while (queue.length > 0) {
        let newQ = [];
        for (let i = 0; i < queue.length; i++) {
            if (queue[i].left) {
                newQ.push(queue[i].left)
            }
            if (queue[i].right) {
                newQ.push(queue[i].right)
            }
            if (queue[i + 1]) {
                queue[i].next = queue[i + 1]
            }
        }
        queue = newQ
    }
    return root;
};