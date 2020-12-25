// 48. 旋转图像 https://leetcode-cn.com/problems/rotate-image/

/**
 * x y
 * y n-x-1
 * n-x-1 n-y-1
 * n-y-1 x
 Do not return anything, modify matrix in-place instead.
 */

/**
 * 
 * @param matrix 
 * [
 *     [1,2,3,4,5,6]
 *     [1,2,3,4,5,6]
 *     [1,2,3,4,5,6]
 *     [1,2,3,4,5,6]
 *     [1,2,3,4,5,6]
 *     [1,2,3,4,5,6]
 * ]
 */
function rotate(matrix: number[][]): void {
    let n = matrix.length;
    if (n <= 1) return;
    function modifyFour(x: number, y: number) {
        let space = matrix[x][y];
        matrix[x][y] = matrix[n - y - 1][x];
        matrix[n - y - 1][x] = matrix[n - x - 1][n - y - 1];
        matrix[n - x - 1][n - y - 1] = matrix[y][n - x - 1];
        matrix[y][n - x - 1] = space;
    }

    for (let i = 0; i < n / 2; i++) {
        for (let j = i; j < n - i -1; j++) {
            modifyFour(i, j);
        }
    }

};