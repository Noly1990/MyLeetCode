// 463. 岛屿的周长 https://leetcode-cn.com/problems/island-perimeter/

function islandPerimeter(grid: number[][]): number {
    let total = 0;
    let m = grid.length;
    let n = grid[0].length;

    function computeNodeCircleZero(x: number, y: number) {
        let t = 0;
        if (x === 0) {
            t++;
        } else if (grid[x - 1][y] === 0) {
            t++
        }
        if (y === 0) {
            t++;
        } else if (grid[x][y - 1] === 0) {
            t++;
        }
        if (x === m - 1) {
            t++;
        } else if (grid[x + 1][y] === 0) {
            t++
        }

        if (y === n - 1) {
            t++;
        } else if (grid[x][y + 1] === 0) {
            t++;
        }
        return t;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
                total += computeNodeCircleZero(i, j);
            }
        }
    }

    return total;
};