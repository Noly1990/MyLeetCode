// 209 长度最小的子数组 https://leetcode-cn.com/problems/minimum-size-subarray-sum/
function minSubArrayLen(s: number, nums: number[]): number {
    const len = nums.length;
    let min = len + 1;
    let front = 0;
    let sum = 0;
    for (let i=0;i<nums.length;i++) {
        sum = sum + nums[i];
        while(sum >= s) {
             min = Math.min(min, i - front + 1);
             sum = sum - nums[front];
             front ++;
        }
    }

    return min === len + 1 ? 0 : min;
};



console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(10,
    [2,3,1,2,4,3,4,5,6,2]))