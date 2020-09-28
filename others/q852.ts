// 852. 山脉数组的峰顶索引 https://leetcode-cn.com/problems/peak-index-in-a-mountain-array/

function peakIndexInMountainArray(A: number[]): number {
    let len = A.length;
    for (let i=1;i<len;i++) {
        if (A[i] > A[i-1] && A[i] > A[i+1]) return i;
    }
    return 0;
};