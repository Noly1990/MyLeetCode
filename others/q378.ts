// 378. 有序矩阵中第K小的元素 https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/

function kthSmallest(matrix: number[][], k: number): number {
    let arr: number[] = [];
    for (const p of matrix) {
        arr = arr.concat(p);
    }
    arr.sort((a, b) => a - b);
    return arr[k - 1];
};  