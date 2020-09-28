// 994. 腐烂的橘子 https://leetcode-cn.com/problems/rotting-oranges/

function orangesRotting(grid: number[][]): number {
    let minute = 0;
    let hasGood = false;
    while (true) {
        let canBad = [];
        hasGood = false;
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (!hasGood && grid[i][j] === 1) {
                    hasGood = true;
                }
                if (grid[i][j] === 2) {
                    canBad.push(...getCanBad(i, j));
                }
            }
        }

        if (canBad.length === 0) break;
        canBad.forEach((p) => {
            let [x, y] = p;
            grid[x][y] = 2;
        })
        minute++;
    }


    function getCanBad(x: number, y: number) {
        let t = []
        if (grid[x - 1] && grid[x - 1][y] === 1) {
            t.push([x - 1, y])
        }
        if (grid[x + 1] && grid[x + 1][y] === 1) {
            t.push([x + 1, y])
        }
        if (grid[x][y - 1] === 1) {
            t.push([x, y - 1])
        }
        if (grid[x][y + 1] === 1) {
            t.push([x, y + 1])
        }
        return t;
    }

    return hasGood ? -1 : minute;
};

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]]))

console.log(orangesRotting([[2], [1], [1], [1], [2], [1], [1]]))