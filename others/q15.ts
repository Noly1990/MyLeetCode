// 15. 三数之和 https://leetcode-cn.com/problems/3sum/

function threeSum(nums: number[]): number[][] {
    const r = []
    nums.sort((a, b) => a - b);
    let set1: Set<number> = new Set()
    let set2: Set<number> = new Set()
    let moreSet: Set<number> = new Set()
    let zeroNum = 0;
    for (let num of nums) {
        if (num > 0) {
            if (set1.has(num)) moreSet.add(num)
            set1.add(num);
        } else if (num < 0) {
            if (set2.has(num)) moreSet.add(num)
            set2.add(num);
        } else {
            zeroNum++;
        }
    }

    if (zeroNum >= 3) r.push([0, 0, 0]);
    for (let x of set1) {
        for (let y of set2) {
            let target = -(x + y);
            if (target > x) {
                continue
            }
            if (target < y) {
                continue
            }
            if ((target === x && moreSet.has(target)) || (target === y && moreSet.has(target))) {
                r.push([x, y, target])
            } else {
                if (target === 0 && zeroNum > 0) {
                    r.push([x, y, 0])
                } else if (target !== x && target !== y) {
                    if ((target > 0 && set1.has(target)) || (target < 0) && set2.has(target)) {
                        r.push([x, y, target])
                    }
                }
            }

        }
    }
    return r
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([3, 0, -5, -2, -1, 1, 2]))
