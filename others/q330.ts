// 330. 按要求补齐数组 https://leetcode-cn.com/problems/patching-array/

function minPatches(nums: number[], n: number): number {
    let need = 0, index = 0;
    let curr = 1;
    while (curr <= n) {
        if (index >= nums.length || nums[index] > curr) {
            need++;
            curr *= 2;
        } else {
            curr += nums[index++];
        }
    }
    return need;
};