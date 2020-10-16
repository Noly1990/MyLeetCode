// 141. 环形链表 https://leetcode-cn.com/problems/linked-list-cycle/

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

function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) return false;
    let set = new Set();
    let r = head;
    while(r.next) {
        if (set.has(r.next)) {
            return true
        } else {
            set.add(r.next)
            r=r.next
        }
    }
    return false;
};