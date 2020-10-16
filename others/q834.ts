// 834. 树中距离之和 https://leetcode-cn.com/problems/sum-of-distances-in-tree/
// 需要再考虑
function sumOfDistancesInTree(N: number, edges: number[][]): number[] {
    if (N === 1) return [0];
    if (N === 2) return [1, 1];
    const dp: number[][] = new Array(N);



    const graph: number[][] = new Array(N);
    for (let i = 0; i < graph.length; i++) {
        graph[i] = [];
        dp[i] = []
        for (let j = 0; j < graph.length; j++) {
            dp[i][j] = 0;
        }
    }
    for (const edge of edges) {
        const [from, to] = edge;
        graph[from].push(to);
        graph[to].push(from);
    }

    let flag = new Array(N).fill(0);

    function work(begin: number, recent: number, end: number, dis: number) {
        if (dp[begin][end] !== 0 || dp[end][begin] !== 0) return;
        flag[recent] = 1;
        if (graph[recent].indexOf(end) > -1) {
            dp[begin][end] = dis;
            dp[end][begin] = dis;
        } else {
            for (let one of graph[recent]) {
                if (flag[one]) continue
                if (dp[begin][one] === 0 || dp[one][begin] === 0) {
                    dp[begin][one] = dis;
                    dp[one][begin] = dis;
                }
                if (dp[begin][end] === 0 || dp[end][begin] === 0) {
                    work(begin, one, end, dis + 1)
                }

            }
        }
    }


    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (i === j) continue;
            if (dp[i][j] || dp[j][i]) continue
            flag = new Array(N).fill(0);
            work(i, i, j, 1);
        }
    }

    let ans = []
    for (let i = 0; i < N; i++) {
        let temp = 0;
        for (let j = 0; j < N; j++) {
            if (i === j) continue
            temp += dp[i][j]
        }
        ans.push(temp)
    }
    return ans;
};

console.log(sumOfDistancesInTree(6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]))


// function sumOfDistancesInTree2(N:number, edges:number[][]) {
//     // 建立映射表，graph[i]：存放与节点i相连的所有节点
//     const graph = new Array(N);
//     for (let i = 0; i < graph.length; i++) {
//       graph[i] = [];
//     }
//     for (const edge of edges) {
//       const [from, to] = edge;
//       graph[from].push(to);
//       graph[to].push(from);
//     }

//     // distSum[i]：节点i到它所在子树的节点的距离和，后面更新为：节点i到其他所有节点的距离和
//     const distSum = new Array(N).fill(0);
//     // nodeNum[i]：节点i所在子树的节点个数，保底为1
//     const nodeNum = new Array(N).fill(1);

//     function postOrder(root, parent) {
//       const neighbors = graph[root]; // 与它相连的节点们
//       for (const neighbor of neighbors) {
//         if (neighbor == parent) {    // 如果邻居是自己父亲，跳过。
//           continue;                  // 如果邻居只有自己父亲，则for循环结束，当前递归结束  
//         }
//         postOrder(neighbor, root);
//         nodeNum[root] += nodeNum[neighbor];
//         distSum[root] += nodeNum[neighbor] + distSum[neighbor];
//       }
//     };

//     function preOrder(root, parent) {
//       const neighbors = graph[root];
//       for (const neighbor of neighbors) {
//         if (neighbor == parent) {
//           continue;
//         }
//         distSum[neighbor] = distSum[root] - nodeNum[neighbor] + (N - nodeNum[neighbor]);
//         preOrder(neighbor, root);
//       }
//     };

//     postOrder(0, -1); // dfs的入口。因为N>=1，节点0肯定存在，就从节点0开始搜
//     preOrder(0, -1);
//     console.log(distSum);
//     return distSum;
//   };