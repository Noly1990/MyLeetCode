// 加一

// 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储一个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newArr = digits.slice() 
    let len=digits.length;
    let flag =true
    while(flag) {
      if (len===0) {
        newArr.unshift(1)
        return newArr
      }
      if (newArr[len-1]+1<=9) {
        newArr[len-1]=newArr[len-1]+1;
        flag=false
      }else {
        newArr[len-1] = 0
        len--
      }
    }
    return newArr
};
console.log(plusOne([0]))
