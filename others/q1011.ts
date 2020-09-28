// 1011. 在 D 天内送达包裹的能力 https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/

function shipWithinDays(weights: number[], D: number): number {
    const sumArr = [0];
    let sum = 0;
    let max = 0;
    let minNeed = Math.ceil(weights.length / D)
    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        sumArr[i + 1] = sum;
        if (weights[i] > max) {
            max = weights[i]
        }
    }
    function canShip(power: number) {
        let before = 0;
        let index = 1;
        let consume = 0;
        while (true) {
            if (index === sumArr.length) {
                consume++;
                break;
            }
            if (sumArr[index] - sumArr[before] > power) {
                before = index - 1;
                consume++;
            } else {
                index++;
            }
        }
        return consume <= D
    }

    function findMid(a: number, b: number): number {
        if (b - a <= 3) {
            for (let i = a; i <= b; i++) {
                if (canShip(i)) return i;
            }
        }
        const mid = Math.floor((a + b) / 2);
        if (canShip(mid)) {
            return findMid(a, mid)
        } else {
            return findMid(mid, b);
        }
    }
    return findMid(max, minNeed * max);
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
console.log(shipWithinDays([1, 2, 3, 1, 1], 4))