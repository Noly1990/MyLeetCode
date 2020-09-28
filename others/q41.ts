// 41 缺失的第一个正数 https://leetcode-cn.com/problems/first-missing-positive/

function firstMissingPositive(nums: number[]): number {
    nums.sort((a,b) => a-b);
    let begin = 0;
    for (let i =0;i<nums.length;i++) {
        if (nums[i] === 1) {
            begin = i;
            break;
        }
    }

    if (nums[0] !== 1 && begin == 0) return 1; 
    let recent = begin;
    let need = 1;
    while(recent < nums.length) {
        if (nums[recent] === need) {
            recent ++;
        }
        if (nums[recent] === need + 1) {
            need++;
            recent++;
        }
        if (nums[recent] > need + 1) {
            return need + 1;
        }
    }

    return nums[nums.length -1] + 1;
};

console.log(firstMissingPositive([1,2,2,1,3,1,0,4,0]))