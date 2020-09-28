// 27. 移除元素  https://leetcode-cn.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
    let last = nums.length - 1;

    for (let i = 0; i <= last; i++) {
        if (nums[i] === val) {
            let t = nums[last];
            nums[last] = nums[i];
            nums[i] = t;
            i--;
            last --;
        }
    }
    return last +1;
};