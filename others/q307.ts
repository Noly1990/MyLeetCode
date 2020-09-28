// 307. 区域和检索 - 数组可修改 https://leetcode-cn.com/problems/range-sum-query-mutable/

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(i,val)
 * var param_2 = obj.sumRange(i,j)
 */

class NumArray {
    private nums: number[]
    constructor(nums: number[]) {
        this.nums = nums;
    }

    update(i: number, val: number): void {
        this.nums[i] = val;
    }

    sumRange(i: number, j: number): number {
        let sum = 0;
        for (let index = i; index <= j; index++) {
            sum += this.nums[index]
        }

        return sum;
    }
}
