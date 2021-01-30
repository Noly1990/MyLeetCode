// 1631. 最小体力消耗路径 https://leetcode-cn.com/problems/path-with-minimum-effort/

function minimumEffortPath(heights: number[][]): number {
    let m = heights.length;
    let n = heights[0].length;
    if (m === 1 && n === 1) return 0
    let edges = [];
    let parent = new Array(m * n).fill(0).map((v, i) => i);

    function find(x: number) {
        if (parent[x] === x) return x;
        parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(u: number, v: number) {
        parent[find(v)] = find(u);
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j < n - 1) {
                edges.push([i * n + j, i * n + j + 1, Math.abs(heights[i][j] - heights[i][j + 1])])
            }
            if (i < m - 1) {
                edges.push([i * n + j, (i + 1) * n + j, Math.abs(heights[i][j] - heights[i + 1][j])])
            }

        }
    }
    edges.sort((a, b) => a[2] - b[2]);
    for (let i = 0; i < edges.length; i++) {
        union(edges[i][0], edges[i][1]);
        if (find(0) === find(m * n - 1)) return edges[i][2]
    }
    return 0;
};

console.log(minimumEffortPath([[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]]))

console.log(minimumEffortPath([[1, 2, 2], [3, 8, 2], [5, 3, 5]]))