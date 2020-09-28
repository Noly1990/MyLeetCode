//1299. 将每个元素替换为右侧最大元素 https://leetcode-cn.com/problems/replace-elements-with-greatest-element-on-right-side/

function replaceElements(arr: number[]): number[] {
    if (arr.length === 1) return [-1];
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > max) {
            let temp = arr[i]
            arr[i] = max
            max = temp
        } else if (arr[i] < max) {
            arr[i] = max;
        }
    }
    return arr;
};

console.log(replaceElements([17,18,5,4,6,1]))