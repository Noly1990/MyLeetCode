// 665. 非递减数列 https://leetcode-cn.com/problems/non-decreasing-array/


function checkPossibility(nums: number[]): boolean {
    const n = nums.length;
    let cnt = 0;
    for (let i = 0; i < n - 1; ++i) {
        const x = nums[i], y = nums[i + 1];
        if (x > y) {
            cnt++;
            if (cnt > 1) {
                return false;
            }
            if (i > 0 && y < nums[i - 1]) {
                nums[i + 1] = x;
            }
        }
    }
    return true;
};