// 832. 翻转图像 https://leetcode-cn.com/problems/flipping-an-image/

function flipAndInvertImage(A: number[][]): number[][] {
    let r = A.map(v => v.reverse());
    for (let i = 0; i < r.length; i++) {
        for (let j =0;j<r[0].length;j++) {
            r[i][j] ^= 1; 
        }
    }
    return r;
};