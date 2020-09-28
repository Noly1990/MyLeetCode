// 51. N 皇后  https://leetcode-cn.com/problems/n-queens/
function solveNQueens(n: number): string[][] {
    let panel: string[][] = new Array(n).fill([]).map(() => new Array(n).fill('.'));
    let answer:string[][] = [];
    function canPut(x: number, y: number) {
        let tX = x;
        while (tX > 0) {
            tX--;
            if (panel[tX][y] === 'Q') return false
        }
        let tY = y;
        while (tY > 0) {
            tY--;
            if (panel[x][tY] === 'Q') return false;
        }
        let index = 0;
        while (x > 0 && (y - index > 0 || y + index < n - 1)) {
            x--;
            index++;
            if (y - index >= 0 && panel[x][y - index] === 'Q') return false;
            if (y + index <= n - 1 && panel[x][y + index] === 'Q') return false;
        }
        return true;
    }
    function put(index: number) {
        for (let i = 0; i < n; i++) {
            if (panel[index][i] === '.' && canPut(index, i)) {
                panel[index][i] = 'Q';
                if (index === n - 1) {
                    answer.push(panel.map(v => v.join('')))
                } else {
                    put(index + 1)
                }
                panel[index][i] = '.';
            }
        }
    }
    put(0);
    return answer;
};

console.log(solveNQueens(8))