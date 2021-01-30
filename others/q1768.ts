// 1768 剑指 Offer 03. 数组中重复的数字 https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/


function findRepeatNumber(nums: number[]): number {
    let set = new Set();

    for (let i=0;i<nums.length;i++) {
        if (set.has(nums[i])) return nums[i]
        set.add(nums[i])
    }

    return -1
};