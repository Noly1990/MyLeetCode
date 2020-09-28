// 1566 剑指 Offer 04. 二维数组中的查找 https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/

function findNumberIn2DArray(matrix: number[][], target: number): boolean {
    let m = matrix.length;
    if (m === 0) return false;
    let n = matrix[0].length;
    if (n === 0) return false;
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) return false;
    let limit = 0;
    while (limit < m && matrix[limit][n - 1] < target) {
        limit++;
    }

    let flag = false;
    function walk(x: number, y: number) {
        console.log(x,y)
        if (matrix[x][y] === target) {
            flag = true
            return
        }

        if (matrix[x][y] > target) {
            if (y > 0) walk(x, y -1)

        } else if (matrix[x][y] < target) {
            if (x < m - 1) walk(x + 1, y)
        }
    }

    walk(limit, n - 1);

    return flag;
};

console.log(findNumberIn2DArray([
    [3, 3, 8, 13, 13, 18],
    [4, 5, 11, 13, 18, 20],
    [9, 9, 14, 15, 23, 23],
    [13, 18, 22, 22, 25, 27],
    [18, 22, 23, 28, 30, 33],
    [21, 25, 28, 30, 35, 35],
    [24, 25, 33, 36, 37, 40]]
    , 21))
