// 227. 基本计算器 II https://leetcode-cn.com/problems/basic-calculator-ii/

function calculate(s: string): number {
    s = s.trim();
    const stack = [];
    let preSign = '+';
    let num = 0;
    const len = s.length;
    for (let i = 0; i < len; ++i) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            num = num * 10 + s[i].charCodeAt(0) - '0'.charCodeAt(0);
        }
        if (isNaN(Number(s[i])) || i === len - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }   
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};