// 77. 组合 https://leetcode-cn.com/problems/combinations/

function combine(n: number, k: number): number[][] {
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
        if (b === 0) {
            temp.push(arr)
        }
        let last = arr[arr.length - 1] || 0;
        for (let i = last + 1; i <= n; i++) {
            process(arr.concat([i]), b - 1)
        }
    }

    process([], k)

    return temp;
};

console.log(combine(4, 2))