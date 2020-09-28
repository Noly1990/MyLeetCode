// 1660 面试题 10.02. 变位词组  https://leetcode-cn.com/problems/group-anagrams-lcci/

function groupAnagrams(strs: string[]): string[][] {
    const arr = strs.map(v => changeOne(v));
    const map = new Map();
    arr.forEach(v => {
        const p = map.get(v[0])
        if (p) {
            p.push(v[1])
        } else {
            map.set(v[0],[v[1]])
        }
    })
    return Array.from(map).map(v => v[1])
};

function changeOne(str: string): [string, string] {
    return [str.split('').sort().join(''), str];
} 


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"],))
