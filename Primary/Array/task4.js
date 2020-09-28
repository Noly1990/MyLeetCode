// 存在重复
// 给定一个整数数组，判断是否存在重复元素。
// 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
// 示例 1:
// 输入: [1,2,3,1]
// 输出: true

var containsDuplicate = function(nums) {
    let tempArr = nums.slice();
    let flag = true;
    while (flag && tempArr.length>0) {
      let first = tempArr.shift();
      if (tempArr.indexOf(first)>-1) {
        flag=false;
      }
    }
    return !flag;
};

var best = function(nums) {
  let map=Object.create(null);
  for (let i=0;i<nums.length;i++){
    if (map[nums[i]]) {
      return true
    }
    map[nums[i]] = true;
  }
  return false;
};