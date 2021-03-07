// 131. 分割回文串 https://leetcode-cn.com/problems/palindrome-partitioning/

namespace Q131 {
    function check(str: string) {

        if (str.length === 1) return true;
    
        return str.split('').reverse().join('') === str;
    
    }
    
    function partition(s: string): string[][] {
        if (s.length === 0) return [];
        if (s.length === 1) return [[s[0]]];
        let ans: string[][] = [];
        for (let i = 1; i <= s.length; i++) {
            let part = s.substring(0, i);
            if (check(part)) {
                let temp = partition(s.substr(i));
                if (temp.length === 0) {
                    ans.push([part]);
                } else {
                    ans.push(...temp.map(v => [part, ...v]));
                }
            }
        }
        return ans;
    }
    
    console.log(partition('aabbcdc'))
    console.log(partition('abcddcba'))
}

