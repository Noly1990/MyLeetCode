// 215. 数组中的第K个最大元素 https://leetcode-cn.com/problems/kth-largest-element-in-an-array/

function findKthLargest(nums: number[], k: number): number {
    nums.sort((a, b) => a- b);

    return nums[nums.length - k];
};