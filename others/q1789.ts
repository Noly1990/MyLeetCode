// 1789 剑指 Offer 24. 反转链表 https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/

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

function reverseList(head: ListNode | null): ListNode | null {
    if (!head) return head;

    if (!head.next) return head;

    let recent = head.next;
    head.next = null;

    while (recent) {
        let next = recent.next;
        recent.next = head;
        head = recent;
        recent = next;
    }
    return head;
};