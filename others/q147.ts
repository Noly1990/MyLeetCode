// 147. 对链表进行插入排序 https://leetcode-cn.com/problems/insertion-sort-list/

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

function insertionSortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    let newHead = head, newTail = head;
    let walker
    let walkerNext
    let cur = head;
    let curNext: ListNode | null = head.next
    let cnt = 0;
    while (newTail.next) {
        cnt++;
        cur = newTail.next;
        walker = newHead;
        // 小于头节点
        if (cur.val < newHead.val) {
            newTail.next = cur.next;
            cur.next = newHead;
            newHead = cur;
            continue;
        }
        // 大于或等于最后一个已排序节点
        if (cur.val >= newTail.val) {
            newTail = cur;
            continue;
        }
        // 处于已排序头尾节点之间
        for (let i = 1; i < cnt; i++) {
            if (cur && walker && walker.next && cur.val < walker.next.val) {
                walkerNext = walker.next;
                curNext = cur.next;
                walker.next = cur;
                cur.next = walkerNext;
                newTail.next = curNext;
                break;
            }
            walker = walker ? walker.next : null;
        }
    }
    return newHead;
};