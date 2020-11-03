// 844. 比较含退格的字符串 https://leetcode-cn.com/problems/backspace-string-compare/

function backspaceCompare(S: string, T: string): boolean {
    function process(str: string): string {
        let strArr = [];
        for (let c of str) {
            if (c === '#') {
                strArr.pop();
            } else {
                strArr.push(c)
            }
        }
        return strArr.join('');
    }

    return process(S) === process(T)
};