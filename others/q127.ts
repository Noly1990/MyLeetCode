// 127. 单词接龙 https://leetcode-cn.com/problems/word-ladder/

function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
    let queue = [beginWord];
    let step = 0;

    function isOne(str1: string, str2: string): boolean {
        let not = 0;
        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                not++;
                if (not > 1) return false;
            }
        }
        return not === 1;
    }


    while (queue.length > 0) {
        if (queue.indexOf(endWord) > -1) return step;

        let temp = [];


        for (let i=0;i<wordList.length;i++) {
            for (let per of queue) {
                if (isOne(wordList[i], per)) {
                    temp.push(wordList[i])
                    wordList.splice(i, 1);
                    i--;
                    break;
                }
            }
        }
        queue = temp;

        step++;
    }

    return 0;
};