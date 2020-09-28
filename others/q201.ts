// 201. 数字范围按位与 https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/

function rangeBitwiseAnd(m: number, n: number): number {
    if (m == 0 && n == 2147483647) return m;
    let len = n - m + 1, k = Math.ceil(Math.log(len) / Math.log(2));
    return (m & n) >> (k) << (k);
};