//39. 组合总和 https://leetcode-cn.com/problems/combination-sum/

function combinationSum(candidates: number[], target: number): number[][] {

    function process(t: number): number[][] {
        let temp: number[][] = [];
        for (let one of candidates) {
            if (one > t) continue
            if (one === t) {
                temp.push([one])
                continue
            }
            process(t - one).forEach(p => {
                p.push(one);
                temp.push(p)
            })
        }
        return temp;
    }

    return Array.from(new Set(process(target).map(v => {
        v.sort((a, b) => a - b);
        return v.join(',')
    }))).map(v =>  v.split(',').map(a => parseInt(a)));
};

console.log(combinationSum([2, 3, 5], 8))