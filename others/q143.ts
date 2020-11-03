// 143. 重排链表  https://leetcode-cn.com/problems/reorder-list/

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
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (!head) return
    let arr: ListNode[] = [];
    let r = head.next
    while (r) {
        arr.push(r);
        r = r.next;
    }
    let flag = true;
    r = head;
    while (arr.length > 0) {
        let node = flag ? arr.pop() : arr.shift();
        r.next = node;
        r = r.next;
        flag = !flag;
    }
};