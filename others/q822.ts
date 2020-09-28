// 822. 翻转卡片游戏  https://leetcode-cn.com/problems/card-flipping-game/

function flipgame(fronts: number[], backs: number[]): number {
    if (fronts.length === 0) return 0;
    let okArr = new Array(2001).fill(0);
    let set: Set<number> = new Set();
    for (let i = 0; i < fronts.length; i++) {
        set.add(fronts[i])
        set.add(backs[i])
        if (fronts[i] === backs[i]) {
            okArr[fronts[i]]++;
        }
        if (okArr[fronts[i]]) {
            okArr[fronts[i]]++;
        }

        if (okArr[backs[i]]) {
            okArr[backs[i]]++;
        }
    }
    let arr: number[] = Array.from(set).sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (okArr[arr[i]] < 2) return arr[i]
    }
    return 0;
};

console.log(flipgame([1, 2, 4, 4, 7],
    [1, 3, 4, 1, 3]))
