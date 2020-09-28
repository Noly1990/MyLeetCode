// 410. 分割数组的最大值 https://leetcode-cn.com/problems/split-array-largest-sum/

function splitArray(nums: number[], m: number): number {
    const n = nums.length;
    const dp: number[][] = new Array(n + 1).fill([]).map(() => new Array(m + 1).fill(0))
    dp[1][1] = nums[0]

    const sumArr = [[0, 0]];
    for (let i = 0; i < n; i++) {
        sumArr[i + 1] = []
        sumArr[i + 1][0] = sumArr[i][0] + nums[i];
        sumArr[i + 1][1] = Math.max(sumArr[i][1], nums[i]);
    }
    for (let i = 1; i < n + 1; i++) {
        for (let j = 1; j <= m; j++) {
            if (j > i) continue
            if (i === 1 && j === 1) continue;
            if (i === j) {
                dp[i][i] = sumArr[i][1];
                continue
            }
            if (j === 1) {
                dp[i][1] = sumArr[i][0];
                continue
            }
            dp[i][j] = sumArr[i][0];
            for (let index = i - 1; index >= j - 1; index--) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[index][j - 1], sumArr[i][0] - sumArr[index][0]))
            }

        }
    }

    return dp[n][m];
};

console.log(splitArray([7, 2, 5, 10, 8]
    , 2))