// 78. 子集 https://leetcode-cn.com/problems/subsets/

function subsets(nums: number[]): number[][] {
    let dp: number[][][] = [[[]]];
    for (let i = 1; i <= nums.length; i++) {
        let r = dp[i - 1].map(v => v.concat([nums[i-1]]))
        dp[i] = dp[i - 1].concat(r);
    }
    return dp[nums.length]
};

console.log(subsets([1, 2, 3]))