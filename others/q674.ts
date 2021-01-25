// 674. 最长连续递增序列 https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/


function findLengthOfLCIS(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    let maxLen = 1;
    let temp = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            temp++;

        } else {
            if (temp > maxLen) {
                maxLen = temp
            }
            temp = 1;
        }
    }
    if (temp > maxLen) {
        maxLen = temp
    }
    return maxLen;
};