// 532. 数组中的K-diff数对 https://leetcode-cn.com/problems/k-diff-pairs-in-an-array/

function findPairs(nums: number[], k: number): number {
    if (nums.length <= 1 || k < 0) {
        return 0;
    }
    const set = new Set();
    const set2 = new Set();
    for (let p of nums) {
        if (set.has(p - k) && !set2.has(p - k)) {
            set2.add(p - k)
        }

        if (set.has(p + k) && !set2.has(p)) {
            set2.add(p)
        }

        set.add(p);
    }

    return set2.size;
};