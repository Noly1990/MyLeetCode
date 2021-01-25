// 1319. 连通网络的操作次数 https://leetcode-cn.com/problems/number-of-operations-to-make-network-connected/

function makeConnected(n: number, connections: number[][]): number {
    //  

    let parent = new Array(n).fill(0).map((v, i) => i);

    function find(x: number) {
        if (parent[x] === x) return x;
        parent[x] = find(parent[x]);
        return parent[x];
    }

    function union(a: number, b: number) {
        parent[find(a)] = find(b)
    }
    let extra = 0;
    for (let [x, y] of connections) {
        if (find(x) === find(y)) extra++;
        else union(y, x)
    }

    let set = new Set(parent.map(v => find(v)));
    return extra >= set.size - 1 ? set.size - 1 : -1;
};

console.log(makeConnected(5,
    [[0,1],[0,2],[3,4],[2,3]]))
