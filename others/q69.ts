// 69. x 的平方根 https://leetcode-cn.com/problems/sqrtx/

function mySqrt(x: number): number {
    let i = 1;
    while(i * i <= x) {
        i++
    }
    return i-1;
};