// 813. 最大平均值和的分组 https://leetcode-cn.com/problems/largest-sum-of-averages/

function largestSumOfAverages(A: number[], K: number): number {
    const dp: number[][] = new Array(A.length + 1).fill([]).map(() => new Array(K + 1).fill(0));

    const sumArr = [0];
    for (let i = 0; i < A.length; i++) {
        sumArr[i + 1] = sumArr[i] + A[i];
    }
    dp[1][1] = A[0];
    for (let i = 1; i < A.length + 1; i++) {
        for (let j = 1; j <= K; j++) {
            if (j > i) continue
            if (i === 1 && j === 1) continue;
            if (i === j) {
                dp[i][i] = sumArr[i];
                continue
            }
            if (j === 1) {
                dp[i][j] = sumArr[i] / i;
                continue
            }
            let t = [];
            let index = i - 1;
            while (index >= j - 1) {
                t.push(dp[index][j - 1] + (sumArr[i] - sumArr[index]) / (i - index));
                index--
            }
            dp[i][j] = Math.max(...t)
        }
    }

    return dp[A.length][K];
};

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3))

console.log(largestSumOfAverages([4, 1, 7, 5, 6, 2, 3], 4))