// 845. 数组中的最长山脉  https://leetcode-cn.com/problems/longest-mountain-in-array/

function longestMountain(A: number[]): number {
    const len = A.length;
    let max = 0;
    let upLen = 0;
    let downLen = 0;
    let upStatus = true;
    let index = 1;

    while (index <= len) {
        if (index === len) {
            if (downLen) {
                max = Math.max(max, upLen + downLen + 1);
            }
            break;
        }
        if (upStatus) {
            if (A[index] > A[index - 1]) {
                upLen++;
            } else if (A[index] < A[index - 1]) {
                if (upLen > 0) {
                    upStatus = false;
                    downLen++;
                }
            } else {
                upLen = 0;
            }
        } else {
            if (A[index] > A[index - 1]) {
                max = Math.max(max, upLen + downLen + 1);
                upLen = 1;
                downLen = 0;
                upStatus = true;
            } else if (A[index] < A[index - 1]) {
                downLen++;
            } else {
                // ===
                max = Math.max(max, upLen + downLen + 1);
                upLen = 0;
                downLen = 0;
                upStatus = true;
            }
        }
        index++;
    }
    return max;
};


console.log(longestMountain([1,2,1,4,7,3,3,2,5,2]))

console.log(longestMountain([1, 1, 0, 0, 1, 0]))
