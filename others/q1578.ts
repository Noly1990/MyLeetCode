// 1578 剑指 Offer 11. 旋转数组的最小数字 https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
function minArray(numbers: number[]): number {
    const len = numbers.length;
    let index = len-1;

    while(true) {
        if (index === 0) break;
        if (numbers[index-1] > numbers[index]) {
            return numbers[index]
        } 
        index--;
    }
    return numbers[0];
};