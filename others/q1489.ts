// 1489. 找到最小生成树里的关键边和伪关键边  https://leetcode-cn.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/
function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    edges.forEach((v, i) => {
        v[3] = i;
    })

    const NoSet = new Set()
    function workout(notIndex: number, index: number) {

        edges.sort((a, b) => a[2] - b[2]);

        let parent = new Array(n).fill(0).map((v, i) => i);

        function find(x: number) {
            if (parent[x] === x) return x;
            parent[x] = find(parent[x]);
            return parent[x]
        }

        function union(x: number, y: number) {
            parent[find(x)] = find(y)
        }

        let min = 0;
        for (let i = 0; i < edges.length; i++) {
            let theLine = edges[i];
            if (notIndex !== -1 && theLine[3] === notIndex) continue
            if (find(theLine[0]) === find(theLine[1])) continue
            min += theLine[2]
            union(theLine[1], theLine[0]);
        }



        if (index !== -1) {
            let min2 = 0;
            parent = new Array(n).fill(0).map((v, i) => i);
            let first = edges[index];
            union(first[1], first[0]);
            min2 += first[2]
            for (let i = 0; i < edges.length; i++) {
                let theLine = edges[i];
                if (i === index) continue
                if (find(theLine[0]) === find(theLine[1])) continue
                min2 += theLine[2]
                union(theLine[1], theLine[0]);
            }
            if (min2 > mini) NoSet.add(first[3])
        }



        return min;
    }
    let ans1 = []
    let ans2 = []
    let mini = workout(-1, -1)
    for (let i = 0; i < edges.length; i++) {
        let per = edges[i];
        let temp = workout(per[3], i);
        if (temp === mini) ans2.push(per[3])
        else ans1.push(per[3])
    }

    return [ans1.filter(v => !NoSet.has(v)), ans2.filter(v => !NoSet.has(v))]

};

console.log(findCriticalAndPseudoCriticalEdges(4,
    [[0, 1, 1], [0, 3, 1], [0, 2, 1], [1, 2, 1], [1, 3, 1], [2, 3, 1]]))