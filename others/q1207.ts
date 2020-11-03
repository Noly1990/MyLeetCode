// 1207. 独一无二的出现次数 https://leetcode-cn.com/problems/unique-number-of-occurrences/

    function uniqueOccurrences(arr: number[]): boolean {
        let f = new Array(2000).fill(0);
        for (let p of arr) {
            f[p+1000]++;
        }
        let a = [];
        for (let per of f) {
            if (per) a.push(per)
        }
        console.log(a)
        return a.length === new Set(a).size;

    };

    console.log(uniqueOccurrences([1,2]))