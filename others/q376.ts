// 376. 摆动序列 https://leetcode-cn.com/problems/wiggle-subsequence/

function wiggleMaxLength(nums: number[]): number {
    if (nums.length <= 2) return nums.length;
    let up: number = 1, down: number = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1])
            up = down + 1
        if (nums[i] < nums[i - 1])
            down = up + 1
    }

    return Math.max(up, down)
};