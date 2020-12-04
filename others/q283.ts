// 283. 移动零 https://leetcode-cn.com/problems/move-zeroes/

/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1)[0])
            i--;
            len--;
        }
    }
};