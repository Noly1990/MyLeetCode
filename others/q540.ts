// 540. 有序数组中的单一元素 https://leetcode-cn.com/problems/single-element-in-a-sorted-array/

function singleNonDuplicate(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    for (let i=0;i< nums.length;i++) {
        if (nums[i] === nums[i+1]) {
            i++;
        } else {
            return nums[i]
        }
    }
    return 0;
};