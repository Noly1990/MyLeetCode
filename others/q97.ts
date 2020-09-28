//  97. 交错字符串  https://leetcode-cn.com/problems/interleaving-string/
function isInterleave(s1: string, s2: string, s3: string): boolean {
    let len1 = s1.length;
    let len2 = s2.length;
    let len3 = s3.length;
    if (len1 === 0) return s2 === s3;
    if (len2 === 0) return s1 === s3;
    if (len3 === 0) return len1 === 0 && len2 === 0;
    if (len3 !== len1 + len2) return false;
    let map: Map<string, number> = new Map();
    // s3的每一位必然是s1或者s2中的一位
    const maxLen = Math.max(len1, len2);
    const dp: boolean[][] = new Array(maxLen + 1).fill(() => new Array(maxLen + 1).fill(false));
    dp[0][0] = true;
    for (let i = 0; i <= len2; i++) {
        for (let j = 0; j <= len1; j++) {
            if (i === 0 && j === 0) continue
            if (i === 0) {
                dp[i][j] = dp[i][j - 1] && s1[j - 1] === s3[i + j - 1];
                continue
            }
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] && s2[i - 1] === s3[i + j - 1];
                continue

            }
            dp[i][j] = dp[i - 1][j] && s2[i - 1] === s3[i + j - 1] || dp[i][j - 1] && s1[j - 1] === s3[i + j - 1];
        }
    }

    return dp[len2][len1];

};


function isInterleave2(s1: string, s2: string, s3: string): boolean {
    let len1 = s1.length;
    let len2 = s2.length;
    let len3 = s3.length;
    if (len1 === 0) return s2 === s3;
    if (len2 === 0) return s1 === s3;
    if (len3 === 0) return len1 === 0 && len2 === 0;
    if (len3 !== len1 + len2) return false;
    let map: Map<string, number> = new Map();
    // s3的每一位必然是s1或者s2中的一位
    function dfs(index: number, x1: number, x2: number) {
        if (index === len3 && x1 === len1 && x2 === len2) return true;
        if (map.get(`${index},${x1},${x2}`)) return false;
        if (s3[index] === s1[x1]) {
            if (dfs(index + 1, x1 + 1, x2)) return true;
        }
        if (s3[index] === s2[x2]) {
            if (dfs(index + 1, x1, x2 + 1)) return true;
        }
        map.set(`${index},${x1},${x2}`, 1)
        return false;
    }

    return dfs(0, 0, 0);
};


console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))
console.log(isInterleave('aabbcc', 'ddeeff', 'aabbccddeeff'))

console.log(isInterleave('a', 'b', 'a'))