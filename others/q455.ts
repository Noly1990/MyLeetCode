//455. 分发饼干 https://leetcode-cn.com/problems/assign-cookies/

function findContentChildren(g: number[], s: number[]): number {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);
    let total = 0;
    let index = 0;
    let sIndex = 0;
    while(index < g.length && sIndex < s.length) {
        if (s[sIndex] >= g[index]) {
            sIndex++;
            index++;
            total++;
        } else {
            sIndex++;
        }
    }
    return total;
};

console.log(findContentChildren([1,2], [1,2,3]))