// 1576 剑指 Offer 45. 把数组排成最小的数 https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/


function minNumber(nums: number[]): string {
    const strArr = nums.map(v => v.toString(10)).sort(sortFc);
    return strArr.join('');
};

function sortFc(a: string, b: string) {
    return parseInt(a+b,10) - parseInt(b+a, 10);
}

console.log(minNumber([332, 3, 30, 34, 5, 9,0,0])) // "3033459"

console.log(minNumber([3,31,333,3431,304,345,343,342,3133,344,3434,3433,5,9]))//  "3033459"