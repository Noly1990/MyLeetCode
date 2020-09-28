// 实现 atoi，将字符串转为整数。
// 在找到第一个非空字符之前，需要移除掉字符串中的空格字符。如果第一个非空字符是正号或负号，选取该符号，并将其与后面尽可能多的连续的数字组合起来，这部分字符即为整数的值。如果第一个非空字符是数字，则直接将其与之后连续的数字字符组合起来，形成整数。
// 字符串可以在形成整数的字符后面包括多余的字符，这些字符可以被忽略，它们对于函数没有影响。
// 当字符串中的第一个非空字符序列不是个有效的整数；或字符串为空；或字符串仅包含空白字符时，则不进行转换。
// 若函数不能执行有效的转换，返回 0。
// 说明：
// 假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。如果数值超过可表示的范围，则返回  INT_MAX (231 − 1) 或 INT_MIN (−231) 。

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let trimStr=str.trim();
    let numberReg=/\d/i
    let longnumReg = /\d+/i
    if (trimStr[0]==='-'&&numberReg.test(trimStr[1])) {
      let strStr= trimStr.substring(1);
      let matched = strStr.match(longnumReg)
      let number = -parseInt(matched[0],10);
      return range(number)
    }
    if (trimStr[0]==='+'&&numberReg.test(trimStr[1])) {
      let strStr= trimStr.substring(1);
      let matched = strStr.match(longnumReg)
      let number = parseInt(matched[0],10);
      return range(number)
    }
    if (numberReg.test(trimStr[0])) {
      let matched = trimStr.match(longnumReg)
      let number = parseInt(matched[0],10);
      return range(number)
    }
    return 0
};

function range(number) { 
  if (number>2147483647) {
    return 2147483647
  } else if (number<-2147483648) {
    return -2147483648
  } else {
    return number
  }
 }

// 最优解  采用正则直接匹配出正负号加数字的连续组合
 var myAtoi = function(str) {
  var arr = str.match(/^ *([-+]{0,1}[0-9]+)/);
  return arr?Math.min(2147483647, Math.max(arr[1],-2147483648)):0;
};

console.log(myAtoi('     -42WE'))

console.log("4193 with words------>",myAtoi("4193 with words"))

console.log('words and 987------>',myAtoi('words and 987'))