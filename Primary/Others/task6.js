// 缺失数字
// 给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
// 示例 1:
// 输入: [3,0,1]
// 输出: 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let temp=[];
    let len=nums.length;
    for (let i=0;i<len;i++) {
      temp[nums[i]]=1;
    }
    for (let j=0;j<len+1;j++) {
      if (!temp[j]) {
        return j;
      }
    }
};