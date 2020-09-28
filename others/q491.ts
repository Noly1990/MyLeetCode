// 491. 递增子序列  https://leetcode-cn.com/problems/increasing-subsequences/
function findSubsequences(nums: number[]): number[][] {
    if (nums.length < 2) return [];
    if (nums.length === 2) return nums[0] <= nums[1] ? [nums] : [];
    let before:number[][] = nums[0] <= nums[1] ? [[nums[0], nums[1]]] : [];
    for (let i = 2; i < nums.length; i++) {
        let next = []
        for (let p of before) {
            if (nums[i] >= p[p.length - 1]) {
                next.push([...p, nums[i]])
            }
        }

        for (let j = 0; j < i; j++) {
            if (nums[i] >= nums[j]) {
                next.push([nums[j], nums[i]])
            }
        }

        before = before.concat(next)
    }

    return Array.from(new Set(before.map(v => v.join()))).map(v => v.split(',').map(v => parseInt(v)))
};

console.log(findSubsequences([5, 4, 6, 5, 4, 7, 7]))