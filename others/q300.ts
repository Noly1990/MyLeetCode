// 300. 最长上升子序列 https://leetcode-cn.com/problems/longest-increasing-subsequence/ 

function lengthOfLIS(nums: number[]): number {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;
    const dp: number[] = [];
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= nums.length; i++) {
        let max = 1;
        for (let j = i - 2; j >= 0; j--) {
            if (nums[i - 1] > nums[j]) {  
               max = Math.max(dp[j+1] + 1, max)
            }
        }
        dp[i] = max;
    }
    return Math.max(...dp);
};


console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])) // 4
console.log(lengthOfLIS([-2, -1])) // 2
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])) // 6
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9]))// 3