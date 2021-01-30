// 961. 重复 N 次的元素 https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/
function repeatedNTimes(A: number[]): number {
    let map:Map<number,number> = new Map();
    let n = A.length / 2;
    for (let num of A) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1)
        }
    }
    for (let per of map) {
        let [key ,v] = per;
        if (v === n) return key
    }
    return -1;
};