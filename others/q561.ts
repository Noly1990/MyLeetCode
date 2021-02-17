// 561. 数组拆分 I https://leetcode-cn.com/problems/array-partition-i/

function arrayPairSum(nums: number[]): number {
    nums.sort((a, b) => a-b);

    return nums.reduce((p, v, i)=>{
        if (i % 2 === 0) return p + v
        return p
    }, 0)
};
 