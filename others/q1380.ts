// 1380. 矩阵中的幸运数 https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/

function luckyNumbers(matrix: number[][]): number[] {
    let m = matrix.length;
    let n = matrix[0].length;
    let minM = new Array(m).fill(100001);
    let maxN = new Array(n).fill(0);
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] < minM[i]) {
                minM[i] = matrix[i][j]
            }
            if (matrix[i][j] > maxN[j]) {
                maxN[j] = matrix[i][j]
            }
        }
    }
    return minM.filter((v) => maxN.includes(v))
};