// 64. 最小路径和 https://leetcode-cn.com/problems/minimum-path-sum/
function minPathSum(grid: number[][]): number {
    if (grid.length === 0) return 0;
    const m = grid.length;
    const n = grid[0].length;
    if (n === 0) return 0;
    const dp: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (i === 0) {
                dp[i][j] = dp[i][j - 1] + grid[i][j];
                continue
            }
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + grid[i][j];
                continue;
            }
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
            continue
        }
    }

    return dp[m - 1][n - 1];
};

console.log(minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1]
]))