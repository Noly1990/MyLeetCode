// 1202. 交换字符串中的元素 https://leetcode-cn.com/problems/smallest-string-with-swaps/


import * as fs from 'fs'


function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    const flag = new Array(100001).fill(0);
    const n = s.length;
    for (let i = 0; i < n; i++) {
        flag[i] = i;
    }
    function find(x: number) {
        return x === flag[x] ? x : flag[x] = find(flag[x]);
    }

    for (let i = 0; i < pairs.length; ++i) {
        const [x, y] = pairs[i];
        const ux = find(x), uy = find(y);
        if (ux ^ uy) {
            flag[ux] = uy;
        }
    }

    const vec = new Array(n).fill(0).map(() => new Array());

    for (let i = 0; i < n; i++) {
        flag[i] = find(i);
        vec[flag[i]].push(s[i]);
    }

    for (let i = 0; i < n; i++) {
        if (vec[i].length > 0) {
            vec[i].sort((a, b) => a.charCodeAt() - b.charCodeAt());
        }
    }
    const p = new Array(n).fill(0);

    let ans: string[] = [];
    for (let i = 0; i < n; ++i) {
        ans.push('1');
    }

    for (let i = 0; i < n; ++i) {
        ans[i] = vec[flag[i]][p[flag[i]]];
        p[flag[i]]++;
    }
    return ans.join('');
};

let input = fs.readFileSync('./input.json');
let obj = JSON.parse(input.toString())
let begin = Date.now()
smallestStringWithSwaps(obj.str, obj.arr)

console.log(Date.now() - begin)