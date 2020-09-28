var minimalSteps = function(maze) {
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    let n = maze.length
    let m = maze[0].length

    // 机关&石头
    const buttons = new Array()
    const stones = new Array()

    // 起点&终点
    let sx = -1, sy = -1, tx = -1, ty = -1

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < m; j++) {
            if(maze[i][j] === 'M') {
                buttons.push([i, j])
            }
            if(maze[i][j] === 'O') {
                stones.push([i, j])
            }
            if(maze[i][j] === 'S') {
                sx = i, sy = j
            }
            if(maze[i][j] === 'T') {
                tx = i, ty = j
            }
        }
    }

    // 机关&石头的数量
    let nb = buttons.length, ns = stones.length

    // 判断边界
    function inBound(x, y) {
        return x >= 0 && x < n && y >= 0 && y < m;
    }

    // bfs
    function bfs(x, y, maze) {
        let ret = Array.from(Array(n), () => Array(m).fill(-1))
        ret[x][y] = 0
        const queue = new Array()
        queue.push([x, y])
        while(queue.length) {
            let p = queue.shift()
            let curx = p[0], cury = p[1]
            for(let k = 0; k < 4; k++) {
                let nx = curx + dx[k], ny = cury + dy[k];
                if(inBound(nx, ny) && maze[nx][ny] !== '#' && ret[nx][ny] == -1) {
                    ret[nx][ny] = ret[curx][cury] + 1;
                    queue.push([nx, ny])
                }
            }
        }
        return ret
    }

    let startDist = bfs(sx, sy, maze)

    // 边界情况：没有机关
    if (nb == 0) {
        return startDist[tx][ty]
    }

    // 从某个机关到其他机关 / 起点与终点的最短距离。
    const dist = Array.from(Array(nb), () => Array(nb + 2).fill(-1))

    // 中间结果
    const dd = new Array(nb)
    for(let i = 0; i < nb; i++) {
        let d = bfs(buttons[i][0], buttons[i][1], maze)
        dd[i] = d
        dist[i][nb + 1] = d[tx][ty]
    }
    for(let i = 0; i < nb; i++) {
        let tmp = -1
        for(let k = 0; k < ns; k++) {
            let midX = stones[k][0], midY = stones[k][1]
            if(dd[i][midX][midY] != -1 && startDist[midX][midY] != -1) {
                if(tmp == -1 || tmp > dd[i][midX][midY] + startDist[midX][midY]) {
                    tmp = dd[i][midX][midY] + startDist[midX][midY]
                }
            }
        }
        dist[i][nb] = tmp
        for (let j = i + 1; j < nb; j++) {
            let mn = -1
            for (let k = 0; k < ns; k++) {
                let midX = stones[k][0], midY = stones[k][1]
                if (dd[i][midX][midY] != -1 && dd[j][midX][midY] != -1) {
                    if (mn == -1 || mn > dd[i][midX][midY] + dd[j][midX][midY]) {
                        mn = dd[i][midX][midY] + dd[j][midX][midY]
                    }
                }
            }
            dist[i][j] = mn
            dist[j][i] = mn
        }
    }

    // 无法达成的情形
     for (let i = 0; i < nb; i++) {
        if (dist[i][nb] == -1 || dist[i][nb + 1] == -1) {
            return -1
        }
    }

    // dp 数组， -1 代表没有遍历到
    const dp = Array.from(Array(1 << nb), () => Array(nb).fill(-1))
    for(let i = 0; i < nb; i++) {
        dp[1 << i][i] = dist[i][nb]
    }

    // 由于更新的状态都比未更新的大，所以直接从小到大遍历即可
    for(let mask = 1; mask < (1 << nb); mask++) {
        for(let i = 0; i < nb; i++) {
            // 当前 dp 是合法的
            if((mask & (1 << i)) != 0) {
                for(let j = 0; j < nb; j++) {
                    // j 不在 mask 里
                    if((mask & (1 << j)) == 0) {
                        let next = mask | (1 << j)
                        if(dp[next][j] == -1 || dp[next][j] > dp[mask][i] + dist[i][j]) {
                            dp[next][j] = dp[mask][i] + dist[i][j]
                        }
                    }
                }
            }
        }
    }
    let ret = -1
    let finalMask = (1 << nb) - 1
    for(let i = 0; i < nb; i++) {
        if(ret == -1 || ret > dp[finalMask][i] + dist[i][nb + 1]) {
            ret = dp[finalMask][i] + dist[i][nb + 1]
        }
    }
    return ret
}
