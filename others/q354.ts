// 354. 俄罗斯套娃信封问题 https://leetcode-cn.com/problems/russian-doll-envelopes/

function maxEnvelopes(envelopes: number[][]): number {

    envelopes.sort((a, b)=>a[0] - b[0]);

    let arr = envelopes.map((v) => v[1]);

    function lengthOfLIS(nums: number[]): number {
        if (nums.length === 0) return 0;
        if (nums.length === 1) return 1;
        const dp: number[] = [];
        dp[0] = 0;
        dp[1] = 1;
        for (let i = 2; i <= nums.length; i++) {
            const t = []
            for (let j = i - 2; j >= 0; j--) {
                if (nums[i - 1] > nums[j] && envelopes[i -1][0] > envelopes[j][0]) {
                    t.push(dp[j + 1] + 1);
                }
            }
            if (t.length > 0) {
                dp[i] = Math.max(...t);
            } else {
                dp[i] = 1;
            }
        }
        return Math.max(...dp);
    };


    return lengthOfLIS(arr)
};