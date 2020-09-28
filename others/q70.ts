// 70. 爬楼梯  https://leetcode-cn.com/problems/climbing-stairs/

function climbStairs(n: number): number {
    if (n===0) return 1;
    if (n===1) return 1;
    if(n===2) return 2;
    return climbStairs(n-1) + climbStairs(n-2);
};