// 806. 写字符串需要的行数 https://leetcode-cn.com/problems/number-of-lines-to-write-string/

function numberOfLines(widths: number[], S: string): number[] {
    const perArr = S.split("").map(v => {
        let n = v.charCodeAt(0) - 'a'.charCodeAt(0);
        return widths[n];
    });
    let index = 0;
    let sum = 0;
    let line = 0;
    while (index < perArr.length) {
        if (sum + perArr[index] < 100) {
            sum += perArr[index];
            index++;
        } else if (sum + perArr[index] === 100) {
            line++;
            index++;
            sum = 0;
        } else {
            line++;
            sum = 0;
        }
    }

    return [line + 1, sum]
};

console.log(numberOfLines([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    "abcdefghijklmnopqrstuvwxyz"))

console.log(numberOfLines([4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
    "bbbcccdddaaa"
))