// 632. 最小区间 https://leetcode-cn.com/problems/smallest-range-covering-elements-from-k-lists/

function smallestRange(nums: number[][]): number[] {
    const map: Map<number, Set<number>> = new Map();
    const keySet: Set<number> = new Set()
    const k = nums.length;
    for (let i = 0; i < nums.length; i++) {
        for (let j of nums[i]) {
            keySet.add(j)
            if (map.get(j)) {
                let tSet = map.get(j) || new Set();
                tSet.add(i)
            } else {
                map.set(j, new Set([i]));
            }
        }
    }
    const keyArr: number[] = Array.from(keySet);
    keyArr.sort((a, b) => a - b);
    let r = [keyArr[0], keyArr[keyArr.length - 1]];
    for (let i = 0; i < keyArr.length; i++) {
        let tempSet = new Set();
        for (let j = i; j < keyArr.length; j++) {
            map.get(keyArr[j]).forEach(v => tempSet.add(v))
            if (tempSet.size === k) {
                if (keyArr[j] - keyArr[i] < r[1] - r[0]) {
                    r[1] = keyArr[j];
                    r[0] = keyArr[i];
                } else if (keyArr[j] - keyArr[i] === r[1] - r[0] && keyArr[i] < r[0]) {
                    r[1] = keyArr[j];
                    r[0] = keyArr[i];
                }
                break
            }
        }
    }

    return r;
};




console.log(smallestRange([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]));


console.log(smallestRange2([[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]));