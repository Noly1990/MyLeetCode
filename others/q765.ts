// 765. 情侣牵手 https://leetcode-cn.com/problems/couples-holding-hands/

function minSwapsCouples(row: number[]): number {
    let n = row.length;

    function isCompare(a: number, b: number) {
        if (a % 2 === 0) {
            return b === a + 1;
        }
        if (b % 2 === 0) {
            return b === b + 1;
        }
        return false;
    }
    let ans = 0;
    for (let i = 0; i < n / 2; i++) {
        if (isCompare(row[2 * i], row[2 * i + 1])) continue
        let aim = row[2 * i] % 2 === 0 ? row[2 * i] + 1 : row[2 * i] - 1;
        for (let j = 2 * (i + 1); j < n; j++) {
            if (row[j] === aim) {
                row[j] = row[2 * i + 1];
                ans++;
            }
        }
    }
    return ans
};