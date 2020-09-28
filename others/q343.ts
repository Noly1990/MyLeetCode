// 343. 整数拆分 https://leetcode-cn.com/problems/integer-break/

function integerBreak(n: number): number {
    // 7   2 2 3
    // 8   2 3 3
    // 9    3 3 3
    // 10   3 3 4
    // 11   3 4 4 
    // 12   3 3 3 3 
    // 13   3 3 3 4
    // 14   3 3 4 4
    // 15   3 3 3 3 3
    const dp: number[] = [];
    dp[2] = 1;
    dp[3] = 2;
    dp[4] = 4;
    dp[5] = 6;
    dp[6] = 9;
    for (let i = 7; i <= n; i++) {
        dp[i] = 3 * dp[i - 3]
    }


    return dp[n];
};

console.log(integerBreak(30))