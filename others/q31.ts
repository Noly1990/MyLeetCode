// 31. 下一个排列 https://leetcode-cn.com/problems/next-permutation/

/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
    let len = nums.length;
    let idx = len - 2;
    while (idx >= 0) {
        if (nums[idx] < nums[idx + 1]) break;
        idx--;
    }
    if (idx === -1) {
        nums.sort((a, b) => a-b) 
        return
        };
    let idx2 = idx + 1;
    for (let i=idx2;i<len;i++) {
        if (nums[i] <= nums[idx2] && nums[i] > nums[idx]) {
            idx2 = i;
        }
    }

    let temp = nums[idx];
    nums[idx] = nums[idx2]
    nums[idx2] = temp;
    let t = nums.slice(idx+1).reverse()
    for (let i = idx+1;i<len;i++) {
        nums[i] = t[i-idx -1]
    } 
};

console.log(nextPermutation([2, 3, 1]));