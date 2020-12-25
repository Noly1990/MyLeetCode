// 387. 字符串中的第一个唯一字符 https://leetcode-cn.com/problems/first-unique-character-in-a-string/

function firstUniqChar(s: string): number {
    if (s.length === 0) return -1;
    if (s.length === 1) return 0;
    let no = []
    for (let i = 0; i < s.length; i++) {
        if (!no.includes(s[i]) && s.substr(i + 1).indexOf(s[i]) === -1) return i;
        no.push(s[i])
    }

    return -1;
};