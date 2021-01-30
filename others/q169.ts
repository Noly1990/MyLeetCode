// 169. 多数元素 https://leetcode-cn.com/problems/majority-element/

function majorityElement(nums: number[]): number {
    let count = 1;
    let aim = nums[0];
    let n = nums.length;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === aim) count++
        else {
            count--;
            if (count === 0) {
                aim = nums[i];
                count = 1;
            }
        }
        if (count > n / 2) break
    }
    return aim
};