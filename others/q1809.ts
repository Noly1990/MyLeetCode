// 1809 剑指 Offer 42. 连续子数组的最大和  https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/

function maxSubArray(nums: number[]): number {
    let sumArr = [];
    let sum = 0;
    let n = nums.length;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        sumArr[i] = sum;
    }

    return 0
};