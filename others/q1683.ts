// 1683 面试题 17.06. 2出现的次数 https://leetcode-cn.com/problems/number-of-2s-in-range-lcci/ 

function numberOf2sInRange(n: number): number {
    // 9   1   1 * 10 ** (1-1)
    // 99  20   2 * 10 ** (2-1)
    // 999 300  3 * 10 ** (3-1)
    /// 9999 4000   4 * 10 ** (4-1)
    //// 99999 50000  5* 10 ** (5-1)
    let total = 0;
    if (n < 10) {
        for (let i = 0; i <= n; i++) {
            if (i === 2) {
                total++
            }
        }
        return total;
    }
    const nStr = n.toString(10);
    const lenN = nStr.length;
    for (let i = 0; i < nStr.length; i++) {
        const each = parseInt(nStr[i], 10);
        const k = (lenN - i - 1);
        const eachFul = 10 ** (k - 1) * k;

        if (each > 2) {
            total += each * eachFul;
            total += 10 ** k;
        } else if (each === 2) {
            total += parseInt(nStr.substr(i + 1), 10) || 0;
            total += each* eachFul + 1;
        } else {
            total += each * eachFul;
        }
    }

    return total;
};

console.log(numberOf2sInRange(7890)) //3379

console.log(numberOf2sInRange(12345)) // 5121

console.log(numberOf2sInRange(222)) // 69 40 + 22 + 6 + 1
console.log(numberOf2sInRange(222222)) // 133338