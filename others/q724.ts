// 724. 寻找数组的中心索引 https://leetcode-cn.com/problems/find-pivot-index/

function pivotIndex(nums: number[]): number {
    let sum = nums.reduce((p, v) => p + v, 0);
    let left = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum - left - nums[i] === left) return i;
        left += nums[i]
    }
    return -1;
};