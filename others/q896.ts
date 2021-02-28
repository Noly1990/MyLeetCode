// 896. 单调数列 https://leetcode-cn.com/problems/monotonic-array/


function isMonotonic(A: number[]): boolean {
    let status = 0; // 0 未知  1  升序  2 降序
    for (let index = 0; index < A.length - 1; index++) {
        let a = A[index];
        let b = A[index + 1];

        if (a > b) {

            if (status === 1) return false
            if (status === 0) {
                status = 2
            }
        } else if (a < b) {
            if (status === 2) return false
            if (status === 0) {
                status = 1
            }
        }
    }

    return true;
};