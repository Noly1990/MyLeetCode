// 304. 二维区域和检索 - 矩阵不可变 https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
class NumMatrix {
    private sumMatrix: number[][];
    private m: number = 0;
    private n: number = 0;
    constructor(matrix: number[][]) {
        let m = matrix.length;
        if (m === 0) return
        this.m = m
        let n = matrix[0].length
        if (n === 0) return
        this.n = n

        this.sumMatrix = [new Array(n + 1).fill(0)];

        for (let i = 0; i < m; i++) {
            this.sumMatrix[i + 1] = [0]
            for (let j = 0; j < n; j++) {
                this.sumMatrix[i + 1][j + 1] = this.sumMatrix[i + 1][j] + this.sumMatrix[i][j + 1] - this.sumMatrix[i][j] + matrix[i][j]
            }
        }
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        if (this.m === 0 || this.n === 0) return 0
        return this.sumMatrix[row2 + 1][col2 + 1] + this.sumMatrix[row1][col1] - this.sumMatrix[row1][col2 + 1] - this.sumMatrix[row2 + 1][col1];
    }
}