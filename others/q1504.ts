// 1504. 统计全 1 子矩形 https://leetcode-cn.com/problems/count-submatrices-with-all-ones/

function numSubmat(mat: number[][]): number {
    let m = mat.length;
    if (m === 0) return 0;
    let n = mat[0].length;
    if (n === 0) return 0;

    let total = 0;
    function compute(x: number, y: number) {
        let t = 1;
        let nL = n;
        for (let i = x; i < m; i++) {
            for (let j = y; j < nL; j++) {
                if (i === x && j === y) continue
                if (mat[i][j] === 0) {
                    nL = j;
                } else {
                    t++;
                }

            }
        }
        return t;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 1) {
                total += compute(i, j)
            }
        }
    }
    return total;
};

console.log(numSubmat( [[1,0,1],
    [1,1,0],
    [1,1,0]]))