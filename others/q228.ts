// 228. 汇总区间 https://leetcode-cn.com/problems/summary-ranges/

function summaryRanges(nums: number[]): string[] {
    if (nums.length === 0) return [];


    let ans: string[] = [];
    let begin = nums[0];
    let end = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1] + 1) {
            end = nums[i];
        } else {
            if (begin === end) {
                ans.push(begin.toString());
            } else {
                ans.push(`${begin}->${end}`);
            }
            begin = nums[i];
            end = nums[i]
        }
    }
    if (begin === end) {
        ans.push(begin.toString());
    } else {
        ans.push(`${begin}->${end}`);
    }
    return ans;
};