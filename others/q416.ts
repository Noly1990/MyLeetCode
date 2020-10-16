// 416. 分割等和子集 https://leetcode-cn.com/problems/partition-equal-subset-sum/

function canPartition(nums: number[]): boolean {
    let len = nums.length;
    if (len < 2) return false;

    let sum = nums.reduce((p, c) => p + c, 0);

    if (sum % 2 !== 0) return false;

    let target = sum / 2;

    nums.sort((a, b) => b - a);

    if (nums[0] > target) return false;

    for (let i = 0; i < len; i++) {
        if (nums[i] === target) return true;
        if (dfs(i, nums[i])) return true
    }
    function dfs(i: number, cur: number): boolean {
        for (let j = i + 1; j < len; j++) {
            if (cur + nums[j] == target) return true;
            if (cur + nums[j] > target) continue;
            if (dfs(j, cur + nums[j])) return true;
        }
        return false;
    }
    return false;
};

function canPartition2(nums: number[]): boolean {
    const n = nums.length;
    if (n < 2) {
        return false;
    }
    let sum = 0, maxNum = 0;
    for (const num of nums) {
        sum += num;
        maxNum = maxNum > num ? maxNum : num;
    }
    if (sum & 1) {
        return false;
    }
    const target = Math.floor(sum / 2);
    if (maxNum > target) {
        return false;
    }
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j >= num; --j) {
            dp[j] |= dp[j - num];
        }
    }
    return dp[target];
}


