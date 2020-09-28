// 892. 三维形体的表面积  https://leetcode-cn.com/problems/surface-area-of-3d-shapes/
//
// 表面积为  6个面的投影面 + 内部空缺的 四周环面

function surfaceArea(grid: number[][]): number {

    let m = grid.length;
    let n = grid[0].length;
    grid.forEach(v => {
        v.push(0);
        v.unshift(0)
    })
    grid.push(new Array(m + 2).fill(0));
    grid.unshift(new Array(m + 2).fill(0))
    let surface = 0;
    for (let i = 1; i < m + 1; i++) {
        for (let j = 1; j < n + 1; j++) {
            if (grid[i][j] > 0) {
                surface += 2;
                surface += grid[i][j] > grid[i - 1][j] ? grid[i][j] - grid[i - 1][j] : 0;
                surface += grid[i][j] > grid[i + 1][j] ? grid[i][j] - grid[i + 1][j] : 0;
                surface += grid[i][j] > grid[i][j - 1] ? grid[i][j] - grid[i][j - 1] : 0;
                surface += grid[i][j] > grid[i][j + 1] ? grid[i][j] - grid[i][j + 1] : 0;
            }
        }
    }
    return surface;
};

console.log(surfaceArea([[1,1,1],[1,0,1],[1,1,1]]))