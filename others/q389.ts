// 389. 找不同 https://leetcode-cn.com/problems/find-the-difference/

function findTheDifference(s: string, t: string): string {
    let sArr = new Array(26).fill(0);
    let tArr = new Array(26).fill(0);
    let aCode = 'a'.charCodeAt(0);
    for (let i = 0; i < t.length; i++) {
        if (i === t.length - 1) {
            tArr[t[i].charCodeAt(0) - aCode] ++;
        } else {
            sArr[s[i].charCodeAt(0) - aCode] ++;
            tArr[t[i].charCodeAt(0) - aCode] ++;
        }
    }

    for (let i=0;i<sArr.length;i++) {
        if (sArr[i] === tArr[i] -1) return String.fromCharCode(aCode + i)
    }

    return 'a';
}