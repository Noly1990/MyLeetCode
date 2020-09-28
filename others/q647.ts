// 647. 回文子串 https://leetcode-cn.com/problems/palindromic-substrings/

function countSubstrings(s: string): number {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let tempStr = '';
        let reverseStr = '';
        for (let j = 1; j < s.length - i + 1; j++) {
            tempStr += s[i + j-1]
            reverseStr = s[i + j-1] + reverseStr;
            if (tempStr === reverseStr) {
                console.log(tempStr, reverseStr)
                total ++;
            }
        }
    }
    return total;
};


console.log(countSubstrings('abababababa'))