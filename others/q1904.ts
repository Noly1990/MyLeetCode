// 1904 面试题 08.02. 迷路的机器人  https://leetcode-cn.com/problems/robot-in-a-grid-lcci/

function pathWithObstacles(obstacleGrid: number[][]): number[][] {
    let m = obstacleGrid.length;
    if (m === 0) return []
    let n = obstacleGrid[0].length;
    if (n === 0) return [];

    if (obstacleGrid[0][0] === 1) return []
    if (obstacleGrid[m-1][n-1] === 1) return []
    let dp = new Array(m).fill([]).map(() => new Array(n).fill(new Array()));
    dp[0][0] = [[0,0]];
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (i===0 && j===0) continue
            let pre = [];
            if (i === 0) {
                pre = [...dp[i][j-1]]
            } else if (j === 0) {
                pre =  [...dp[i-1][j]]
            } else {
                pre = dp[i][j-1].length>= dp[i-1][j].length?[...dp[i][j-1]]:[...dp[i-1][j]]
            }
            pre.push([i, j])
            dp[i][j] = pre.length === 1 || obstacleGrid[i][j]===1?[]:pre
        }
    }

    return dp[m-1][n-1]
};