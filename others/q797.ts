//  797. 所有可能的路径  https://leetcode-cn.com/problems/all-paths-from-source-to-target/

function allPathsSourceTarget(graph: number[][]): number[][] {
    const r: number[][] = [];
    function goPoint(index: number, arr: number[]) {
        if (graph[index].length > 0) {
            for (let each of graph[index]) {
                goPoint(each, [...arr, each])
            }
        } else {
            r.push(arr)
        }
    }

    goPoint(0, [0]);
    return r;
};

console.log(allPathsSourceTarget([[1, 2,4], [3], [3], [4],[]]))