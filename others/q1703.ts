// 1703 面试题 08.08. 有重复字符串的排列组合 https://leetcode-cn.com/problems/permutation-ii-lcci/

function permutation(S: string): string[] {
    let flagSet = new Set();
    let charArr = []
    let t: string[] = [];
    function process(s: string) {
        if (flagSet.size === S.length) {
            if (t.indexOf(s) === -1) {
                t.push(s)
            }
        }
        let innerArr = []
        for (let i = 0; i < S.length; i++) {
            if (!flagSet.has(i) && innerArr.indexOf(S[i]) === -1) {
                flagSet.add(i);
                innerArr.push(S[i])
                process(s + S[i]);
                flagSet.delete(i)
            }
        }
    }

    for (let i = 0; i < S.length; i++) {
        if (charArr.indexOf(S[i]) > -1) continue
        charArr.push(S[i]);
        flagSet.add(i)
        process(S[i]);
        flagSet.delete(i)
    }

    return t;
};
console.log(permutation('abc'))