// 234. 回文链表 https://leetcode-cn.com/problems/palindrome-linked-list/

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

function isPalindrome(head: ListNode | null): boolean {
    if (!head) return true;

    let arr: number[] = [];
    let recent = head;
    while (recent) {
        arr.push(recent.val);
        recent = recent.next;
    }


    let begin = 0;
    let end = arr.length - 1;

    while (begin < end) {
        if (arr[begin] !== arr[end]) return false;
        begin++;
        end--;
    }

    return true;
};