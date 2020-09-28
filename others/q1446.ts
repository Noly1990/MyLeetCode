//  1446. 连续字符  https://leetcode-cn.com/problems/consecutive-characters/

function maxPower(s: string): number {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    let max = 0;
    let c = s[0];
    let t=0;
    for (const p of s) {
        if (p === c) {
            t++;
        } else {
            max = Math.max(max, t);
            t = 1;
            c = p;
        }
    }

    return Math.max(max, t);
};