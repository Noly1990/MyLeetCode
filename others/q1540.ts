// 1540. K 次操作转变字符串 https://leetcode-cn.com/problems/can-convert-string-in-k-moves/

function canConvertString(s: string, t: string, k: number): boolean {
    if (s === t) return true;
    if (s.length !== t.length) return false;
    let max = 0;
    let last: Map<number, number> = new Map()
    function computeTime(a: string, b: string) {
        let distance = b.charCodeAt(0) - a.charCodeAt(0);
        return distance > 0 ? distance : (26 + distance);
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            let tp = computeTime(s[i], t[i]);
            let index = last.has(tp) ? ((last.get(tp) || 0) + 26) : tp;
            if (index > k) return false;
            if (index > max) {
                max = tp
            }
            last.set(tp, index)
        }
    }
    return max <= k;
};

console.log(canConvertString('abc', 'bcd', 10))