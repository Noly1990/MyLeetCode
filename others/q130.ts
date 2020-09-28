// 130. 被围绕的区域 https://leetcode-cn.com/problems/surrounded-regions/

function solve(board: string[][]): void {
    let m = board.length;
    if (m === 0) return
    let n = board[0].length;
    if (n === 0) return
    let queue: string[] = [];
    let boardF = new Array(m).fill([]).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        if (board[i][0] === 'O') {
            boardF[i][0] = 1;
            queue.push(`${i}-${0}`);
        }
        if (board[i][n - 1] === 'O') {
            boardF[i][n - 1] = 1;
            queue.push(`${i}-${n - 1}`);
        }

    }
    for (let i = 0; i < n; i++) {
        if (board[0][i] === 'O') {
            boardF[0][i] = 1;
            queue.push(`${0}-${i}`);
        }
        if (board[m - 1][i] === 'O') {
            boardF[m - 1][i] = 1;
            queue.push(`${m - 1}-${i}`);
        }
    }


    while (queue.length > 0) {
        let newQueue: string[] = [];

        for (let str of queue) {
            let [x, y] = str.split('-').map(v => parseInt(v, 10));
            if (board[x - 1]?.[y] === 'O' && boardF[x - 1][y] === 0) {
                queue.push(`${x - 1}-${y}`)
                boardF[x - 1][y] = 1
            }
            if (board[x + 1]?.[y] === 'O' && boardF[x + 1][y] === 0) {
                queue.push(`${x + 1}-${y}`)
                boardF[x + 1][y] = 1
            }
            if (board[x][y - 1] === 'O' && boardF[x][y - 1] === 0) {
                queue.push(`${x}-${y - 1}`)
                boardF[x][y - 1] = 1
            }
            if (board[x][y + 1] === 'O' && boardF[x][y + 1] === 0) {
                boardF[x][y + 1] = 1
                queue.push(`${x}-${y + 1}`)
            }
        }

        queue = newQueue;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 'O' && boardF[i][j] === 0) {
                board[i][j] = 'X'
            }
        }
    }
 
};

console.log(solve([["O", "O", "O"], ["O", "O", "O"], ["O", "O", "O"]]))