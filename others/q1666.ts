// 1666 面试题 16.11. 跳水板 https://leetcode-cn.com/problems/diving-board-lcci/ 

function divingBoard(shorter: number, longer: number, k: number): number[] {
    const set:Set<number> =new Set();
    if (k === 0) return [];
    for (let i=0;i<=k;i++) {
        const sum = i * longer + (k-i)*shorter;
        set.add(sum)
    }
    return Array.from(set);
};

console.log(divingBoard(1,2,3))