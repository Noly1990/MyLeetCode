// 1437 是否所有 1 都至少相隔 k 个元素 https://leetcode-cn.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

function kLengthApart(nums: number[], k: number): boolean {
    const first1 = nums.indexOf(1);
    if (first1 > -1) {
        let step = 0;
        for (let i = first1 + 1; i < nums.length; i++) {
            if (nums[i] === 0) {
                step++;
            } else {
                if (step >= k) {
                    step = 0;
                } else {
                    return false;
                }

            }
        }
    }

    return true

};