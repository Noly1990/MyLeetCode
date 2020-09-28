//16 最接近的三数之和 https://leetcode-cn.com/problems/3sum-closest/

function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let min = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (sum === target) return target;
                if (Math.abs(sum - target) < Math.abs(min - target)) {
                    min = sum;
                }
                if (sum > target) {
                    break
                }
            }
            if (nums[i] + nums[j] + nums[j+1] > target) {
                break;
            }
        }
        if (nums[i] + nums[i+1] + nums[i+2] > target) {
            break;
        }
    }
    return min;
};


console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(threeSumClosest([-55, -24, -18, -11, -7, -3, 4, 5, 6, 9, 11, 23, 33], 0));

