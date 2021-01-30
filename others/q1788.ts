// 1788 剑指 Offer 22. 链表中倒数第k个节点 https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/

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

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let index = k;
    let slow = head;
    let quick = head;
    while(index>0 && quick) {
        quick = quick.next;
        index--;
    }

    if (index > 0) return null;

    while(slow && quick) {
        slow  =slow.next;
        quick = quick.next;
    }

    return slow
};