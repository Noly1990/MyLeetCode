// 991. 坏了的计算器 https://leetcode-cn.com/problems/broken-calculator/

function brokenCalc(X: number, Y: number): number {
    let step = 0;
    let temp = Y;
    while (temp > X) {
        if ((temp & 1) == 0) {
            step += 1;
            temp = temp >> 1;
        }
        else {
            step += 2;
            temp += 1;
            temp = temp >> 1;
        }
    }
    step += X - temp;
    return step;

};