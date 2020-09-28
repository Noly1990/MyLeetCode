// 172. 阶乘后的零 https://leetcode-cn.com/problems/factorial-trailing-zeroes/

function trailingZeroes(n: number): number {
    let r = 0;
    while (n>4) {
        n = Math.floor(n / 5);
        r += n;
    }
    return r;
};

function how5(num: number): number {
    let t = 0;
    while (num % 625 === 0) {
        num = num / 625;
        t = t + 4

    }

    while (num % 125 === 0) {
        num = num / 125;
        t = t + 3
    }


    while (num % 25 === 0) {
        num = num / 25;
        t = t + 2
    }

    while (num % 5 === 0) {
        num = num / 5;
        t++
    }
    return t;
}
console.log(trailingZeroes(600))