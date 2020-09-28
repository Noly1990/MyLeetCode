// 1304. 和为零的N个唯一整数 https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/

function sumZero(n: number): number[] {
    if (n === 1) return [0];
    if (n === 2) return [n, -n];
    let t =n;
    let arr = [];
    let sum = 0;
    while(t> 1) {
        arr.push(-t);
        sum += t;
        t--;
    }
    arr.push(sum);
    return arr;
};

console.log(sumZero(6))