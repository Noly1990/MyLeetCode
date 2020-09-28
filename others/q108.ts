// 108. 将有序数组转换为二叉搜索树 https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/

import TreeNode from "./TreeNode";

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) return null;
    if (nums.length === 1) return new TreeNode(nums[0], null, null);
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

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]))

console.log(sortedArrayToBST([1, 3]))