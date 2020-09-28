// 229. 求众数 II https://leetcode-cn.com/problems/majority-element-ii/

function majorityElement(nums: number[]): number[] {
    let len= nums.length;
    if (len === 0) return [];
    if (len === 1) return nums;
    nums.sort((a, b) => a-b);
    let level = Math.floor(len / 3);
    let total = 1;
    const t = []
    for (let i=1;i<len;i++) {
        if (nums[i] === nums[i-1]) {
            total++;
        } else {
            if (total > level) {
                t.push(nums[i-1])
            }
            total=1;
        }
    }
    if (total > level) {
        t.push(nums[len -1])
    }
    return t;
};

console.log(majorityElement([1,1,1,3,3,2,2,2]))

console.log(majorityElement([3,2]))
