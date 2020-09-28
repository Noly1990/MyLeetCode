// 1527  LCP 11. 期望个数统计  https://leetcode-cn.com/problems/qi-wang-ge-shu-tong-ji/

function expectNumber(scores: number[]): number {
    const set = new Set(scores);
    return set.size;
};