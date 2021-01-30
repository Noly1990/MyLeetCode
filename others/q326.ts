// 326. 3的幂 https://leetcode-cn.com/problems/power-of-three/

function isPowerOfThree(n: number): boolean {
    return n > 0 && 1162261467%n == 0;
};