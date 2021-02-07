// 1208. 尽可能使字符串相等 https://leetcode-cn.com/problems/get-equal-substrings-within-budget/

function equalSubstring(s: string, t: string, maxCost: number): number {


    function diff(a: string, b: string) {
        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));
    }

    const len = s.length;
    let diffArr = []
    for (let i = 0; i < len; i++) {
        diffArr.push(diff(s[i], t[i]));
    }

    let left = 0;
    let right = 0;
    let max = 0;
    let nowCost = 0;

    while (right < len) {
        if (nowCost + diffArr[right] <= maxCost) {
            nowCost += diffArr[right]
            right++;
            max = Math.max(max, right - left)
        } else {
            if (left === right) {
                left++;
                right++;
                nowCost = 0;
            } else {
                nowCost -= diffArr[left]
                left++;
            }
        }

    }
    return max


};