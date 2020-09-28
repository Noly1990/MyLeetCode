// 1463. 摘樱桃 II https://leetcode-cn.com/problems/cherry-pickup-ii/

function cherryPickup(grid: number[][]): number {
    let height = grid.length;
    let len = grid[0].length;
    if (len === 2 && height === 2) return grid[0][0] + grid[0][1] + grid[1][0] + grid[1][1];

    const dp: number[][][] = new Array(height).fill(1).map(() => new Array(len).fill(1).map(() => new Array(len).fill(0)));

    dp[0][0][len - 1] = grid[0][0] + grid[0][len - 1];

    for (let i = 1; i < height; i++) {
        for (let j = 0; j <= i && j < len; j++) {
            for (let k = len - 1; k >= len - i - 1 && k >= 0; k--) {
                if (k === j) continue
                let t = [];
                t.push(dp[i - 1][j][k]);
                let x = [j, j + 1, j - 1].filter(v => v >= 0 && v < len);
                let y = [k, k + 1, k - 1].filter(v => v >= 0 && v < len);
                for (let xx of x) {
                    for (let yy of y) {
                        if (xx !== yy) {
                            t.push(dp[i-1][xx][yy])
                        }
                    }
                }
                dp[i][j][k] = Math.max(...t) + grid[i][j] + grid[i][k];
            }
        }
    }

    const arr = dp[height - 1].map(v => Math.max(...v))
    return Math.max(...arr);
};

console.log(cherryPickup([[3, 1, 1], [2, 5, 1], [1, 5, 5], [2, 1, 1]]))

console.log(cherryPickup([[1, 0, 0, 0, 0, 0, 1], [2, 0, 0, 0, 0, 3, 0], [2, 0, 9, 0, 0, 0, 0], [0, 3, 0, 5, 4, 0, 0], [1, 0, 2, 3, 0, 0, 6]]))

console.log(cherryPickup([
    [0, 8, 7, 10, 9, 10, 0, 9, 6],
    [8, 7, 10, 8, 7, 4, 9, 6, 10],
    [8, 1, 1, 5, 1, 5, 5, 1, 2],
    [9, 4, 10, 8, 8, 1, 9, 5, 0],
    [4, 3, 6, 10, 9, 2, 4, 8, 10],
    [7, 3, 2, 8, 3, 3, 5, 9, 8],
    [1, 2, 6, 5, 6, 2, 0, 10, 0]]))