// 962. 最大宽度坡  https://leetcode-cn.com/problems/maximum-width-ramp/

function maxWidthRamp(A: number[]): number {
    const stack = [0]; // 以第一个元素为标的
    let max = 0;
    for (let i = 1; i < A.length; i++) {
        // 后续值 小于 栈顶坐标 的元素坐标 推入 栈顶
        if (A[stack[stack.length - 1]] > A[i]) {
            stack.push(i)
        }
    }

    for (let i = A.length - 1; i >= max; i--) {
        while (stack.length > 0 && A[i] >= A[stack[stack.length - 1]]) {
            max = Math.max(max, i - (stack.pop() || 0));
        }
    }
    return max;
};




// 最大宽度窗口滑动法
function maxWidthRamp3(A: number[]): number {
    const lenA = A.length;
    let maxWidth = lenA - 1;
    if (A[lenA - 1] >= A[0]) return maxWidth;
    maxWidth--;
    while (maxWidth >= 1) {
        for (let i = 0; i < A.length - maxWidth; i++) {
            if (A[i + maxWidth] >= A[i]) {
                return maxWidth;
            }
        }
        maxWidth--;
    }
    return 0;
};

console.log(maxWidthRamp([6, 0, 8, 2, 1, 5]))

console.log(maxWidthRamp([9, 8, 1, 0, 1, 9, 4, 0, 4, 1]))