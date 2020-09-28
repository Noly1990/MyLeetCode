// 2. 两数相加 https://leetcode-cn.com/problems/add-two-numbers/
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 || !l2) return l1 || l2;
    let head = new ListNode(0);
    let r = head;
    let up = 0;
    while (l1 || l2) {
        let v1 = l1 ? l1.val : 0;
        let v2 = l2 ? l2.val : 0;
        let sum = v1 + v2 + up;
        if (sum >= 10) {
            sum = sum - 10;
            up = 1;
        } else {
            up = 0;
        }
        const temp = new ListNode(sum)
        r.next = temp;
        r = r.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (up) {
        r.next = new ListNode(1);
    }
    return head.next;
};