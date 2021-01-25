// 999. 可以被一步捕获的棋子数 https://leetcode-cn.com/problems/available-captures-for-rook/

function numRookCaptures(board: string[][]): number {
    let total = 0;

    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (board[i][j] === 'R') {
                let index = 1;
                let top = false;
                let bottom = false;
                let left = false;
                let right = false;
                while (!top || !bottom || !left || !right) {
                    if (i - index < 0) top = true
                    if (i + index > 7) bottom = true;
                    if (j - index < 0) left = true;
                    if (j + index > 7) right = true;
                    if (!top) {
                        let ttop = board[i - index][j];
                        if (ttop === 'p') {
                            total++;
                            top = true;
                        } else if (ttop === 'B') {
                            top = true;
                        }
                    }

                    if (!bottom && i + index <= 7) {
                        let bbottom = board[i + index][j];
                        if (bbottom === 'p') {
                            total++;
                            bottom = true;
                        } else if (bbottom === 'B') {
                            bottom = true;
                        }
                    }
                    if (!left && j - index >= 0) {
                        let lleft = board[i][j - index];
                        if (lleft === 'p') {
                            total++;
                            left = true;
                        } else if (lleft === 'B') {
                            left = true;
                        }
                    }

                    if (!right && j + index <= 7) {
                        let rright = board[i][j + index];
                        if (rright === 'p') {
                            total++;
                            right = true;
                        } else if (rright === 'B') {
                            right = true;
                        }
                    }
                    index ++;
                }
                return total
            }
        }
    }
    return 0;
};