// 992. K 个不同整数的子数组 https://leetcode-cn.com/problems/subarrays-with-k-different-integers/submissions/

function subarraysWithKDistinct(A: number[], K: number): number {
    const len = A.length;
    const num1 = new Array(len + 1).fill(0);
    const num2 = new Array(len + 1).fill(0);
    let tot1 = 0, tot2 = 0;
    let left1 = 0, left2 = 0, right = 0;
    let ans = 0;
    while (right < len) {
        if (num1[A[right]] == 0) {
            tot1++;
        }
        num1[A[right]]++;
        if (num2[A[right]] == 0) {
            tot2++;
        }
        num2[A[right]]++;
        while (tot1 > K) {
            num1[A[left1]]--;
            if (num1[A[left1]] == 0) {
                tot1--;
            }
            left1++;
        }
        while (tot2 > K - 1) {
            num2[A[left2]]--;
            if (num2[A[left2]] == 0) {
                tot2--;
            }
            left2++;
        }
        ans += left2 - left1;
        right++;
    }
    return ans;
};

console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2))

console.log(subarraysWithKDistinct([2, 1, 2, 1, 2], 2))