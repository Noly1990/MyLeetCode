// 959. 由斜杠划分区域 https://leetcode-cn.com/problems/regions-cut-by-slashes/

function regionsBySlashes(grid: string[]): number {
    let m = grid.length;
    let n = grid[0].length;
    let parent = new Array(m * n * 2).fill(0).map((v, i) => i);

    function find(x: number) {
        if (parent[x] === x) return x;
        parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(x: number, y: number) {
        parent[find(x)] = find(y);
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let index = i * n + j;
            if (j > 0) {
                union(2 * index, 2 * index - 1);
            }
            if (grid[i][j] === ' ') {
                union(2 * index + 1, 2 * index);
                if (i > 0) {
                    if (grid[i - 1][j] === '/') {
                        union(2 * index, 2 * ((i - 1) * n + j) + 1)
                    } else {
                        union(2 * index, 2 * ((i - 1) * n + j))
                    }
                }
            } else if (grid[i][j] === '/') {
                if (i > 0) {
                    if (grid[i - 1][j] === '/') {
                        union(2 * index, 2 * ((i - 1) * n + j) + 1)
                    } else {
                        union(2 * index, 2 * ((i - 1) * n + j))
                    }
                }
            } else {
                if (i > 0) {
                    if (grid[i - 1][j] === '/') {
                        union(2 * index + 1, 2 * ((i - 1) * n + j) + 1)
                    } else {
                        union(2 * index + 1, 2 * ((i - 1) * n + j))
                    }
                }
            }
        }
    }
    for (let i=0;i<parent.length;i++) {
        find(i);
    }
    return new Set(parent).size;
};
console.log(regionsBySlashes([" /","/ "]));
console.log(regionsBySlashes(["/\\", "\\/"]))