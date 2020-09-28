// 214. 最短回文串 https://leetcode-cn.com/problems/shortest-palindrome/

function shortestPalindrome(s: string): string {
    let rS = s.split('').reverse().join('');
    let len =s.length;
    for (let i = 0; i < len; i++) {
        if (rS.substr(i)===s.substr(0,len-i)) {
            return rS+s.substr(len-i);
        }
    }
    return '';
};

console.log(shortestPalindrome('aba'))