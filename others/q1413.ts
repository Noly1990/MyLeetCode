//1413. 逐步求和得到正数的最小值 https://leetcode-cn.com/problems/minimum-value-to-get-positive-step-by-step-sum/

function minStartValue(nums: number[]): number {
    let sum = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        sum = sum - nums[i] > 0?sum - nums[i] : 1;
    }
    return sum > 0 ? sum : 1;
};

console.log(minStartValue([-3,2,-3,4,2]))