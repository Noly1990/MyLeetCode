// 164. 最大间距 https://leetcode-cn.com/problems/maximum-gap/

function maximumGap(nums: number[]): number {
    if (nums.length < 2) return 0;
    if (nums.length === 2) return Math.abs(nums[0] - nums[1]);

    nums.sort((a, b) => a-b);

    let max = 0;
    for (let i=1;i<nums.length;i++) {
        if (nums[i] - nums[i-1] > max) {
            max = nums[i] - nums[i-1];
        }
    }

    return max;
};