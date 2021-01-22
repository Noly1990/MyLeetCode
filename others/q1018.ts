// 1018. 可被 5 整除的二进制前缀 https://leetcode-cn.com/problems/binary-prefix-divisible-by-5/

function prefixesDivBy5(A: number[]): boolean[] {
    let n = 0
    return A.map(v => (n = ((n << 1) + v) % 10, n === 0 || n === 5))
};



console.log(prefixesDivBy5([0, 1, 1, 0, 0, 1, 1, 1]))