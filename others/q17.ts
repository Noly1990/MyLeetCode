// 17. 电话号码的字母组合  https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    let map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z'],
    }

    const dp: string[][] = [];

    dp[0] = digits[0] === '1' ? [] : map[digits[0]];

    if (digits.length > 1) {
        for (let i = 1; i < digits.length; i++) {
            if (dp[i-1].length > 0) {
                if (digits[i]==='1') dp[i] = dp[i-1]
                else {
                    dp[i] = [];
                    for (let a of dp[i-1]) {
                        for (let b of map[digits[i]]) {
                            dp[i].push(a+b)
                        }
                    }
                }
            } else {
                dp[i] = digits[i] === '1'?[]:map[digits[i]]
            }
        }
    }





    return dp[digits.length-1];
};

console.log(letterCombinations('23423'))