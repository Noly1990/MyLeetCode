// 485. 最大连续1的个数 https://leetcode-cn.com/problems/max-consecutive-ones/

function findMaxConsecutiveOnes(nums: number[]): number {
    let max = 0;
    let temp = 0;
    for (let i=0;i<nums.length;i++) {
        if (nums[i] === 1) {
            temp ++
        } else {
            if (temp > max) {
                max = temp
            }
            temp = 0;
        }
    }
    return max;
};