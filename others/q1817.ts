// 1817 剑指 Offer 50. 第一个只出现一次的字符 https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/

function firstUniqChar(s: string): string {
    let sSet = new Set();
    let set = new Set();

    for (let c of s) {
        if (set.has(c)) {
            sSet.add(c)
        } else {
            set.add(c)
        }
    }

    for (let c of s) {
        if (!sSet.has(c)) return c
    }
    return ' '
};