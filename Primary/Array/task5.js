// 只出现一次的数字

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

// 说明：

// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sortedArr = nums.sort((a,b)=>a-b);
    let flag =true;
    let len = sortedArr.length;
    let index=0;
    while(flag) {
      if (index===0) {
        if (sortedArr[index]!==sortedArr[index+1]) {
          flag = false
          return sortedArr[index]
        }
      } else if (index===len-1) {
        if (sortedArr[index]!==sortedArr[index-1]) {
          flag = false
          return sortedArr[index]
        }
      } else {
        if (sortedArr[index]!==sortedArr[index-1]&&sortedArr[index]!==sortedArr[index+1]) {
          flag = false
          return sortedArr[index]
        }
      }
      index++
    }
};

console.log(singleNumber([4,1,2,1,2]))