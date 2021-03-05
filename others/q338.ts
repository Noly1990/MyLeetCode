// 338. 比特位计数 https://leetcode-cn.com/problems/counting-bits/



/**
 * 0 1   1
 * 2 3   11
 * 4-7   111
 * 8-15  1111
 * 16- 31 11111
 * 32 - 63 111111
 * 64 - 127 1000000 1111111
 * 
 * 
 * 
 * @param num 
 */
function countBits(num: number): number[] {

    if (num === 0) return [0]
    if (num === 1) return [0, 1]
    let dp = [0, 1]

    for (let i = 2; i <= num; i++) {
        if (i % 2 === 0) {
            dp[i] = dp[i / 2]
        } else {
            dp[i] = dp[i - 1] + 1
        }
    }

    return dp;
};

console.log(countBits(128))