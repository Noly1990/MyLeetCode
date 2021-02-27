// 1178. 猜字谜 https://leetcode-cn.com/problems/number-of-valid-words-for-each-puzzle/

function findNumOfValidWords(words: string[], puzzles: string[]): number[] {

    let map = {}
    function convert(str: string): number {
        let charSet: string[] = new Array(26).fill('0');
        for (let char of str) {
            charSet[char.charCodeAt(0) - 'a'.charCodeAt(0)] = '1';
        }
        return parseInt(charSet.join(''), 2);
    }

    for (let i = 0; i < words.length; i++) {
        const int = convert(words[i]);
        if (map[int]) map[int]++
        else map[int] = 1;
    }

    let ans = []

    for (let puzzle of puzzles) {
        let temp = 0;
        const puzzleInt = convert(puzzle);
        const first = convert(puzzles[0]);

        let n = puzzleInt;
        while (n > 0) {
            if ((n & first) != 0 && map[n] > 0) {
                temp += map[n];
            }
            n = (n - 1) & puzzleInt;
        }

        ans.push(temp);
    }
    return ans;
};