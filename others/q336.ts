// 336. 回文对 https://leetcode-cn.com/problems/palindrome-pairs/

function palindromePairs(words: string[]): number[][] {
    const reverseWords = words.map(v => v.split('').reverse().join(''));
    const r = [];
    const rMap: Map<string, boolean> = new Map()
    function isPali(i: number, j: number) {
        let iLen = words[i].length;
        let jLen = words[j].length;
        if (jLen === 0 && iLen === 0) return true;
        if (jLen === 0) return isStrPali(i, 0, iLen);
        if (iLen === 0) return isStrPali(j, 0, jLen)
        if (iLen === jLen) {
            return words[i] === reverseWords[j]
        } else if (iLen > jLen) {
            return (words[i].substring(0, jLen) === reverseWords[j]) && isStrPali(i, jLen, iLen)
        } else {
            return (words[i] === reverseWords[j].substring(0, iLen)) && isStrPali(j, 0, jLen - iLen)
        }
    }

    function isStrPali(index: number, x: number, y: number) {
        if (x === y) return true;
        const key = `${index}-${x}-${y}`;
        if (rMap.has(key)) return rMap.get(key);
        let str = words[index].substring(x, y);
        let r = str === str.split('').reverse().join('')
        rMap.set(key, r);
        return r;
    }
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i === j) continue
            if (isPali(i, j)) {
                r.push([i, j])
            }
        }
    }
    return r;
};

// console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]))

// console.log(palindromePairs(["a", "abc", "aba", ""]))

console.log(palindromePairs(["bb", "bababab", "baab", "abaabaa", "aaba", "", "bbaa", "aba", "baa", "b"]))