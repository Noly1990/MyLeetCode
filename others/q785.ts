// 785. 判断二分图  https://leetcode-cn.com/problems/is-graph-bipartite/

function isBipartite(graph: number[][]): boolean {
    const pointArr: number[][] = [];
    const okArr: number[] = [];
    for (let i = 0; i < graph.length; i++) {
        okArr.push(0);
        pointArr.push([])
    }

    graph.forEach((one, index) => {
        pointArr[index] = [...one];
    });

    for (let index = 0; index < graph.length; index++) {
        if (okArr[index] === 0 && !put(index, 1)) return false;
    }


    function put(index: number, color: number) {
        if (okArr[index] !== 0) {
            return okArr[index] === color;
        }
        okArr[index] = color;
        for (const p of pointArr[index]) {
            if (!put(p, color === 1 ? 2 : 1)) return false;
        }
        return true;
    }

    return true;
};