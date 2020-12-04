// 976. 三角形的最大周长 https://leetcode-cn.com/problems/largest-perimeter-triangle/
function largestPerimeter(A: number[]): number {
    A.sort((a, b) => b - a);
    for (let i = 0; i < A.length - 2; i++) {
        if (A[i] < (A[i + 1] + A[i + 2])) return A[i] + A[i + 1] + A[i + 2];
    }

    return 0;
};
