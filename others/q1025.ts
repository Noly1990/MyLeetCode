// 1025. 除数博弈 https://leetcode-cn.com/problems/divisor-game/

function divisorGame(N: number): boolean {
    // 实际上是奇数偶数决定胜负，但以下是动态规划的转移方程
    const dp: boolean[] = [];
    dp[1] = false;
    dp[2] = true;
    dp[3] = false;
    for (let i = 4; i <= N; i++) {
        dp[i] = false;
        for (let j = i - 1; j >= 1; j--) {
            if (i % j === 0) {
                dp[i] = dp[i] || dp[j];
            }
        }
    }
    return dp[N];
}
console.log(divisorGame(4))