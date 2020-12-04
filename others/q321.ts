// 321. 拼接最大数 https://leetcode-cn.com/problems/create-maximum-number/ 

function maxNumber(nums1: number[], nums2: number[], k: number): number[] {

    let m = nums1.length;
    let n = nums2.length;

    function maxSubsequence(nums: number[], k: number): number[] {
        const length = nums.length;
        const stack = new Array(k).fill(0);
        let top = -1;
        let remain = length - k;
        for (let i = 0; i < length; i++) {
            const num = nums[i];
            while (top >= 0 && stack[top] < num && remain > 0) {
                top--;
                remain--;
            }
            if (top < k - 1) {
                stack[++top] = num;
            } else {
                remain--;
            }
        }
        return stack;
    }

    function merge(subsequence1: number[], subsequence2: number[]): number[] {
        const x = subsequence1.length, y = subsequence2.length;
        if (x === 0) {
            return subsequence2;
        }
        if (y === 0) {
            return subsequence1;
        }
        const mergeLength = x + y;
        const merged = new Array(mergeLength).fill(0);
        let index1 = 0, index2 = 0;
        for (let i = 0; i < mergeLength; i++) {
            if (compare(subsequence1, index1, subsequence2, index2) > 0) {
                merged[i] = subsequence1[index1++];
            } else {
                merged[i] = subsequence2[index2++];
            }
        }
        return merged;
    }

    function compare(subsequence1: number[], index1: number, subsequence2: number[], index2: number) {
        const x = subsequence1.length, y = subsequence2.length;
        while (index1 < x && index2 < y) {
            const difference = subsequence1[index1] - subsequence2[index2];
            if (difference !== 0) {
                return difference;
            }
            index1++;
            index2++;
        }
        return (x - index1) - (y - index2);
    }

    let maxOne = new Array(k).fill(0);

    for (let i = Math.max(k - n, 0); i <= Math.min(m, k); i++) {
        const subsequence1: number[] = maxSubsequence(nums1, i);
        const subsequence2: number[] = maxSubsequence(nums2, k - i);
        const curMaxSubsequence = merge(subsequence1, subsequence2);
        if (compare(curMaxSubsequence, 0, maxOne, 0) > 0) {
            maxOne.splice(0, k, ...curMaxSubsequence);
        }

    }



    return maxOne
};