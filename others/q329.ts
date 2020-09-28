// 329. 矩阵中的最长递增路径 https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/
function longestIncreasingPath(matrix: number[][]): number {
    const m = matrix.length;
    if (m === 0) return 0;
    const n = matrix[0].length;
    if (n === 0) return 0;
    const dp: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0));
    let t = []
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            dp[i][j] = walk(i, j, 1);
            t.push(dp[i][j])
        }
    }
    function walk(x: number, y: number, before: number) {
        const temp = [before]
        if (x > 0 && matrix[x - 1][y] > matrix[x][y]) {
            if (dp[x - 1][y] !== 0) {
                temp.push(before + dp[x - 1][y])
            } else {
                temp.push(walk(x - 1, y, before + 1));
            }
        }

        if (y > 0 && matrix[x][y - 1] > matrix[x][y]) {
            if (dp[x][y - 1] !== 0) {
                temp.push(before + dp[x][y - 1])
            } else {
                temp.push(walk(x, y - 1, before + 1));
            }
        }

        if (x + 1 < m && matrix[x + 1][y] > matrix[x][y]) {
            if (dp[x + 1][y] !== 0) {
                temp.push(before + dp[x + 1][y]);
            } else {
                let walkTemp = walk(x + 1, y, before + 1);
                dp[x + 1][y] = walkTemp - before;
                temp.push(walkTemp);
            }

        }

        if (y + 1 < n && matrix[x][y + 1] > matrix[x][y]) {
            if (dp[x][y + 1] !== 0) {
                temp.push(before + dp[x][y + 1])
            } else {
                let walkTemp = walk(x, y + 1, before + 1);
                dp[x][y + 1] = walkTemp - before;
                temp.push(walkTemp);
            }
        }
        return Math.max(...temp);
    }

    return Math.max(...t);
};

// console.log(longestIncreasingPath(
//     [
//         [9, 9, 4],
//         [6, 6, 8],
//         [2, 1, 1]
//     ]
// ))


console.log(longestIncreasingPath(
    [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [19, 18, 17, 16, 15, 14, 13, 12, 11, 10],
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
    [39, 38, 37, 36, 35, 34, 33, 32, 31, 30],
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
    [59, 58, 57, 56, 55, 54, 53, 52, 51, 50],
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
    [79, 78, 77, 76, 75, 74, 73, 72, 71, 70],
    [80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
    [99, 98, 97, 96, 95, 94, 93, 92, 91, 90],
    [100, 101, 102, 103, 104, 105, 106, 107, 108, 109],
    [119, 118, 117, 116, 115, 114, 113, 112, 111, 110],
    [120, 121, 122, 123, 124, 125, 126, 127, 128, 129],
    [139, 138, 137, 136, 135, 134, 133, 132, 131, 130],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
))