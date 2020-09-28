// 357. 计算各个位数不同的数字个数  https://leetcode-cn.com/problems/count-numbers-with-unique-digits/

// 1  10 0 - 9
// 2 91

// 3 739
function countNumbersWithUniqueDigits(n: number): number {
    const dp: number[] = []
    dp[0] = 1;
    dp[1] = 10;
    dp[2] = 91;
    function getN(n: number) {
        let t = 1;
        t = t * 9;
        for (let i = 0; i < n - 1; i++) {
            t = t * (9 -i);
        }
        return t
    }
    if (n > 2) {
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + getN(i)
        }
    }
    return dp[n];
};

console.log(countNumbersWithUniqueDigits(1))


console.log(countNumbersWithUniqueDigits(2))

console.log(countNumbersWithUniqueDigits(3))


console.log(countNumbersWithUniqueDigits(4))