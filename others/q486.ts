// 486. 预测赢家 https://leetcode-cn.com/problems/predict-the-winner/
function PredictTheWinner(nums: number[]): boolean {
    const dp: number[][] = [];
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        dp[i] = []
        for (let j = 0; j < len; j++) {
            if (i === j) dp[i][j] = nums[i];
            else dp[i][j]=0;
        }
    }
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i + 1; j < len; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }

    return dp[0][len - 1] >= 0;
};


console.log(PredictTheWinner([1, 5, 2]))