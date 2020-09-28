// 216. 组合总和 III  https://leetcode-cn.com/problems/combination-sum-iii/

function combinationSum3(k: number, n: number): number[][] {
    if (k > n) return [];

    if (k === n) {
        let t = []
        for (let i = 1; i <= n; i++) {
            t.push(i)
        }
        return [t];
    }
    let temp: number[][] = [];
    function process(arr: number[], b: number) {
        if (b === 0 && arr.reduce((p, r) => p + r, 0) === n) {
            temp.push(arr)
        }
        let last = arr[arr.length - 1] || 0;
        for (let i = last + 1; i <= 9; i++) {
            process(arr.concat([i]), b - 1)
        }
    }

    process([], k)

    return temp;
};

console.log(combinationSum3(3, 9))