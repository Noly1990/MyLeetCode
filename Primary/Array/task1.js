//从排序数组中删除重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    return nums.filter(function(item,index,arr){
        return arr.indexOf(item)===index
    })
};

console.log(removeDuplicates([1,1,2,2,3,3]))