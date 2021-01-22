// 684. 冗余连接 https://leetcode-cn.com/problems/redundant-connection/

function findRedundantConnection(edges: number[][]): number[] {
    let arr: Set<number>[] = []
    let n = edges.length;
    edges.forEach(each => {
        let [a, b] = each;
        if (arr[a]) {
            arr[a].add(b)
        } else {
            arr[a] = new Set([b])
        }

        if (arr[b]) {
            arr[b].add(a)
        } else {
            arr[b] = new Set([a])
        }
    })


    for (let i = 0; i <= n; i++) {
        if (!arr[i]) arr[i] = new Set()
    }

    function checkRemoveOne(theOne: number[]): boolean {
        let [u, v] = theOne;
        arr[u].delete(v);
        arr[v].delete(u)
        let root = findRoot();
        if (root === -1) {
            arr[u].add(v);
            arr[v].add(u);
            return false;
        }
        if (beginByRoot(root)) return true
        arr[u].add(v);
        arr[v].add(u);
        return false;
    }

    function findRoot() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].size === 1) return i
        }
        return -1;
    }

    function beginByRoot(x: number) {
        let reached: boolean[] = new Array(arr.length).fill(false);
        let step = [[x, -1]];

        reached[x] = true
        let reachC = 1
        while (step.length > 0) {

            let temp = [];
            for (let i = 0; i < step.length; i++) {
                for (let per of arr[step[i][0]]) {
                    if (per === step[i][1]) continue
                    if (reached[per]) return false;
                    temp.push([per, step[i][0]])
                    reached[per] = true
                    reachC++
                }
            }
            step = temp

        }
        return reachC === arr.length - 1;
    }



    for (let i = edges.length - 1; i >= 0; i--) {
        if (checkRemoveOne(edges[i])) return edges[i]
    }

    return []
};


console.log(findRedundantConnection([[20, 24], [3, 17], [17, 20], [8, 15], [14, 17], [6, 17], [15, 23], [6, 8], [15, 19], [16, 22], [7, 9], [8, 22], [2, 4], [4, 11], [22, 25], [6, 24], [13, 19], [15, 18], [1, 9], [4, 9], [4, 19], [5, 10], [4, 21], [4, 12], [5, 6]]))
console.log(findRedundantConnection([[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]))
