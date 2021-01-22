// 1584. 连接所有点的最小费用 https://leetcode-cn.com/problems/min-cost-to-connect-all-points/
function minCostConnectPoints(points: number[][]): number {

    function distance(a: number, b: number) {
        return Math.abs(points[a][0] - points[b][0]) + Math.abs(points[a][1] - points[b][1]);
    }




    let parent = new Array(points.length).fill(0).map((v, i) => i);

    function find(x: number) {
        if (parent[x] === x) return x;
        parent[x] = find(parent[x]);
        return parent[x]
    }

    function union(x: number, y: number) {
        parent[find(x)] = find(y)
    }
    let lines: [number, number, number][] = []
    for (let i = 0; i < points.length - 1; ++i) {
        for (let j = i + 1; j < points.length; ++j) {
            lines.push([i, j, distance(i, j)]);
        }
    }

    lines.sort((a, b) => a[2] - b[2])

    let ans = 0;

    for (let i = 0; i < lines.length; i++) {
        let theLine = lines[i];

        if (find(theLine[0]) === find(theLine[1])) continue
        ans += theLine[2]
        union(theLine[1], theLine[0]);

    }

    return ans
};