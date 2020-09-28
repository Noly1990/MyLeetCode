// 696. 计数二进制子串 https://leetcode-cn.com/problems/count-binary-substrings/
function countBinarySubstrings(s: string): number {
    let counts = [];
    let t = 0;
    let before = s[0];
    for (const c of s) {
        if (c === before) {
            t++;
        } else {
            counts.push(t);
            t =1;
            before = c;
        }
    }
    counts.push(t);
    let total = 0;
    for (let i=1;i<counts.length;i++) {
        total += Math.min(counts[i], counts[i-1])
    }

    return total;
};

console.log(countBinarySubstrings("0010110001100010110"))