// 778. 水位上升的泳池中游泳 https://leetcode-cn.com/problems/swim-in-rising-water/

function swimInWater(grid: number[][]): number {

    let m = grid.length;
    let n = grid[0].length;
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
                edges.push([i * n + j, i * n + j + 1, Math.max(grid[i][j], grid[i][j + 1])])
            }
            if (i < m - 1) {
                edges.push([i * n + j, (i + 1) * n + j, Math.max(grid[i][j] , grid[i + 1][j])])
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
 