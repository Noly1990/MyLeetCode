// 290. 单词规律 https://leetcode-cn.com/problems/word-pattern/

function wordPattern(pattern: string, s: string): boolean {
    let sArr = s.split(' ');

    if (sArr.length !== pattern.length) return false;

    let map: Map<string, string> = new Map();
    let rMap: Map<string, string> = new Map();


    for (let i = 0; i < pattern.length; i++) {
        if (!map.has(pattern[i]) && !rMap.has(sArr[i])) {
            map.set(pattern[i], sArr[i]);
            rMap.set(sArr[i], pattern[i]);
        } else if (map.has(pattern[i]) && rMap.has(sArr[i])) {
            let word = map.get(pattern[i]);
            let key = rMap.get(sArr[i]);
            if (word !== sArr[i] || key !== pattern[i]) return false;

        } else {
            return false;
        }
    }

    return true;

};