// 63. 不同路径 II https://leetcode-cn.com/problems/unique-paths-ii/

function uniquePathsWithObstacles(obstacleGrid: number[][]): number {

    const m = obstacleGrid.length;
    const n = obstacleGrid[0] ? obstacleGrid[0].length : 0;

    if (m === 0 && n === 0) return 0;
    if (m === 1 && n === 1) return obstacleGrid[0][0] === 0 ? 1 : 0;
    const dp: number[][] = [];

    for (let i = 0; i < m; i++) {
        let t = [];
        for (let j = 0; j < n; j++) {
            t.push(0)
        }
        dp.push(t);
    }
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    dp[0][0] = 1;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
                continue
            }
            if (i === 0) {
                dp[i][j] = dp[i][j - 1];
                continue;
            }
            if (j === 0) {
                dp[i][j] = dp[i-1][j];
                continue;
            }
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};


console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0], [0, 0, 0]]))