// 399. 除法求值 https://leetcode-cn.com/problems/evaluate-division/

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {

    let map: Map<string, Map<string, number>> = new Map();

    for (let i = 0; i < equations.length; i++) {
        if (map.has(equations[i][0])) {
            let m = map.get(equations[i][0])
            m.set(equations[i][1], values[i])
        } else {
            let tem = new Map();
            tem.set(equations[i][1], values[i])
            map.set(equations[i][0], tem)
        }
        if (map.has(equations[i][1])) {
            let m = map.get(equations[i][1])
            m.set(equations[i][0], 1 / values[i])
        } else {
            let tem = new Map();
            tem.set(equations[i][0], 1 / values[i])
            map.set(equations[i][1], tem)
        }
    }



    let ans = [];


    function findY(begin: string, end:string, num: number, arr: string[]): number {
        if (!map.has(begin)) return -1;
        let ttt = map.get(begin);
        if (ttt.has(end)) return num * ttt.get(end);

        for (let key of ttt.keys()) {
            if (arr.includes(key)) continue
            let res = findY(key, end, ttt.get(key) * num, arr.concat([key]));
            if (res !== -1) return res
        }
        return -1;
    }

    for (let per of queries) {

        let [x, y] = per;
        let xt = map.get(x);
        let yt = map.get(y)
        if (xt && yt) {
            if (xt.has(y)) {
                ans.push(xt.get(y))
            } else if (yt.has(x)) {
                ans.push(1 / yt.get(x))
            } else {
                let res = findY(x, y, 1, [x]);
                ans.push(res)
            }
        } else {
            ans.push(-1)
        }
    }


    return ans;

};

console.log(calcEquation([["a", "b"], ["b", "c"], ["c", "d"]], [2.0, 3.0, 4.0], [["a", "c"], ["a", 'd']]));

