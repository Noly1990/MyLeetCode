//1046. 最后一块石头的重量 https://leetcode-cn.com/problems/last-stone-weight/
function lastStoneWeight(stones: number[]): number {

    function compareXY(x: number, y: number): number {
        return x === y ? 0 : Math.abs(x - y);
    }

    if (stones.length === 1) return stones[0];
    if (stones.length === 2) return compareXY(stones[0], stones[1]);
    while (stones.length > 2) {
        stones.sort((a, b) => a - b);
        let x = stones.pop() || 0;
        let y = stones.pop() || 0;
        let c = compareXY(x, y);
        if (c !== 0) {
            stones.push(c)
        }
    }
    if (stones.length === 1) return stones[0];
    if (stones.length === 2) return compareXY(stones[0], stones[1]);
    return 0;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1, 2, 5]))

