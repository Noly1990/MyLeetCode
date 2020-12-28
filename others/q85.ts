// 85. 最大矩形  https://leetcode-cn.com/problems/maximal-rectangle/

function maximalRectangle(matrix: string[][]): number {
    let m = matrix.length;
    if (m === 0) return 0;
    let n = matrix[0].length;
    if (n === 0) return 0;
    let max = 0;
    function getXYLength(x: number, y: number) {
        let tX = 0;
        let xx = x;
        while (xx < m) {
            if (matrix[xx][y] === '1') {
                xx++;
                tX++;
            } else {
                break;
            }
        }
        let tY = 0;
        let yy = y;
        while (yy < n) {
            if (matrix[x][yy] === '1') {
                yy++;
                tY++;
            } else {
                break;
            }
        }

        return [tX, tY]
    }

    function getMaxArea(x: number, y: number, l: number, w: number) {
        let max = 0;
        let sumArr = new Array(l).fill([]).map(() => new Array(w).fill(0));
        for (let i = 0; i < l; i++) {
            for (let j = 0; j < w; j++) {
                let recent = matrix[x + i][y + j] === '1' ? 1 : 0;
                if (i === 0 && j === 0) {
                    sumArr[i][j] = recent
                } else if (i === 0) {
                    sumArr[i][j] = sumArr[i][j - 1] + recent;

                } else if (j === 0) {
                    sumArr[i][j] = sumArr[i - 1][j] + recent;

                } else {
                    sumArr[i][j] = sumArr[i - 1][j] + sumArr[i][j - 1] - sumArr[i - 1][j - 1] + recent;
                }
                if (sumArr[i][j] === (i+1)*(j+1) && sumArr[i][j] > max) {
                    max = sumArr[i][j]
                }
            }
            
        }


        return max
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                let [l, w] = getXYLength(i, j);
                if (l * w > max) {
                    let tArea = getMaxArea(i, j, l, w);
                    if (tArea > max) {
                        max = tArea
                    }
                }
            }

        }
    }
    return max;
};
console.log(maximalRectangle([
    ["1", "1", "1", "1", "1", "1", "1", "1"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "1", "1", "0"],
    ["1", "1", "1", "1", "1", "0", "0", "0"],
    ["0", "1", "1", "1", "1", "0", "0", "0"]]))


