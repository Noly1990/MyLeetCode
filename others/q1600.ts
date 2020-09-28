// 1600 面试题 01.04. 回文排列 https://leetcode-cn.com/problems/palindrome-permutation-lcci/

function canPermutePalindrome(s: string): boolean {
    if (s.length === 0) return true;
    if (s.length === 1) return true;
    let arr = new Array(256).fill(0);
    for (const c of s) {
        arr[c.charCodeAt(0)] ++;
    }
    let odd = 0;
    arr.forEach(p => {
        if (p !== 0) {
            if (isOdd(p)) {
                odd++;
            }
        }
    })
    console.log(odd)
    return isOdd(s.length)? odd === 1 : odd === 0;
};

function isOdd(num: number) {
    return num % 2 === 1;
}

console.log(canPermutePalindrome("AaBb//a"))


// console.log(canPermutePalindrome('code'))