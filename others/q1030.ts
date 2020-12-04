// 1030. 距离顺序排列矩阵单元格 https://leetcode-cn.com/problems/matrix-cells-in-distance-order/

function allCellsDistOrder(R: number, C: number, r0: number, c0: number): number[][] {
    let ans = [];
    for(let i=0;i<R;i++) {
        for (let j=0;j<C;j++) {
            ans.push([i,j])
        }
    }

    ans.sort((a, b) => (Math.abs(a[0] - r0) + Math.abs(a[1] - c0)) - (Math.abs(b[0] - r0) + Math.abs(b[1] - c0))) 
    return ans;
};