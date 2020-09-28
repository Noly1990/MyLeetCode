// 139 单词拆分 https://leetcode-cn.com/problems/word-break/

// abcdabcde  abcd ab cde

function wordBreak(s: string, wordDict: string[]): boolean {
    const store: boolean[] = [];
    function process(index: number) {
        if (wordDict.indexOf(s.substring(index)) > -1) return true;
        if (store[index] !== undefined) return store[index];
        for (let i=index + 1;i< s.length;i++) {
            const str = s.substring(index, i);
            if (wordDict.indexOf(str) > -1) {
                if  (process(i)) {
                    return true;
                } else {
                    store[i] = false;
                }
            }
        }
        return false;
    }
    return process(0);
};


console.log(wordBreak('abcdabcde', ['abcd', 'ab', 'cde']));
console.log(wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", 
    ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
    ))


