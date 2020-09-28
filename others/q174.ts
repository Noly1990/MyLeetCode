//174. 地下城游戏 https://leetcode-cn.com/problems/dungeon-game/

function calculateMinimumHP(dungeon: number[][]): number {
    if (dungeon.length === 0) return 1;
    const m = dungeon.length;
    const n = dungeon[0] ? dungeon[0].length : 0;
    const dp: number[][] = new Array(m).fill([]).map(() => new Array(n).fill(0));
    dp[m - 1][n - 1] = dungeon[m - 1][n - 1] < 0 ? 1 - dungeon[m - 1][n - 1] : 1;
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) {
                continue;
            }
            let now = dungeon[i][j];
            if (i === m - 1) {
                dp[i][j] = Math.max(1, dp[i][j + 1] - now);
                continue;
            }

            if (j === n - 1) {
                dp[i][j] = Math.max(1, dp[i + 1][j] - now);
                continue;
            }
            const a = dp[i][j + 1] - now < 1 ? 1 : dp[i][j + 1] - now;
            const b = dp[i + 1][j] - now < 1 ? 1 : dp[i + 1][j] - now;
            dp[i][j] = Math.min(a, b)
        }
    }
    return dp[0][0];
};

console.log(calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5]]
)) // 7

console.log(calculateMinimumHP([
    [1, 2, 1],
    [-2, -3, -3],
    [3, 2, -2]])) //1

    console.log(calculateMinimumHP([[0]]))