// 1716. 计算力扣银行的钱 https://leetcode-cn.com/problems/calculate-money-in-leetcode-bank/

function totalMoney(n: number): number {
    let x = Math.floor(n / 7);
    let y = n % 7;

    return 28 * x + 7 * (x) * (x - 1) / 2 + y * (x) + (1 + y) * y / 2
};