// 633. 平方数之和 https://leetcode-cn.com/problems/sum-of-square-numbers/

function judgeSquareSum(c: number): boolean {
    let n = Math.floor(Math.sqrt(c));
    if (n * n === c) return true;
    let other = 1;
    while(n >= other) {
        let t = n * n + other * other;
        if (t === c) return true;
        else if (t > c) {
            n--;
        } else other++
    }

    return false
};


function judgeSquareSum2(c: number): boolean {
    let n = Math.floor(Math.sqrt(c));
    if (n * n === c) return true;
    for (let i = 0; i <= n; i++) {
        let l = c - i * i;
        let lsq = Math.floor(Math.sqrt(l));
        if (lsq * lsq === l) return true;
    }
    return false
};