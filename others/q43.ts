// 43. 字符串相乘 https://leetcode-cn.com/problems/multiply-strings/

function multiply(num1: string, num2: string): string {
    if (num1 === "0" || num2 === "0") return '0';
    let num1Arr = num1.split('').map(v => parseInt(v, 10));
    let num2Arr = num2.split('').map(v => parseInt(v, 10));
    let len1 = num1Arr.length;
    let len2 = num2Arr.length;
    let total = new Array(len1 + len2 + 1).fill(0);
    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            total[(len1 - i + len2 - j - 2)] += num1Arr[i] * num2Arr[j];
        }
    }
    let sum = [];
    let up = 0;
    for (let i = 0; i < total.length; i++) {
        let r = total[i] + up;
        if (r >= 10) {
            let l = r % 10;
            sum[i] = l;
            up = (r - l) / 10;
        } else {
            sum[i] = r;
            up = 0;
        }
    }
    let sumStr = sum.reverse().join('');
    let t = 0;
    for (let i=0;i<sumStr.length;i++) {
        if (sumStr[i] !== '0') {
            t = i;
            break;
        }
    }
    return sumStr.substr(t);
};

console.log(multiply('999', '999'));

console.log(multiply('123', '456'));

console.log(multiply('6', '501'));

console.log(multiply('12', '5'));   