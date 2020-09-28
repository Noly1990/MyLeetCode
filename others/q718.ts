// 718. 最长重复子数组 https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/

// 滑窗对比法
function findLength(A: number[], B: number[]): number {
    let max = 0;
    for (let i = 0; i < A.length; i++) {
        let k = 0;
        let okNum = 0;
        while (A[i + k] !== undefined && B[k] !== undefined) {
            if (A[i + k] === B[k]) {
                okNum++;
                if (okNum > max) {
                    max = okNum;
                }
            } else {
                okNum = 0;
            }
            k++;
        }
    }
    for (let i = 0; i < B.length; i++) {
        let k = 0;
        let okNum = 0;
        while (B[i + k] !== undefined && A[k] !== undefined) {
            if (B[i + k] === A[k]) {
                okNum++;
                if (okNum > max) {
                    max = okNum;
                }
            } else {
                okNum = 0;
            }
            k++;
        }
    }
    return max;
};

console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7]));
console.log(findLength([27, 26, 13, 98, 73, 14, 35, 45, 11, 72, 6, 31, 55, 80, 87, 24, 81, 75, 53, 22, 46, 9, 22, 85, 60, 87, 56, 35, 12, 49, 80, 33, 30, 56, 29, 77, 28, 99, 52, 37, 82, 20, 43, 62, 32, 2, 3, 54, 58, 10, 92, 70, 5, 68, 82, 86, 95, 6, 73, 92, 97, 7, 34, 5, 78, 57, 10, 70, 78, 92, 81, 94, 72, 62, 3, 94, 57, 29, 26, 48, 88, 74, 76, 75, 20, 94, 38, 87, 22, 12, 3, 12, 13, 58, 62, 43, 43, 74, 66, 99],
    [50, 88, 0, 77, 54, 73, 76, 53, 17, 5, 25, 42, 42, 95, 31, 32, 10, 54, 94, 2, 65, 38, 86, 70, 98, 31, 27, 84, 77, 78, 41, 4, 81, 32, 82, 92, 22, 49, 6, 21, 32, 8, 80, 67, 12, 27, 41, 16, 62, 12, 45, 27, 34, 39, 54, 37, 24, 90, 73, 54, 48, 85, 3, 67, 42, 52, 97, 18, 69, 26, 22, 80, 39, 11, 47, 60, 9, 58, 53, 9, 91, 7, 0, 29, 43, 55, 55, 43, 21, 13, 97, 4, 98, 60, 21, 78, 74, 15, 23, 74]))