// 459. 重复的子字符串  https://leetcode-cn.com/problems/repeated-substring-pattern/

function repeatedSubstringPattern(s: string): boolean {
    //
    const len = s.length;
    for (let i = 1; i <= Math.floor(len / 2); i++) {
        
        if (len % i !== 0) continue;
        let sub = s.substr(0, i);

        let rep = len / i;
        if (s === sub.repeat(rep)) return true;
    }

    return false;
};