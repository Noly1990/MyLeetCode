// 503. 下一个更大元素 II https://leetcode-cn.com/problems/next-greater-element-ii/


function nextGreaterElements(nums: number[]): number[] {
    let stack = [0];
    let ans = new Array(nums.length).fill(-1)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[stack[0]]) {
            while (stack.length > 0 && nums[i] > nums[stack[0]]) {
                let one = stack.shift();
                if (nums[i] > nums[one]) {
                    ans[one] = nums[i]
                }
            }

        }
        stack.unshift(i)
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[stack[0]]) {
            while (stack.length > 0 && nums[i] > nums[stack[0]]) {
                let one = stack.shift();
                if (nums[i] > nums[one]) {
                    ans[one] = nums[i]
                }
            }

        }
        stack.unshift(i)
    }

    return ans;

};






console.log(nextGreaterElements([1, 9, 2, 1, 6, 6, 9, 4, 3, 5, 7, 2, 9, 11, 6, 5, 4, 3, 2]))