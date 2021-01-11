// 1591 移除重复节点 https://leetcode-cn.com/problems/remove-duplicate-node-lcci/

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

function removeDuplicateNodes(head: ListNode | null): ListNode | null {
    let store: number[] = [];
    if (head && head.next) {
        store[head.val] = 1;
        let recent: ListNode | null = head.next;
        let parent: ListNode | null = head;
        
        while(recent) {
            if (store[recent.val] !== undefined) {
                parent.next = recent.next;
                recent = recent.next;
            } else {
                store[recent.val] = 1;
                parent = recent;
                recent =recent.next;
            }
        }
    }
    return head;
};