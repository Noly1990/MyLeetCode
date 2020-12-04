// 402. 移掉K位数字 https://leetcode-cn.com/problems/remove-k-digits/

function removeKdigits(num: string, k: number): string {
    let temp = [num[0]];
    for (var i = 1; k && i < num.length; temp.push(num[i++]))
        if (num[i] < num[i - 1]) while (k && temp[temp.length - 1] > num[i]) k--, temp.pop()
    return (temp.join('') + num.slice(i)).slice(0, -k || num.length).replace(/^0*([^0]*)/, (_, a) => a || 0)
};