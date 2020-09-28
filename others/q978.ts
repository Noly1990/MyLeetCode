// 978. 最长湍流子数组 https://leetcode-cn.com/problems/longest-turbulent-subarray/


function maxTurbulenceSize(A: number[]): number {
    if (A.length === 0) return 0;
    if (A.length === 1) return 1;
    if (A.length === 2) return A[0] === A[1] ? 1 : 2;
    let max = 1;
    let preFlag = A[1] > A[0] ? 1 : A[1] === A[0] ? 0 : -1;
    let temp = 1;
    if (preFlag === 0) {
        temp = 1;
    } else {
        temp = 2;
    }
    for (let i = 1; i < A.length - 1; i++) {
        let recnetFlag = A[i + 1] > A[i] ? 1 : A[i + 1] === A[i] ? 0 : -1;
        if (preFlag === 0 && recnetFlag === 0) {
            temp = 1;
        } else if (preFlag === 0 && recnetFlag !== 0) {
            temp = 2;
        } else if (preFlag * recnetFlag === -1) {
            temp++
        } else {
            max = Math.max(temp, max);
            temp = 2
        }
        preFlag = recnetFlag;
    }
    max = Math.max(temp, max);
    return max;
};


console.log(maxTurbulenceSize([9, 4, 2, 10, 7, 8, 8, 1, 9]))