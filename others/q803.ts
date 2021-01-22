// 803. 打砖块 https://leetcode-cn.com/problems/bricks-falling-when-hit/

import * as fs from 'fs'

function hitBricks(grid: number[][], hits: number[][]): number[] {
    let m = grid.length;
    if (m === 0) return hits.map(v => 0);
    let n = grid[0].length;
    if (n === 0) return hits.map(v => 0);
    let ans = [];

    let newGrid = grid.map(v => [...v]);

    for (let [x, y] of hits) {
        newGrid[x][y] = 0;
    }

    function walkFromTop() {

        for (let i = 0; i < n; i++) {
            let queue = [];
            if (newGrid[0][i] === 1) {
                newGrid[0][i] = 2;
                queue.push([0, i])
            }
            while (queue.length > 0) {
                let temp = [];
                for (let [x, y] of queue) {
                    if (x > 0 && newGrid[x - 1][y] === 1) {
                        temp.push([x - 1, y])
                        newGrid[x - 1][y] = 2
                    }
                    if (y > 0 && newGrid[x][y - 1] === 1) {
                        temp.push([x, y - 1])
                        newGrid[x][y - 1] = 2
                    }
                    if (x < m - 1 && newGrid[x + 1][y] === 1) {
                        temp.push([x + 1, y])
                        newGrid[x + 1][y] = 2
                    }
                    if (y < n - 1 && newGrid[x][y + 1] === 1) {
                        temp.push([x, y + 1])
                        newGrid[x][y + 1] = 2
                    }
                }
                queue = temp;
            }
        }
    }

    function searchFromXY(x, y) {
        let queue = [[x, y]];
        let recent = 0;
        while (queue.length > 0) {
            let temp = [];
            for (let [x, y] of queue) {
                if (x > 0 && newGrid[x - 1][y] === 1) {
                    temp.push([x - 1, y])
                    newGrid[x - 1][y] = 2
                    recent++;
                }
                if (y > 0 && newGrid[x][y - 1] === 1) {
                    temp.push([x, y - 1])
                    newGrid[x][y - 1] = 2
                    recent++;
                }
                if (x < m - 1 && newGrid[x + 1][y] === 1) {
                    temp.push([x + 1, y])
                    newGrid[x + 1][y] = 2
                    recent++
                }
                if (y < n - 1 && newGrid[x][y + 1] === 1) {
                    temp.push([x, y + 1])
                    newGrid[x][y + 1] = 2
                    recent++
                }
            }
            queue = temp;
        }
        return recent;
    }


    function checkXY(x, y) {
        if (x === 0) return true;
        if (x > 0 && newGrid[x - 1][y] === 2) {
            return true;
        }
        if (y > 0 && newGrid[x][y - 1] === 2) {
            return true;
        }
        if (x < m - 1 && newGrid[x + 1][y] === 2) {
            return true
        }
        if (y < n - 1 && newGrid[x][y + 1] === 2) {
            return true
        }
        return false;
    }
    walkFromTop()
    for (let i = hits.length - 1; i >= 0; i--) {
        let [x, y] = hits[i];
        if (grid[x][y] === 0) {
            ans.unshift(0);
            continue
        }
        newGrid[x][y] = 1;
        if (checkXY(x, y)) {
            newGrid[x][y] = 2
            ans.unshift(searchFromXY(x, y))
        } else {
            ans.unshift(0)
        }
    }

    return ans;
};

let input = fs.readFileSync('./input2.json');
let obj = JSON.parse(input.toString())
let begin = Date.now()


hitBricks(obj.grid, obj.hits)

console.log(Date.now() - begin)