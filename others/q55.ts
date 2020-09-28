// 55. 跳跃游戏 https://leetcode-cn.com/problems/jump-game/

function canJump(nums: number[]): boolean {
    let maxJump = 0;
    for (let i=0;i<nums.length;i++) {
        if (i > maxJump) return false;
        maxJump = Math.max(maxJump, i+nums[i]);
    }
    return true;
};

console.log(canJump([3, 2, 1, 0, 4]))

console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]))

console.log(canJump([1, 2, 3]))