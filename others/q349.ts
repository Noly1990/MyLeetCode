// 349. 两个数组的交集 https://leetcode-cn.com/problems/intersection-of-two-arrays/

function intersection(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let index1 = 0;
    let index2 = 0;
    let ans: Set<number> = new Set();
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] === nums2[index2]) {
            ans.add(nums1[index1]);
            index1++;
            index2++;
        } else if (nums1[index1] < nums2[index2]) {
            index1++
        } else {
            index2++;
        }
    }
    return Array.from(ans);
};