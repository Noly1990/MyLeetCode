// 529. 扫雷游戏 https://leetcode-cn.com/problems/minesweeper/

function updateBoard(board: string[][], click: number[]): string[][] {

    const m = board.length;
    const n = board[0].length;

    const xBy = [0, 1, -1];
    const yBy = [0, 1, -1];


    function openXY(x: number, y: number) {
        let sideMine = 0;
        let emptyArr = []
        for (let xx of xBy) {
            for (let yy of yBy) {
                if (xx === 0 && yy === 0) continue
                if ((x + xx) < 0 || (x + xx) > m - 1) continue
                if ((y + yy) < 0 || (y + yy) > n - 1) continue
                if (board[x + xx][y + yy] === 'M') sideMine++;
                if (board[x + xx][y + yy] === 'E') emptyArr.push([x + xx, y + yy])
            }
        }
        if (sideMine > 0) {
            board[x][y] = sideMine.toString(10);
        } else {
            board[x][y] = 'B';
            emptyArr.forEach(v => {
                openXY(v[0], v[1])
            })
        }
    }


    let [x, y] = click;
    if (board[x][y] === 'M') {
        board[x][y] = 'X';
        return board;
    } else {
        openXY(x, y);
        return board;
    }
};


console.log(updateBoard([['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'M', 'E', 'E'],
['E', 'E', 'E', 'E', 'E'],
['E', 'E', 'E', 'E', 'E']],
    [3, 0]
))