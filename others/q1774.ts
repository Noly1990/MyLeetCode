// 1774 剑指 Offer 10- I. 斐波那契数列 https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/

function fib(n: number): number {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let pre = 0, next = 1;
    for (let i = 2; i <= n; i++) {
        let tmp = (pre + next) % 1000000007;
        pre = next;
        next = tmp;
    }
    return next
};