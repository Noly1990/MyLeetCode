// 86. 分隔链表 https://leetcode-cn.com/problems/partition-list/

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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head || !head.next) return head;
    
    let recent = head;
    let negaHead = null;
    let posiHead = null;
    let neH: ListNode | null = null;
    let poH: ListNode | null = null;
    while(recent) {
        if (recent.val < x) {
            if (!negaHead) {
                negaHead = recent;
                neH = negaHead;
            } else {
                neH.next = recent;
                neH = recent;
            }
        } else {
            if (!posiHead) {
                posiHead = recent;
                poH = posiHead;
            } else {
                poH.next = recent;
                poH = recent;
            }
        }
        recent = recent.next
    }
    if (poH) poH.next = null;
    if (negaHead) {
        neH.next = posiHead;
    }
    return negaHead?negaHead:posiHead
};