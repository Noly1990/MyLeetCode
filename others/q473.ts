//473. 火柴拼正方形 https://leetcode-cn.com/problems/matchsticks-to-square/

function makesquare(nums: number[]): boolean {

    if (nums.length < 4) return false;
    const sum = nums.reduce((p, c) => {
        return p + c;
    }, 0);

    if (sum % 4 !== 0) return false;
    const each = sum / 4;
    for (const p of nums) {
        if (p > each) return false;
    }
    // console.log(each)
    nums.sort((a, b) => b - a);
    let lines = [0, 0, 0, 0];
    function put(index: number) {
        if (index === nums.length) {
            return lines[0] == lines[1] && lines[1] == lines[2] && lines[2] == lines[3];
        }
        for (let i = 0; i < 4; i++) {
            if (lines[i] + nums[index] <= each) {
                lines[i] += nums[index];
                if (put(index + 1)) {
                    return true;
                }
                lines[i] -= nums[index]
            }
        }
        return false;
    }

    return put(0);
};


console.log(makesquare([8, 8, 7, 7, 6, 6, 6, 5, 5, 4, 2]))
console.log(makesquare([5,5,5,5,4,4,4,4,3,3,3,3]))
console.log(makesquare([10,6,5,5,5,3,3,3,2,2,2,2]))
console.log(makesquare([1, 1, 2, 2, 2]))
// 88 772 664 655
// 862 754 85
