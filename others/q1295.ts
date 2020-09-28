//1295. 统计位数为偶数的数字 https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/

function findNumbers(nums: number[]): number {
    let t = nums.reduce((p, v) => {
        if (v.toString(10).length % 2 === 0) {
            p = p + 1;
        }
        return p;
    })

    return t;
};