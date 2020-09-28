// 1647 面试题 08.03. 魔术索引  https://leetcode-cn.com/problems/magic-index-lcci/

function findMagicIndex(nums: number[]): number {
    for (let i=0;i<nums.length;i++) {
        if (nums[i]=== i) return i;
    }
    return -1;
};