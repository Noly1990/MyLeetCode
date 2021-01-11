// 547. 省份数量 https://leetcode-cn.com/problems/number-of-provinces/

function findCircleNum(isConnected: number[][]): number {
    if (isConnected.length === 0 || isConnected[0].length === 0) return 0;

    let n = isConnected.length;

    let ans: number[][] = [[0]];

    let added = [0]


    for (let i = 0; i < n; i++) {
        let index = -1;
        for (let k = 0; k < ans.length; k++) {
            if (ans[k].includes(i)) {
                index = k
                break
            }
        }
        if (index === -1) {
            ans.push([i])
            index = ans.length - 1
        }

        function walk(x: number) {
            for (let i = 0; i < n; i++) {
                if (i === x || added.includes(i)) continue
                if (isConnected[x][i] === 1 || isConnected[i][x] === 1) {
                    ans[index].push(i)
                    added.push(i)
                    walk(i)
                }
            }
        }

        walk(i)
    }

    return ans.length
};



console.log(findCircleNum([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]))