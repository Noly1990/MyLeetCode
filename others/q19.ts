// 19. 删除链表的倒数第N个节点 https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (!head) return null;
    if (!head.next && n === 1) return null;
    let arr:ListNode[] = [];
    let index = 0;
    let r:ListNode|null = head;
    while(r) {
        arr[index] = r;
        index++;
        r = r.next;
    }
    if (n===index) {
        return head.next;
    } else {
        arr[index-n-1].next = arr[index-n+1] || null
    }
    return head;
};