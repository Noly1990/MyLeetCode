// 312戳气球 https://leetcode-cn.com/problems/burst-balloons/

function maxCoins(nums: number[]): number {
    nums.filter(v => v !== 0);
    nums.push(1);
    nums.unshift(1);
    const arr: number[][] = [];
    for (let i = 0; i <= nums.length; i++) {
        arr[i] = Array(nums.length).fill(0);
    }
    function max(i: number, j: number) {
        const temp: number[] = [];
        if (i + 1 === j) return 0;
        if (i + 2 === j) return nums[i] * nums[i + 1] * nums[i + 2];
        if (arr[i][j] !== 0) return arr[i][j];
        for (let k = j - 1; k >= i + 1; k--) {
            const a = nums[i] * nums[k] * nums[j] + max(i, k) + max(k, j);
            temp.push(a);
        }
        arr[i][j] = Math.max(...temp);
        return arr[i][j];
    }

    return max(0, nums.length - 1);
};


function maxCoins2(nums: number[]): number {
    nums.filter(v => v !== 0);
    nums.push(1);
    nums.unshift(1);
    const dp: number[][] = new Array(nums.length).fill([]).map(() => new Array(nums.length).fill(0));
    const lenN = nums.length;
    for (let i = lenN - 3; i >= 0; i--) {
        for (let j = i + 2; j <= lenN - 1; j++) {
            for (let k = i + 1; k < j; k++) {
                let tSum = nums[i] * nums[k] * nums[j] + dp[i][k] + dp[k][j];
                dp[i][j] = Math.max(dp[i][j], tSum)
            }
        }
    }
    return dp[0][lenN - 1]
}

console.log(maxCoins2([3, 1, 5, 8]))
