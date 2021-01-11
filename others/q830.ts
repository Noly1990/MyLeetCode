// 830. 较大分组的位置 https://leetcode-cn.com/problems/positions-of-large-groups/
function largeGroupPositions(s: string): number[][] {
    if (s.length < 3) return [];
    let ans = []
    let bIndex = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i-1]) {
            if (i-bIndex >=3) {
                ans.push([bIndex, i-1]);
            }
            bIndex = i;
        }
    }
    if (s.length - bIndex >= 3) {
        ans.push([bIndex, s.length -1])
    }
    return ans;
};