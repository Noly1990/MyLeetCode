// 239. 滑动窗口最大值 https://leetcode-cn.com/problems/sliding-window-maximum/

function maxSlidingWindow(nums: number[], k: number): number[] {
    if (nums.length === 0 || k === 0) return [];
    if (k === 1 || nums.length === 1) return nums;
    let ans: number[] = [];
    let queue = [];
    for (let i = 0; i < nums.length; i++) {
        if (i- queue[0] >= k) queue.shift();
        while(nums[queue[queue.length-1]] <= nums[i]) queue.pop()
        queue.push(i)
        if(i >= k-1) ans.push(nums[queue[0]])
    }
    
    return ans;
};