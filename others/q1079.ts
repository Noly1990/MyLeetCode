// 1079. 活字印刷 https://leetcode-cn.com/problems/letter-tile-possibilities/

// AAA BB C

function numTilePossibilities(tiles: string): number {
    let set: Set<string> = new Set();
    let splitArr = tiles.split('');
    let charNumArr = new Array(26).fill(0);

    splitArr.forEach(p => {
        charNumArr[p.charCodeAt(0) - 'A'.charCodeAt(0)] ++;
    })
    function choose(before: string, len: number) {
        if (before.length < len) {
            for (let j=0;j<charNumArr.length;j++) {
                if (charNumArr[j] > 0) {
                    charNumArr[j]--;
                    choose(before + String.fromCharCode('A'.charCodeAt(0)+j), len);
                    charNumArr[j]++;
                }
            }
        } else {
            set.add(before)
        }
    }

    for (let l = 1; l <= tiles.length; l++) {
        choose('', l);
    }
    return set.size;
};

console.log(numTilePossibilities('AAABBC'))