// 546. 移除盒子 https://leetcode-cn.com/problems/remove-boxes/

function removeBoxes(boxes: number[]): number {
    if (boxes.length < 2) return boxes.length;
    let boxLen = boxes.length;
    let store: number[][][] = [];
    for (let i = 0; i < boxLen; i++) {
        store[i] = [];
        for (let j = 0; j < boxLen; j++) {
            store[i][j] = []
            for (let k = 0; k < boxLen; k++) {
                store[i][j][k] = 0;
            }
        }
    }
    function process(x: number, y: number, z: number):number {
        if (store[x][y][z] !== 0) {
            return store[x][y][z] - 1;
        }
        if (x === y) {
            store[x][y][z] = (1 + z) * (1 + z) + 1;
            return (1 + z) * (1 + z);
        }
        let max = process(x, y - 1, 0) + (1 + z) * (1 + z);
        for (let i = y - 1; i >= x; i--) {
            if (boxes[i] === boxes[y]) {
                max = Math.max(max, process(x, i, z + 1) + (i + 1 < y ? process(i + 1, y - 1, 0) : 0));
            }
        }
        store[x][y][z] = max + 1;
        return max;
    }

    for (let gap = 0; gap < boxLen; gap++) {
        for (let i = 0; i + gap < boxLen; i++) {
            process(i, i + gap, 0);
        }
    }
    return store[0][boxLen - 1][0] - 1;;
};
console.log(removeBoxes([1, 1, 2, 2, 3, 3]))