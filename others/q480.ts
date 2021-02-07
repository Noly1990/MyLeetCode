// 480. 滑动窗口中位数 https://leetcode-cn.com/problems/sliding-window-median/

function medianSlidingWindow(nums: number[], k: number): number[] {
    let ans: number[] = [];
    let sortedArr = nums.slice(0, k).sort((a, b) => a - b);
    let len = nums.length;
    let left = 0;
    let right = k;

    let a, b;
    if (k % 2 === 0) {
        a = k / 2;
        b = k / 2 - 1;
    } else {
        a = (k - 1) / 2;
        b = (k - 1) / 2;
    }
    while (right <= len) {


        ans.push((sortedArr[a] + sortedArr[b]) / 2)
        if (nums[left] !== nums[right]) {
            sortedArr.splice(sortedArr.indexOf(nums[left]), 1);

            if (nums[right] <= sortedArr[0]) {
                sortedArr.unshift(nums[right])
            } else if (nums[right] >= sortedArr[sortedArr.length - 1]) {
                sortedArr.push(nums[right])
            } else {
                let l = 0;
                let r = k - 1;
                let m = -1;
                while (l <= r) {
                    let mid = Math.floor((r + l) / 2);
                    if (sortedArr[mid] < nums[right]) {
                        l = mid + 1
                    } else if (sortedArr[mid] > nums[right]) {
                        r = mid - 1
                    } else {
                        m = mid
                        break;
                    }
                }
                sortedArr.splice(m !== -1 ? m : l, 0, nums[right])
            }
        }
        right++;
        left++;
    }
    return ans;
};

console.log(medianSlidingWindow([7, 0, 3, 9, 9, 9, 1, 7, 2, 3], 6))