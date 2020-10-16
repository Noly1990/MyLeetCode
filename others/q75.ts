// 75. 颜色分类 https://leetcode-cn.com/problems/sort-colors/

/**
 Do not return anything, modify nums in-place instead.

 
 */
function sortColors(nums: number[]): void {
    let index0 = 0;
    let index2 = nums.length-1;

    for (let i = 0; i < nums.length; i++) {
        if (i>index2) break
        if (nums[i]===0) {
            let temp = nums[index0];
            nums[index0] = nums[i]
            nums[i] = temp;
            index0++;
        }
        if (nums[i]===2) {
            let temp = nums[index2];
            nums[index2] = nums[i]
            nums[i] = temp;
            index2--;
            i--;
        }
    }
};