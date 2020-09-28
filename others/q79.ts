// 79. 单词搜索 https://leetcode-cn.com/problems/word-search/

function exist(board: string[][], word: string): boolean {
    let m = board.length;
    if (m === 0) return false
    let n = board[0].length;
    if (n === 0) return false;

    let mark = new Array(m).fill([]).map(() => new Array(n).fill(0));

    function canXY(x: number, y: number, str: string) {
        if (board[x][y] !== str[0]) return false;
        mark[x][y] = 1;
        if (str.length === 1) return true;
        let sub = str.substr(1)
        if (x !== 0 && mark[x - 1][y] === 0 && canXY(x - 1, y, sub)) return true;
        if (y !== 0 && mark[x][y - 1] === 0 && canXY(x, y - 1, sub)) return true;
        if (x !== m - 1 && mark[x + 1][y] === 0 && canXY(x + 1, y, sub)) return true;
        if (y !== n - 1 && mark[x][y + 1] === 0 && canXY(x, y + 1, sub)) return true;
        mark[x][y] = 0;
        return false;
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (canXY(i, j, word)) return true
        }
    }
    return false;

};

console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]],
    "ABCB"))