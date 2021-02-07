// 888. 公平的糖果棒交换 https://leetcode-cn.com/problems/fair-candy-swap/
function fairCandySwap(A: number[], B: number[]): number[] {
    let bSet = new Set();
    
    let Asum = A.reduce((p, v) => p + v, 0);
    let Bsum = B.reduce((p, v) => { 
        bSet.add(v)
        return p + v;
    }, 0);

    let diff = (Asum - Bsum) / 2;


    for (let i = 0; i < A.length; i++) {
        if (bSet.has(A[i] - diff)) return [A[i], A[i] - diff]
    }

    return [0, 0]
};