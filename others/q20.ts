// 20. 有效的括号  https://leetcode-cn.com/problems/valid-parentheses/

function isValid(s: string): boolean {
    if (s.length === 0) return true;

    while (true) {
        let blen = s.length;
        s = s.replace(/\(\)/ig, '');
        s = s.replace(/\[\]/ig, '');
        s = s.replace(/\{\}/ig, '');
        if (s.length === blen) break
    }

    return s.length === 0;
};


console.log(isValid('{[]([()])}'))