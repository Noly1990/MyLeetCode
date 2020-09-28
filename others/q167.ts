// 167. 两数之和 II - 输入有序数组  https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted/

function twoSum(numbers: number[], target: number): number[] {
    let index1 = 0;
    let index2 = numbers.length - 1;
    while (index1 < index2) {
        if (numbers[index1] + numbers[index2] > target) {
            index2--;
        } else if (numbers[index1] + numbers[index2] < target) {
            index1++;
        } else {
            return [index1 + 1, index2 + 1]
        }
    }
    return [-1, -1]
};


// 暴力
function twoSum2(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i + 1, j + 1]
            }
        }
    }
    return [-1, -1];
};

console.log(twoSum([2, 7, 11, 15], 9))

console.log(twoSum([5, 25, 75], 100))
