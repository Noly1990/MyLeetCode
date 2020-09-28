// 46. 全排列 https://leetcode-cn.com/problems/permutations/
function permute(nums: number[]): number[][] {
    let r:number[][] = []
    function process(arr: number[], set:Set<number>) {
        if (arr.length === nums.length) {
            r.push(arr.concat());
            return 
        }
        for (let n of nums) {
            if (!set.has(n)) {
                arr.push(n);
                set.add(n);
                process(arr, set);
                arr.pop();
                set.delete(n);
            }

        }
    }
    process([], new Set())
    return r;
};