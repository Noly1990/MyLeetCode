// 867. 转置矩阵 https://leetcode-cn.com/problems/transpose-matrix/

function transpose(matrix: number[][]): number[][] {
    return matrix[0].map((v,i) =>matrix.map((a,j) =>a[i]))
};