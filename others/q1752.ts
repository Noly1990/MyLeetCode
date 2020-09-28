// 1752 面试题 10.01. 合并排序的数组 https://leetcode-cn.com/problems/sorted-merge-lcci/

/**
 Do not return anything, modify A in-place instead.
 */
function merge(A: number[], m: number, B: number[], n: number): void {
    let j = 0;
    let i = 0;
    while (i < (m + n)) {
        if (A[i] === 0 && B[j]) {
            A[i] = B[j];
            j++;
            i++;
        } else if (A[i] <= B[j]) {
            i++;
        } else {
            for (let k = m + n - 1; k > i; k--) {
                A[k] = A[k - 1]
            }
            A[i] = B[j] || A[i];
            j++;
            i++;
        }
    }
};


console.log(merge([1, 2, 3, 7, 0, 0, 0], 4, [2, 5, 6], 3))



console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))