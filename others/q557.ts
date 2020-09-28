// 557. 反转字符串中的单词 III https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/

function reverseWords(s: string): string {
   return s.split(' ').map(v => v.split('').reverse().join()).join(' ');
};

function reverseWords2(s: string): string {
    return s.split("").reverse().join("").split(" ").reverse().join(" ");
    };