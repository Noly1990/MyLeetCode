// 29. 两数相除 https://leetcode-cn.com/problems/divide-two-integers/

function divide(dividend: number, divisor: number): number {
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    let symbol = 1;
    if (dividend < 0 && divisor > 0) {
        symbol = -1;
        dividend = -dividend;
    }
    if (dividend > 0 && divisor < 0) {
        symbol = -1;
        divisor = -divisor;
    }

    if (dividend < 0 && divisor < 0) {
        dividend = -dividend;
        divisor = -divisor;
    }
    if (dividend < divisor) return 0;
    let index = 0;

    function convertDivide() {
        if (dividend.toString().length > divisor.toString().length + 2) {
            let dLen = dividend.toString(10).length -1;
            let more = 10 ** dLen;
            while(dividend > divisor * more) {
                dividend -= divisor * more;
                index += more;
            }
        }
    }
    convertDivide()
    while (dividend >= divisor) {
        dividend -= divisor;
        index++;
    }
    let r = symbol * index;
    if (r > 2147483647) return 2147483647;
    if (r < -2147483648) return -2147483648;
  
    return r;
};



console.log(divide(-2147483648, 2))