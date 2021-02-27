// 1438. 绝对差不超过限制的最长连续子数组 https://leetcode-cn.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

function longestSubarray(nums: number[], limit: number): number {
    class Data {

        public map: Map<number, number>;
        public sorted: number[]
        constructor() {
            this.map = new Map();
            this.sorted = []
        }

        public diff() {
            if (this.sorted.length > 0) {
                return this.sorted[this.sorted.length - 1] - this.sorted[0]
            } else {
                return 0;
            }
        }

        public find(min: number, max: number, target: number): number {
            if (min === max - 1) {
                if (this.sorted[min] === target) return min;
                if (this.sorted[min] > target) return min;
                if (this.sorted[min] < target) return min + 1;
            }
            const mid = Math.floor((min + max) / 2);
            if (target < this.sorted[mid]) return this.find(min, mid, target);
            if (target > this.sorted[mid]) return this.find(mid, max, target);
            return mid;
        }

        public searchInsert(target: number): number {
            if (target < this.sorted[0]) return 0;
            if (target > this.sorted[this.sorted.length - 1]) return this.sorted.length;
            return this.find(0, this.sorted.length - 1, target)
        };

        public add(num: number) {
            if (this.map.has(num)) {
                this.map.set(num, this.map.get(num) + 1)
            } else {
                this.map.set(num, 1)
                let index = this.searchInsert(num);
                this.sorted.splice(index, 0, num)
            }
        }


        public remove(num: number) {
            if (this.map.get(num) > 1) {
                this.map.set(num, this.map.get(num) - 1)
            } else {
                this.map.delete(num)
                this.sorted.splice(this.searchInsert(num), 1);
            }
        }
    }
    let left = 0;
    let right = 0;
    let max = 0;
    let data = new Data()

    while (right < nums.length) {
        if (data.diff() <= limit) {
            max = Math.max(max, right - left);
            data.add(nums[right])
            right++;
        } else {
            data.remove(nums[left]);
            left++;
        }
    }
    if (data.diff() <= limit) {
        max = Math.max(max, right - left);
    }
    return max;

};

console.log(longestSubarray(
    [8, 2, 4, 7],
    4
))

console.log(longestSubarray(
    [2, 5, 2],
    9
))