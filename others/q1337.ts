// 1337. 方阵中战斗力最弱的 K 行 https://leetcode-cn.com/problems/the-k-weakest-rows-in-a-matrix/

function kWeakestRows(mat: number[][], k: number): number[] {
    if (k === 0) return [];
    let matArr = mat.map((v, i) => [i, countPower(v)]);
    matArr.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0]
        } else {
            return a[1] - b[1]
        }
    })
    function countPower(arr: number[]) {
        let total = 0;
        for (let p of arr) {
            if (p === 1) {
                total++;
            } else {
                return total
            }
        }
        return total;
    }
    return matArr.map(v => v[0]).slice(0, k);
};

console.log(kWeakestRows([[1, 1, 0, 0, 0],
[1, 1, 1, 1, 0],
[1, 0, 0, 0, 0],
[1, 1, 0, 0, 0],
[1, 1, 1, 1, 1]], 0))