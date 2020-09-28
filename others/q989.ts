// 989. 数组形式的整数加法 https://leetcode-cn.com/problems/add-to-array-form-of-integer/

function addToArrayForm(A: number[], K: number): number[] {
    // 和二进制相加类似
    // 尝试用字符串转换求解

    let a:bigint = BigInt(A.join(""));
    a = a+ BigInt(K);
    return a.toString().split('').map(v => parseInt(v ,10));
    
};

console.log(addToArrayForm([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], 22))