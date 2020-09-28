// 36. 有效的数独  https://leetcode-cn.com/problems/valid-sudoku/

function isValidSudoku(board: string[][]): boolean {
    // 列
    const column: string[][] = [[], [], [], [], [], [], [], [], []];
    // 方块
    const block:string[][] = [[], [], [], [], [], [], [], [], []]
    // 行
    const needCheckArrs: string[][] = [...board , ...column, ...block];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            column[j].push(board[i][j]);
            if (i >= 0 && i <= 2 && j >= 0 && j <= 2) {
                block[0].push(board[i][j])
            }
            if (i >= 3 && i <= 5 && j >= 0 && j <= 2) {
                block[1].push(board[i][j])
            }
            if (i >= 6 && i <= 8 && j >= 0 && j <= 2) {
                block[2].push(board[i][j])
            }
            if (i >= 0 && i <= 2 && j >= 3 && j <= 5) {
                block[3].push(board[i][j])
            }
            if (i >= 3 && i <= 5 && j >= 3 && j <= 5) {
                block[4].push(board[i][j])
            }
            if (i >= 6 && i <= 8 && j >= 3 && j <= 5) {
                block[5].push(board[i][j])
            }
            if (i >= 0 && i <= 2 && j >= 6 && j <= 8) {
                block[6].push(board[i][j])
            }
            if (i >= 3 && i <= 5 && j >= 6 && j <= 8) {
                block[7].push(board[i][j])
            }
            if (i >= 6 && i <= 8 && j >= 6 && j <= 8) {
                block[8].push(board[i][j])
            }
        }
    }
    function onlyOnce(arr: string[]) {
        let map:{
            [key :string]: number
        } = {};
        for (const str of arr) {
            if (str === '.') continue
            if (map[str]) return false;
            map[str] = 1;
        }
        return true;
    }
    for (const perCheck of needCheckArrs) {
        if (!onlyOnce(perCheck)) return false;
    }
    return true;
};

console.log(isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]))

