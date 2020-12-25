// 746. 使用最小花费爬楼梯 https://leetcode-cn.com/problems/min-cost-climbing-stairs/

function minCostClimbingStairs(cost: number[]): number {
    if (cost.length < 2) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);
    let dp = [0, 0];
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = Math.min(dp[i -1] + cost[i-1], dp[i-2]+cost[i-2]) 
    }
    return dp[dp.length -1]
};