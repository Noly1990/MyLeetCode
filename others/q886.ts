//886. 可能的二分法 https://leetcode-cn.com/problems/possible-bipartition/

// 输入：N = 4, dislikes = [[1,2],[1,3],[2,4]]
// 输出：true
// 解释：group1 [1,4], group2 [2,3]
// 示例 2：


function possibleBipartition(N: number, dislikes: number[][]): boolean {
    let okArr: number[] = []; // 0 未分组  1 左  2 右
    const dislikesCollections: number[][] = [];
    for (let i = 0; i <= N; i++) {
        okArr.push(0)
        dislikesCollections.push([])
    }
    dislikes.forEach((r) => {
        const [a, b] = r;
        dislikesCollections[a].push(b);
        dislikesCollections[b].push(a);
    })

    for (let index = 1; index <= N; index++) {
        // if (okArr[index] === 0 && !put(index, 1)) return false; 
        // 因为一系列相关的点都已经被染色呈1 ，2 且不相冲突，所以后续的染色 1 或 2 都无所谓
        if (okArr[index] === 0 && !put(index, 1) && !put(index, 2)) return false;
    }

    function put(index: number, color: number) {
        if (okArr[index] !== 0) {
            return okArr[index] === color;
        }
        okArr[index] = color;
        for (const p of dislikesCollections[index]) {
            if (!put(p, color === 1 ? 2 : 1)) return false;
        }
        return true;
    }

    return true;
};

console.log(possibleBipartition(5,
    [[1, 2], [2, 3], [3, 4], [4, 5], [1, 5]]))

console.log(possibleBipartition(4, [[1, 2], [1, 3], [2, 4]]));

console.log(possibleBipartition(50,
    [[39, 46], [4, 41], [3, 35], [8, 44], [22, 44], [7, 49], [28, 41], [7, 25], [6, 35], [2, 22], [34, 35], [3, 7], [1, 11], [11, 48], [8, 24], [6, 7], [38, 40], [37, 48], [3, 45], [44, 45], [4, 46], [23, 35], [28, 46], [7, 28], [35, 36], [18, 20], [8, 15], [17, 41], [13, 35], [6, 22], [22, 48], [22, 39], [4, 35], [8, 38], [23, 41], [10, 41], [6, 41], [18, 48], [16, 41], [37, 44], [8, 12], [18, 36], [16, 18], [7, 44], [3, 18], [10, 46], [20, 37], [2, 37], [11, 49], [30, 45], [28, 37], [23, 37], [22, 23], [5, 37], [29, 40], [16, 35], [22, 26], [46, 49], [18, 26], [8, 9], [24, 46], [8, 28], [11, 29], [22, 24], [7, 15], [4, 37], [9, 40], [8, 32], [23, 40], [40, 42], [33, 40], [17, 45], [40, 48], [12, 41], [43, 45], [38, 41], [45, 47], [12, 18], [7, 31], [34, 37], [8, 48], [4, 11], [46, 48], [2, 7], [17, 40], [12, 46], [22, 49], [46, 50], [37, 50], [22, 36], [22, 43], [41, 44], [13, 22], [11, 16], [7, 47], [14, 37], [37, 43], [13, 37], [26, 40], [19, 41], [46, 47], [16, 22], [19, 22], [22, 33], [11, 19], [35, 44], [7, 33], [41, 49], [38, 45], [25, 35], [3, 37], [15, 22], [6, 18], [11, 30], [5, 41], [8, 33], [1, 46], [31, 46], [41, 42], [18, 28], [15, 41], [35, 49], [25, 41], [20, 45], [26, 46], [8, 43], [5, 45], [28, 40], [1, 18], [23, 46], [13, 18], [35, 38], [8, 49], [11, 44], [18, 33], [4, 7], [5, 7], [10, 11], [37, 49], [9, 22], [4, 45], [32, 45], [32, 37], [29, 35], [26, 35], [7, 29], [1, 37], [8, 14], [5, 11], [18, 29], [18, 49], [21, 41], [17, 35], [7, 10], [22, 38], [40, 43], [5, 35], [33, 35], [6, 40], [34, 40], [22, 34], [16, 40], [19, 46], [18, 39], [24, 35], [19, 35], [18, 50], [8, 17], [11, 12], [27, 35], [8, 47], [7, 9], [7, 36], [8, 34], [7, 26], [31, 41], [29, 41], [10, 45], [9, 35], [33, 46], [11, 32], [34, 45], [42, 46], [15, 40], [40, 50], [30, 40], [25, 40], [15, 37]]))

function possibleBipartition2(N: number, dislikes: number[][]): boolean {
    const left: Set<number> = new Set();
    const right: Set<number> = new Set();
    const dislikesCollections: number[][] = [];
    for (let i = 0; i <= N; i++) {
        dislikesCollections.push([])
    }
    dislikes.forEach((r) => {
        const [a, b] = r;
        dislikesCollections[a].push(b);
        dislikesCollections[b].push(a);
    })

    function put(index: number) {
        if (index === N + 1) {
            return true;
        }
        if (!leftHasArr(dislikesCollections[index])) {
            left.add(index);
            if (put(index + 1)) {
                return true;
            }
            left.delete(index);
        }
        if (!rightHasArr(dislikesCollections[index])) {
            right.add(index);
            if (put(index + 1)) {
                return true;
            }
            right.delete(index);
        }

        return false;
    }

    function leftHasArr(arr: number[]) {
        for (const p of arr) {
            if (left.has(p)) return true;
        }
        return false;
    }

    function rightHasArr(arr: number[]) {
        for (const p of arr) {
            if (right.has(p)) return true;
        }
        return false;
    }

    return put(1);
};