// 738. 单调递增的数字 https://leetcode-cn.com/problems/monotone-increasing-digits/

function monotoneIncreasingDigits(N: number): number {

    if (N < 10) return N;

    let str = N.toString(10);

    let strArr = str.split('').map(v => parseInt(v, 10));

    for (let i = strArr.length - 1; i > 0; i--) {
        if (strArr[i] < strArr[i - 1]) {
            for (let j=i;j<strArr.length;j++) {
                strArr[j] = 9;
            }
            strArr[i - 1]--;
        }
    }

    return strArr.reduce((p, v) => p + v * (10 ** (strArr.length -1)) , 0);
};


console.log(monotoneIncreasingDigits(1234));


console.log(monotoneIncreasingDigits(554889396));