// 728. 自除数 https://leetcode-cn.com/problems/self-dividing-numbers/

function selfDividingNumbers(left: number, right: number): number[] {
    let r = []
    for (let i = left; i <= right; i++) {
        let tSplit = i.toString(10).split('').map(v => parseInt(v, 10));
        let flag = true;
        for (let p of tSplit) {
            if (p === 0 || i % p !== 0) {
                flag = false;
                break;
            }
        }
        if (flag) { r.push(i) }
    }
    return r;
};