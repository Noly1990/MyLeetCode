// 494. 目标和 https://leetcode-cn.com/problems/target-sum/


/**
 * sum(N) + sum(P) = target
 * 
 * 2 * sum(P) = target + sum(All)
 * 
 * 
 * 
 * @param nums 
 * @param S 
 */
function findTargetSumWays(nums: number[], S: number): number {
    let sum = nums.reduce((p, v) => p + v, 0);
    if ((sum + S) % 2 !== 0) return 0;

    let target = (sum + S) / 2;

    let dp = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        
    }

};