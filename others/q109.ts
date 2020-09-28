// 109. 有序链表转换二叉搜索树 https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/

import TreeNode from "./TreeNode";

function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (head === null) return null;
    else if (head.next === null) return new TreeNode(head.val);
    let pre: ListNode = head;
    let point1 = head.next;
    let point2 = head.next.next;
    while (point2 !== null && point2.next !== null) {
        if (pre.next !== null) {
            pre = pre.next ;
            if (pre.next !== null) point1 = pre.next;
        }
        point2 = point2.next.next;
    }
    pre.next = null;
    const root = new TreeNode(point1.val);
    root.left = sortedListToBST(head);
    root.right = sortedListToBST(point1.next);
    return root;
};

function sortedListToBST2(head: ListNode | null): TreeNode | null {
    if (head === null) return null;
    else if (head.next === null) return new TreeNode(head.val);
    const nums = []
    while (head) {
        nums.push(head.val);
        head = head.next;
    }
    if (nums.length === 2) return new TreeNode(nums[1], new TreeNode(nums[0], null, null), null);
    if (nums.length === 3) return new TreeNode(nums[1], new TreeNode(nums[0], null, null), new TreeNode(nums[2], null, null));
    const len = nums.length;
    const mid = Math.floor(len / 2);
    const root = new TreeNode(nums[mid], build(0, mid - 1), build(mid + 1, len - 1))

    function build(b: number, e: number): TreeNode {
        if (e - b === 2) {
            return new TreeNode(nums[b + 1], new TreeNode(nums[b], null, null), new TreeNode(nums[b + 2], null, null));
        }
        if (e - b === 1) {
            return new TreeNode(nums[b + 1], new TreeNode(nums[b], null, null), null);
        }
        if (e === b) {
            return new TreeNode(nums[b], null, null);
        }
        let midd = Math.floor((b + e) / 2);
        return new TreeNode(nums[midd], build(b, midd - 1), build(midd + 1, e))
    }

    return root;

};