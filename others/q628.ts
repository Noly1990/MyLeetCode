// 628. 三个数的最大乘积 https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
function maximumProduct(nums: number[]): number {
    let len = nums.length;
    nums.sort((a, b) => a - b);
    if (nums[len - 1] <= 0) return nums[len - 1] * nums[len - 2] * nums[len - 3];

    if (nums[0] >= 0) return nums[len - 1] * nums[len - 2] * nums[len - 3];

    let negaTwo = nums[0] * nums[1]* nums[len - 1];

    let posiTwo = nums[len - 1] * nums[len - 2]* nums[len - 3];

    return Math.max(negaTwo, posiTwo)
};