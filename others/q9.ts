// 9. 回文数 https://leetcode-cn.com/problems/palindrome-number/

function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    const arr = [];
    while (x >= 10) {
        let t = x % 10;
        arr.push(t);
        x = (x - t) / 10;
    }
    arr.push(x);
    for (let i = 0; i < Math.floor(arr.length) + 1; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) return false;
    }

    return true;
};

function isPalindrome2(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;
    let t = 1;
    let n = 0;
    while (t< x) {
        t =t*10;
        n++;
    }
    t = t /10;
    while(true) {
        if (x < 10 && t < 10) return true;
        let last = x % 10;
        x = x - last * t;
        if (x === last) return true;
        if (x > t || x < 0) {
            return false;
        } else {
            x = (x - last) / 10;
            t = t / 100;
        }
    }
};
console.log(isPalindrome2(1000031))
console.log(isPalindrome(132312))