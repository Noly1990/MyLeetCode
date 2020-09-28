// 415. 字符串相加 https://leetcode-cn.com/problems/add-strings/

function addStrings(num1: string, num2: string): string {
    let len1 = num1.length;
    let len2 = num2.length;

    let index = 1;
    let up = 0;
    let r: number[] = []
    while (num1[len1 - index] || num2[len2 - index]) {

        let temp = (num1[len1 - index] ? parseInt(num1[len1 - index]) : 0) + (num2[len2 - index] ? parseInt(num2[len2 - index]) : 0) + up;
        if (temp > 9) {
            r.unshift(temp % 10);
            up = 1;
        } else {
            r.unshift(temp);
            up = 0;
        }

        index++;
    }
    if (up) {
        r.unshift(1)
    }
    return r.join('')
};

console.log(addStrings('0', '0'))
console.log(addStrings('123', '123456'))

console.log(addStrings('1', '1'))

