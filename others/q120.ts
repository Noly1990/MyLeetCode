// 120. 三角形最小路径和 https://leetcode-cn.com/problems/triangle/

function minimumTotal(triangle: number[][]): number {
    let height = triangle.length;
    const dp: number[][] = new Array(height).fill([]).map(() => new Array(height).fill(0));
    dp[0][0] = triangle[0][0];
    for (let i = 1; i < height; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === 0) {
                dp[i][j] = dp[i - 1][j] + triangle[i][j];
            } else if (j === i) {
                dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1]) + triangle[i][j];
            }

        }
    }
    return Math.min(...dp[height - 1]);
};

function minimumTotal2(triangle: number[][]): number {
    let height = triangle.length;
    const dp: number[] = new Array(height).fill([]);
    dp[0] = triangle[0][0];
    for (let i = 1; i < height; ++i) {
        dp[i] = dp[i - 1] + triangle[i][i];
        for (let j = i - 1; j > 0; j--) {
            dp[j] = Math.min(dp[j - 1], dp[j]) + triangle[i][j]
        }
        dp[0] = dp[0] + triangle[i][0];
    }
    return Math.min(...dp);
};
console.log(minimumTotal([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]))

console.log(minimumTotal2([
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
]))