// 747. 至少是其他数字两倍的最大数 https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/

function dominantIndex(nums: number[]): number {
    let needMax = 0;
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
        if (nums[i] < nums[maxIndex] && 2 * nums[i] > needMax) {
            needMax = 2 * nums[i]
        }
    }

    return nums[maxIndex] >= needMax ? maxIndex : -1;
};