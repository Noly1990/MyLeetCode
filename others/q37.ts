// 37. 解数独 https://leetcode-cn.com/problems/sudoku-solver/

/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {

    const blockRange: {
        [key: number]: number[]
    } = {
        0: [0, 1, 2],
        1: [0, 1, 2],
        2: [0, 1, 2],
        3: [3, 4, 5],
        4: [3, 4, 5],
        5: [3, 4, 5],
        6: [6, 7, 8],
        7: [6, 7, 8],
        8: [6, 7, 8]
    }
    const empty: [number, number][] = [];
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                empty.push([i, j])
            }
        }
    }


    function getCanNums(x: number, y: number) {
        const set = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9'])
        for (let i = 0; i < 9; i++) {
            set.delete(board[x][i]);
            set.delete(board[i][y]);
        }
        for (let i of blockRange[x]) {
            for (let j of blockRange[y]) {
                set.delete(board[i][j])
            }
        }
        return Array.from(set)
    }
    while (empty.length > 0) {
        let b = empty.length;
        for (let i = 0; i < empty.length; i++) {
            let [x, y] = empty[i];
            const canArr = getCanNums(x, y);
            if (canArr.length === 1) {
                board[x][y] = canArr[0];
                empty.splice(i, 1)
                i--;
            }
        }
        if (empty.length === b) break;
    }

    function fillEmpty(index: number) {

        let [x, y] = empty[index];
        const canArr = getCanNums(x, y);
        if (index === empty.length - 1 && canArr.length === 1) {
            board[x][y] = canArr[0];
            return true;
        }
        if (canArr.length === 0) return false;
        else {
            for (let i = 0; i < canArr.length; i++) {
                board[x][y] = canArr[i]
                if (fillEmpty(index + 1)) return true;
                board[x][y] = '.'
            }
        }
        return false;
    }
    if (empty.length !== 0) {
        fillEmpty(0)
    }
};

// console.log(solveSudoku([
//     ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//     ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//     [".", "9", "8", ".", ".", ".", ".", "6", "."],
//     ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//     ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//     ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//     [".", "6", ".", ".", ".", ".", "2", "8", "."],
//     [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//     [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
// )

// console.log(solveSudoku([
//     ["8", ".", ".", ".", ".", "5", "2", ".", "."],
//     [".", ".", ".", ".", "6", ".", ".", "3", "."],
//     ["9", ".", ".", ".", ".", ".", "5", ".", "."],
//     [".", "7", "3", ".", ".", ".", ".", "6", "."],
//     [".", ".", ".", ".", "2", "8", ".", ".", "5"],
//     [".", "5", ".", "6", ".", ".", ".", ".", "."],
//     [".", "2", ".", ".", ".", ".", ".", ".", "9"],
//     ["4", ".", ".", ".", ".", ".", ".", ".", "8"],
//     [".", ".", "6", "7", "3", ".", ".", "2", "."],
// ]))

console.log(solveSudoku([
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", ".", ".", ".", "."],
]))