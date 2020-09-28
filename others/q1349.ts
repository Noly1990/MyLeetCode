// 1349. 参加考试的最大学生数  https://leetcode-cn.com/problems/maximum-students-taking-exam/

function maxStudents(seats: string[][]): number {
    // 00000000  11111111
    let m = seats.length;  // 行
    let n = seats[0].length; // 列
    const dp: number[][] = [];
    for (let i = 0; i < m; i++) {
        dp.push([]);
    }
    for (let i = 0; i < m; i++) {
        let rowCan = geneRowSeat(seats[i]);
        if (i === 0) {
            rowCan.forEach(v => {
                dp[i][parseInt(v, 2)] = countO(v);
            })
        } else {
            let beforeCan = geneRowSeat(seats[i - 1]);
            rowCan.forEach(v => {
                let beforeMask = geneMaskBefore(v);
                let beforeOnlyCan = filterBefore(beforeCan, beforeMask);
                let inner: number[] = []
                beforeOnlyCan.forEach(p => {
                    let ok = dp[i - 1][parseInt(p, 2)] + countO(v);
                    inner.push(ok);
                })
                dp[i][parseInt(v, 2)] = Math.max(...inner);
            })
        }
    }
    let max = 0;
    for (let i = 0; i < dp[m - 1].length; i++) {
        if (dp[m-1][i] && dp[m-1][i] > max) {
            max = dp[m-1][i]
        }
    }
    return max;
};


function geneRowSeat(rowSeat: string[]) {
    const len = rowSeat.length;
    let l = 2 ** len - 1;
    const sset: Set<string> = new Set();
    const mask = geneMask(rowSeat);
    for (let i = 0; i <= l; i++) {
        const t = (i | mask).toString(2);
        sset.add('0'.repeat(len - t.length) + t);
    }
    const r = Array.from(sset).filter(p => p.indexOf('00') === -1);
    return r;
}
function geneMask(rowSeat: string[]) {
    return parseInt(rowSeat.map(v => v === '#' ? 1 : 0).join(''), 2);
}

function geneMaskBefore(recent: string) {
    const all = Array(recent.length).fill('0');
    for (let i = 0; i < recent.length; i++) {
        if (recent[i] === '0') {
            if (i === 0) {
                all[i + 1] = '1'
            } else if (i === recent.length - 1) {
                all[i - 1] = '1'
            } else {
                all[i + 1] = '1'
                all[i - 1] = '1'
            }
        }
    }
    return all.join('')
}


function filterBefore(beforeCan: string[], mask: string) {
    const maskInt = parseInt(mask, 2);
    const sset: Set<string> = new Set();
    beforeCan.forEach(v => {
        const t = parseInt(v, 2);
        sset.add((t | maskInt).toString(2))
    })
    return Array.from(sset);
}

function countO(s: string) {
    let total = 0;
    for (const c of s) {
        if (c === '0') total++
    }
    return total;
}

console.log(maxStudents([["#", ".", ".", ".", "#"],
[".", "#", ".", "#", "."],
[".", ".", "#", ".", "."],
[".", "#", ".", "#", "."],
["#", ".", ".", ".", "#"]]

))