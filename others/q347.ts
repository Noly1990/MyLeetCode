// 347. 前 K 个高频元素 https://leetcode-cn.com/problems/top-k-frequent-elements/

function topKFrequent(nums: number[], k: number): number[] {
    let map = new Map();
    for (let num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1)
        }
    }
    let arr = Array.from(map);
    arr.sort((a, b) => b[1] - a[1]);
    return arr.map(v => v[0]).slice(0, k)
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));