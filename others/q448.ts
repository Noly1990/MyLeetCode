// 448. 找到所有数组中消失的数字 https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/

function findDisappearedNumbers(nums: number[]): number[] {
    let set:Set<number> = new Set();
    for (let i=1;i<=nums.length;i++) {
        set.add(i)
    }
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        set.delete(element)
    }
    return Array.from(set)
};