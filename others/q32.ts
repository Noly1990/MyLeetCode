// 32. 最长有效括号 https://leetcode-cn.com/problems/longest-valid-parentheses/
function longestValidParentheses(s: string): number {
    const len = s.length;
    let numStr = s.replace(/\(\)/g, '2');
    let numArr = numStr.split("");
    let flag = true;
    while (flag) {
        flag = false;
        for (let i = 0; i < numArr.length; i++) {
            if (numArr[i] !== '(' && numArr[i] !== ")") {
                if (i !== 0 && numArr[i - 1] === '(') {
                    let tIndex = i - 1;
                    while (i+1 < numArr.length) {
                        i++;
                        if (numArr[i] === '(' || numArr[i] === ")") {
                            if (numArr[i] === ")") {
                                flag = true;
                                numArr[i] = "1";
                                numArr[tIndex] = "1";
                            }
                            break;
                        }
                    }
                }
            }
        }
    }
    return compute(numArr);
};


function compute(numArr: string[]) {
    let max = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] !== '(' && numArr[i] !== ")") {
            let sum = parseInt(numArr[i], 10);
            while (i+1 < numArr.length) {
                i++;
                if (numArr[i] === '(' || numArr[i] === ")") {
                    break;
                } else {
                    sum += parseInt(numArr[i], 10);
                }
            }
            if (sum > max) {
                max = sum
            }
        }
    }
    return max;
}


console.log(longestValidParentheses("()((((()))((((()(((()()()()()))"));