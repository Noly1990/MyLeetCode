// 1807 剑指 Offer 40. 最小的k个数 https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/

function getLeastNumbers(arr: number[], k: number): number[] {
    arr.sort((a, b) => a-b);

    return arr.slice(0, k)
};