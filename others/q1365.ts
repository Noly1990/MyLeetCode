// 1365. 有多少小于当前数字的数字 https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/

function smallerNumbersThanCurrent(nums: number[]): number[] {
    let sorted = [...nums].sort((a, b) => a - b);
    let map = new Map();
    for (let i = 0; i < sorted.length; i++) {
        if (!map.has(sorted[i])) map.set(sorted[i], i)
    }
    return nums.map(v => map.get(v));
};