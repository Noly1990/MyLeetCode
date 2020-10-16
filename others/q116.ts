// 116. 填充每个节点的下一个右侧节点指针  https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

namespace Q116 {
    export class Node {
        val: number
        left: Node | null
        right: Node | null
        next: Node | null
        constructor(val?: number, left?: Node, right?: Node, next?: Node) {
            this.val = (val === undefined ? 0 : val)
            this.left = (left === undefined ? null : left)
            this.right = (right === undefined ? null : right)
            this.next = (next === undefined ? null : next)
        }
    }

    export function connect(root: Node | null): Node | null {
        if (!root) return null;
        root.next = null;
        if (root.left && root.right) {

        }

         function process(node: Node | null) {
            if (!node || !node.left || !node.right) return

            node.left.next = node.right;
            if (node.next) {
                node.right.next = node.next.left;
            } else {
                node.right.next = null;
            }
            process(node.left)
            process(node.right)
        }

        process(root)

        return root
    };
}

