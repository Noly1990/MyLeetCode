// 392. 判断子序列 https://leetcode-cn.com/problems/is-subsequence/

function isSubsequence(s: string, t: string): boolean {
    if (s.length === 0) return true;
    let indexS = 0;
    let indexT = 0;
    while(indexT < t.length) {
        if (t[indexT] === s[indexS]) {
            indexS++;
            if (indexS === s.length) return true
        }
        indexT++;
    }

    return false;
};

console.log(isSubsequence("axc","ahbgdc"))