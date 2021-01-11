// 509. 斐波那契数 https://leetcode-cn.com/problems/fibonacci-number/

function fib(n: number): number {
    if (n <= 0) return 0
    if (n === 1) return 1;
    if (n === 2) return 1;
    return fib(n-1) + fib(n-2);
};
 