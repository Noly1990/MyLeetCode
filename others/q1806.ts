// 1806 剑指 Offer 39. 数组中出现次数超过一半的数字 https://leetcode-cn.com/problems/shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof/
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