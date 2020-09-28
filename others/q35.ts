// 35. 搜索插入位置 https://leetcode-cn.com/problems/search-insert-position/
function searchInsert(nums: number[], target: number): number {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    function find(min: number, max: number): number {
        if (min === max - 1) {
            if (nums[min] === target) return min;
            if (nums[min] > target) return min;
            if (nums[min] < target) return min + 1;
        }
        const mid = Math.floor((min + max) / 2);
        if (target < nums[mid]) return find(min, mid);
        if (target > nums[mid]) return find(mid, max);
        return mid;
    }
    return find(0, nums.length - 1)
};


function searchInsert2(nums: number[], target: number): number {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    let b = 0;
    let e = nums.length - 1;
    while (b <= e) {
        let mid = Math.floor((b + e) / 2);
        if (target === nums[mid]) return mid;
        if (target > nums[mid]) b = mid + 1;
        else e = mid - 1;
    }
    return b;
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert2([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert2([1, 3, 5, 6], 0))
