// 1579. 保证图可完全遍历 https://leetcode-cn.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/

function maxNumEdgesToRemove(n: number, edges: number[][]): number {
    let parentA = new Array(n).fill(0).map((v, i) => i);

    let parentB = new Array(n).fill(0).map((v, i) => i);

    edges.sort((a, b) => b[0] - a[0]);

    function findA(x: number) {
        if (parentA[x] === x) return x;
        parentA[x] = findA(parentA[x]);
        return parentA[x];
    }

    function findB(x: number) {
        if (parentB[x] === x) return x;
        parentB[x] = findB(parentB[x]);
        return parentB[x];
    }

    function unionA(a: number, b: number) {
        parentA[findA(b)] = findA(a)
    }

    function unionB(a: number, b: number) {
        parentB[findB(b)] = findB(a)
    }
    let ans = 0;
    for (let i = 0; i < edges.length; i++) {
        let [type, u, v] = edges[i];
        u=u-1;
        v=v-1;
        if (type === 3) {
            if (findA(u) === findA(v) && findB(u) === findB(v)) {
                ans++;
            } else if (findA(u) === findA(v) && findB(u) !== findB(v)) {
                unionB(u, v)
            } else if (findA(u) !== findA(v) && findB(u) === findB(v)) {
                unionA(u, v);
            } else {
                unionA(u, v);
                unionB(u, v);
            }
        } else if (type === 2) {
            if (findB(u) === findB(v)) {
                ans++
            } else {
                unionB(u, v);
            }
        } else {
            if (findA(u) === findA(v)) {
                ans++
            } else {
                unionA(u, v);
            }
        }
    }
    for (let i = 0; i < n; i++) {
        findA(i);
        findB(i);
    }

    if (new Set(parentA).size === 1 && new Set(parentB).size === 1) return ans
    return -1;
};


console.log(maxNumEdgesToRemove(4, [[3, 1, 2], [3, 2, 3], [1, 1, 3], [1, 2, 4], [1, 1, 2], [2, 3, 4]]));