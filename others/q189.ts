// 189. 旋转数组 https://leetcode-cn.com/problems/rotate-array/

/**
 Do not return anything, modify nums in-place instead.
 */

namespace Q189 {
    function rotate(nums: number[], k: number): void {
        if (nums.length === 0 || k === 0) return
        while (k > 0) {
            nums.unshift(nums.pop())
            k--
        }
    };
}
