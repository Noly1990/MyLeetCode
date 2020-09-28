// 47. 全排列 II https://leetcode-cn.com/problems/permutations-ii/

function permuteUnique(nums: number[]): number[][] {
    let r: number[][] = []
    nums.sort((a, b) => a - b)
    let set =new Set()
    function process(arr: number[]) {
        if (arr.length === nums.length) {
            r.push(arr.concat());
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (set.has(i) || (i > 0 && nums[i] === nums[i - 1] && !set.has(i - 1))) {
                continue;
            }
            arr.push(nums[i]);
            set.add(i);
            process(arr);
            arr.pop();
            set.delete(i);


        }
    }
    process([])
    return r;
};


console.log(permuteUnique([2, 1, 1, 3]))