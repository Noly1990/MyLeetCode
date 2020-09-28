// 96. 不同的二叉搜索树 https://leetcode-cn.com/problems/unique-binary-search-trees/
function numTrees(n: number): number {
    const dp: number[] = [];
    dp[0] = 1;
    dp[1] = 1;
    dp[2] = 2;
    if (n >= 3) {
        for (let i = 3; i <= n; i++) {
            let t = 0;
            for (let j = i - 1; j >= 0; j--) {
                t += dp[j] * dp[i - j - 1]
            }
            dp[i] = t;
        }
    }
    return dp[n];
};

function numTrees2(n: number): number {
    let C = 1;
    for (let i = 0; i < n; ++i) {
        C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
}

console.log(numTrees(3))
console.log(numTrees(4))
console.log(numTrees(5))
console.log(numTrees2(6))
// 1    2    3    4    5     6   7
// 1    2    5   14    42   132  429

