// 643. 子数组最大平均数 I https://leetcode-cn.com/problems/maximum-average-subarray-i/

function findMaxAverage(nums: number[], k: number): number {


    let sum = nums.slice(0, k).reduce((p, v) => p + v, 0);
    let maxAverage = sum / k;
    let left = 0;
    let right = k;
    while (right < nums.length) {
        sum = sum - nums[left] + nums[right];
        maxAverage = Math.max(maxAverage, sum / k)
        left++;
        right++
    }

    return maxAverage
};