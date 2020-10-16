// 142. 环形链表 II https://leetcode-cn.com/problems/linked-list-cycle-ii/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return null;
    let set = new Set();
    let r = head;
    while(r.next) {
        if (set.has(r.next)) {
            return r.next
        } else {
            set.add(r.next)
            r=r.next
        }
    }
    return null
};