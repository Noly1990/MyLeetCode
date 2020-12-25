// 217. 存在重复元素 https://leetcode-cn.com/problems/contains-duplicate/

function containsDuplicate(nums: number[]): boolean {
    return new Set(nums).size === nums.length;    
};