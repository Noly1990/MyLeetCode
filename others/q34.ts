// 34. 在排序数组中查找元素的第一个和最后一个位置 https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/

function searchRange(nums: number[], target: number): number[] {
    if (nums.length === 0) return [-1, -1];
    let left = -1;
    let right = -1;
    for (let i =0;i<nums.length;i++) {
        if (target === nums[i] && left === -1) {
            left = i;
            right = i;
        }

        if (target === nums[i]) {
            right = i;
        }



        if (target < nums [i]) return [left, right];
    }

    return [left, right]
};