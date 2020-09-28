// 40. 组合总和 II https://leetcode-cn.com/problems/combination-sum-ii/

function combinationSum2(candidates: number[], target: number): number[][] {
    function process(arr: number[], t: number) {
        let temp: number[][] = [];

        for (let i=0;i<arr.length;i++) {
            if (arr[i] > t) continue
            if (arr[i] === t) {
                temp.push([arr[i]])
                continue
            }
            let tarr = arr.concat();
            tarr.splice(i, 1);
            process(tarr, t - arr[i]).forEach(p => {
                p.push(arr[i]);
                temp.push(p)
            })
        }

        return temp
    }

    return Array.from(new Set(process(candidates,target).map(v => {
        v.sort((a, b) => a - b);
        return v.join(',')
    }))).map(v =>  v.split(',').map(a => parseInt(a)));
};