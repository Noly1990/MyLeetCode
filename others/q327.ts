// 327. 区间和的个数 https://leetcode-cn.com/problems/count-of-range-sum/
function countRangeSum(nums: number[], lower: number, upper: number): number {
    let sumArr = [];
    let total =0;
    let len =nums.length;

    for (let i=0;i<len;i++) {
        total+=nums[i];
        sumArr.push(total)
    }

    let ans = 0;

    for (let i =0;i<len;i++) {
        for (let j=i;j<len;j++) {
            let temp = sumArr[j] - sumArr[i] + nums[i];
            if (temp>= lower && temp <= upper) ans++
        }
    }
    return ans;
};