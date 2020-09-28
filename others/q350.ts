// 350. 两个数组的交集 II https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/

function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a-b)
    nums2.sort((a, b) => a-b)
    
    let index1=0;
    let index2=0;
    const r = []
    while(index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] === nums2[index2]) {
            r.push(nums1[index1]);
            index1++;
            index2++;
        } else if (nums1[index1] > nums2[index2]) {
            index2++;
        } 
        else if (nums1[index1] < nums2[index2]) {
            index1++;
        } 
    }
    return r;
}; 

console.log(intersect([1,2,2,1,2],
    [2,2,1,2]))