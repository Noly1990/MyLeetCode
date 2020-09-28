//62. 不同路径 https://leetcode-cn.com/problems/unique-paths/

function uniquePaths(m: number, n: number): number {
    if (m === 0 && n === 0) return 0;
    if (m === 1 && n === 1) return 1;
    const dp:number[][] = new Array(m).fill([]).map(() => new Array(n).fill(1));
    dp[0][0] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};