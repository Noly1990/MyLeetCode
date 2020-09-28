// 205. 同构字符串 https://leetcode-cn.com/problems/isomorphic-strings/

function isIsomorphic(s: string, t: string): boolean {
    let map: Map<string, string> = new Map();

    let be = new Set()
    if (s.length !== t.length) return false;
    for (let i = 0; i < s.length; i++) {

        if (!map.has(s[i])) {
            if (be.has(t[i])) return false;
            map.set(s[i], t[i]);
            be.add(t[i])
        } else {
            if (map.get(s[i]) !== t[i]) {
                return false;
            }
        }

    }
    return true;
};