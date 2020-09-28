// 1124. 表现良好的最长时间段 https://leetcode-cn.com/problems/longest-well-performing-interval/

function longestWPI(hours: number[]): number {
    const arr = hours.map(v => v > 8 ? 1 : -1);
    const sumArr = [0];
    let maxLen = 0;
    for (let i = 1; i <= arr.length; i++) {
        sumArr[i] = sumArr[i - 1] + arr[i - 1]
    }
    console.log(sumArr)
    const stack = [0]; // 以第一个元素为标的

    for (let i = 1; i < sumArr.length; i++) {
        // 后续值 小于 栈顶坐标 的元素坐标 推入 栈顶
        if (sumArr[stack[stack.length - 1]] > sumArr[i]) {
            stack.push(i)
        }
    }

    for (let i = sumArr.length - 1; i >= maxLen; i--) {
        while (stack.length > 0 && sumArr[i] > sumArr[stack[stack.length - 1]]) {
            maxLen = Math.max(maxLen, i - (stack.pop() || 0));
        }
    }
    return maxLen;
};




function longestWPI2(hours: number[]): number {
    const arr = hours.map(v => v > 8 ? 1 : -1);
    let maxLen = 0;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > 0) {
                maxLen = Math.max(j - i + 1, maxLen);
            }
        }
    }
    return maxLen;
};




console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]))

console.log(longestWPI2([9, 9, 6, 0, 6, 6, 9]))

console.log(longestWPI([6, 6, 6, 9, 9, 9]))

console.log(longestWPI([6, 6, 9]))