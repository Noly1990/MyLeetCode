// 148. 排序链表 https://leetcode-cn.com/problems/sort-list/

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    let arr:ListNode[] = [];
    let r:ListNode|null = head
    while(r) {
        arr.push(r);
        r = r.next;
    }

    arr.sort((a, b) => a.val - b.val);
    let newHead = arr[0];
    for (let i=1;i<arr.length;i++) {
        newHead.next = arr[i];
        newHead = newHead.next
    }
    arr[arr.length-1].next = null;

    return  arr[0]
};