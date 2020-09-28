// 44. 通配符匹配 https://leetcode-cn.com/problems/wildcard-matching/
// * ?
function isMatch(s: string, p: string): boolean {
    if (s === '' && p === '') return true;
    if (s !== '' && p === '') return false;
    if (s === '') return isAllStars(p);
    const store: boolean[][] = [];
    for (let i = 0; i <= s.length + 1; i++) {
        store.push(new Array(p.length + 1).fill(false));
    }
    store[0][0] = true;
    
    for (let i = 1; i <= p.length; ++i) {
        if (p[i - 1] === '*') {
            store[0][i] = true;
        } else {
            break;
        }
    }

    for (let i = 1; i <= s.length; i++) {
        for (let j = 1; j <= p.length; j++) {
            if (p[j - 1] === '*') {
                store[i][j] = store[i][j - 1] || store[i - 1][j];
            }
            else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                store[i][j] = store[i - 1][j - 1];
            }
        }
    }

    return store[s.length][p.length];

};

function isAllStars(str: string) {
    for (const c of str) {
        if (c !== '*') return false;
    }
    return true;
}


// console.log(isMatch("ababadcaeb", "*a??b*a?b*?"));
console.log(isMatch("aa", "a"));

// console.log(isMatch("ababadbcaeb", "*a??b*a?b*?"));



// console.log(isMatch("abefcdgiescdfimde", "ab*cd?i*de"));