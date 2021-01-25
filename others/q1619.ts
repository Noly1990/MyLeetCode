// 1619. 删除某些元素后的数组均值 https://leetcode-cn.com/problems/mean-of-array-after-removing-some-elements/

function trimMean(arr: number[]): number {
    let n = arr.length;
    arr.sort((a, b) => a - b);
    return arr.slice(n / 20, n - n / 20).reduce((p, v) => p + v, 0) / n / 0.9;
};