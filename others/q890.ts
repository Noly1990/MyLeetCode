// 890. 查找和替换模式 https://leetcode-cn.com/problems/find-and-replace-pattern/
function findAndReplacePattern(words: string[], pattern: string): string[] {

    function fitPattern(word: string) {
        if (word.length !== pattern.length) return false;
        const map = new Map();
        const reverseMap = new Map();
        let wordSplit = word.split('');
        let fitArr = wordSplit.map(()=> 0);
        let fitNum = 0;
        while (fitNum < word.length) {
            for (let i = 0; i < fitArr.length; i++) {
                if (fitArr[i] !== 1) {
                    if (map.get(pattern[i]) && map.get(pattern[i]) !== wordSplit[i]) return false;
                    if (reverseMap.get(wordSplit[i]) && reverseMap.get(wordSplit[i])!== pattern[i]) return false;
                    map.set(pattern[i], wordSplit[i]);
                    reverseMap.set(wordSplit[i], pattern[i])
                    let aim = wordSplit[i];
                    for (let j = i; j < fitArr.length; j++) {
                        if (fitArr[i] !== 1 && wordSplit[j] === aim) {
                            wordSplit[j] = pattern[i];
                            fitArr[j] = 1;  
                            fitNum++;
                        }
                    }
                }
            }
        }
        return wordSplit.join('') === pattern;
    }


    return words.filter(v => fitPattern(v))

};


console.log(findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"],
"abb"))