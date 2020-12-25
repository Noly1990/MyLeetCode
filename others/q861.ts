// 861. 翻转矩阵后的得分 https://leetcode-cn.com/problems/score-after-flipping-matrix/


function matrixScore(A: number[][]): number {
    if (A.length===0) return 0;
    if (A[0].length === 0) return 0;

    for (let i=0;i<A.length;i++){
        if (A[i][0] !== 0) {
            for (let j=0;j<A[i].length;j++) {
                A[i][j] = A[i][j]^1;
            }
        }
    }

    for (let i=0;i<A[0].length;i++) {
        let temp = 0;
        for (let j=0;j<A.length;j++) {
            temp += A[j][i];
        }
        if (temp < A.length / 2) {
for(let j = 0;j<A.length;j++){
                     A[j][i] = A[j][i]^1;
                }
        }
    }
let ans = 0;
        for(let i = 0;i<A.length;i++){
            for(let j = 0;j<A[0].length;j++){
                ans+=A[i][j]*Math.pow(2,A[0].length-j-1);
            }
        }
    return ans;
};