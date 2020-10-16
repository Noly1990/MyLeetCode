// 24. 两两交换链表中的节点 https://leetcode-cn.com/problems/swap-nodes-in-pairs/

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

function swapPairs(head: ListNode | null): ListNode | null {

    if (!head) return null;

    if (!head.next) return head;
    
    let theNewHead = head.next;

    head.next = theNewHead.next

    theNewHead.next = head;

    if (head.next) {
        let theFirst: ListNode | null = head.next;
        let theBefore: ListNode | null  = head;
        
        while (theFirst) {
            let theSecond: ListNode | null = theFirst.next;
            if (theSecond) {
                let theAfter: ListNode | null  = theSecond.next;
                theBefore.next = theSecond;
                theSecond.next = theFirst;
                theFirst.next = theAfter;
                theBefore = theFirst;
                theFirst = theAfter;
            } else {
                theFirst = null;
            }
        }
    }

    return theNewHead;

};