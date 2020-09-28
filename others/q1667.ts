// 1667 面试题 16.01. 交换数字  https://leetcode-cn.com/problems/swap-numbers-lcci/
// 不用额外变量交换2个数字
function swapNumbers(numbers: number[]): number[] {
    numbers[1] = numbers[1]  - numbers[0] ;
    numbers[0] = numbers[0] + numbers[1];
    numbers[1] = numbers[0] - numbers[1];
    return numbers;
};
// 位运算
const swapNumbers2 = (numbers: number[]): number[] => {

    numbers[0] ^= numbers[1];
    numbers[1] ^= numbers[0];
    numbers[0] ^= numbers[1];

    return numbers;
};

console.log(swapNumbers([1, 7]))
console.log(swapNumbers([3, 5]))


