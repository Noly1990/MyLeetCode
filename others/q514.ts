// 514. 自由之路 https://leetcode-cn.com/problems/freedom-trail/

function findRotateSteps(ring: string, key: string): number {
    const charMap:Map<string, number[]> = new Map();
    const lenR = ring.length
    const  lenK = key.length;
    for (let i = 0; i < lenR; ++i) {
        if (charMap.has(ring[i])) {
            charMap.get(ring[i])?.push(i);
        } else {
            charMap.set(ring[i], [ i])
        }
    }
    const dp = new Array(lenK).fill(0).map(v => new Array(lenR).fill(Number.MAX_SAFE_INTEGER));
    for (const i of charMap.get(key[0]) || []) {
        dp[0][i] = Math.min(i, lenR - i) + 1;
    }
    for (let i = 1; i < lenK; ++i) {
        for (const j of charMap.get(key[i]) || []) {
            for (const k of charMap.get(key[i-1]) || []) {
                dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + Math.min(Math.abs(j - k), lenR - Math.abs(j - k)) + 1);
            }
        }
    }
    return dp[lenK - 1].reduce((pre, cur) => Math.min(pre, cur), Number.MAX_SAFE_INTEGER);
};

console.log(findRotateSteps("godding",
"godding"))