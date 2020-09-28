// 154. 寻找旋转排序数组中的最小值 II https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 
function findMin(nums: number[]): number {
    const len = nums.length;
    let index = len-1;

    while(true) {
        if (index === 0) break;
        if (nums[index-1] > nums[index]) {
            return nums[index]
        } 
        index--;
    }
    return nums[0];
};