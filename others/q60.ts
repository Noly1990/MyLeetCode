// 60. 第k个排列 https://leetcode-cn.com/problems/permutation-sequence/
function getPermutation(n: number, k: number): string {
    if (n === 1) return '1';
    let all: string[] = []
    function process(x: number, prefix: string) {
        if (all.length > k) return
        for (let i = 1; i <= n; i++) {
            if (prefix.indexOf(`${i}`) === -1) {
                if (x === n) {
                    all.push(prefix + i);
                } else {
                    process(x + 1, prefix + i)
                }
            }
        }
    }

    function plusN(y: number) {
        let t = 1;
        y--;
        while (y > 1) {
            t *= y;
            y--
        }
        return t;
    }

    let tN = n;

    let each = plusN(tN);
    let first = Math.ceil(k / each);
    let remain = k - (each * (first - 1));
    if (n === 2) {
        process(2, `${first}`);
        return all[remain - 1];
    }
    each = plusN(n-1);
    let second = Math.ceil(remain / each);
    remain = remain - each * (second - 1);
    second = second >= first ? second + 1: second;

    process(3, `${first}${second}`);

    return all[remain - 1];
};

console.log(getPermutation(4, 12))