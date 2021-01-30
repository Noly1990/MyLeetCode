// 739. 每日温度 https://leetcode-cn.com/problems/daily-temperatures/

function dailyTemperatures(T: number[]): number[] {
    let ans = new Array(T.length).fill(0);
    let stack: number[] = [];
    for (let i = 0; i < T.length; i++) {
        while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
            let one = stack.pop();
            ans[one] = i - one;
        }
        stack.push(i)
    }
    return ans
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))