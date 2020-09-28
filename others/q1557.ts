// 1557 剑指 Offer 05. 替换空格 https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
function replaceSpace(s: string): string {
    return s.split("").map(v => v === ' ' ? '%20' : v).join('');
};

function replaceSpace2(s: string): string {
    return s.split("").reduce((p, v) => v === ' ' ? p + '%20' : p + v, '');
};

function replaceSpace3(s: string): string {
    let str = ''
    for (let c of s) {
        if (c === ' ') str += '%20';
        else str += c
    }

    return str;
};

console.log(replaceSpace3("We are happy."))