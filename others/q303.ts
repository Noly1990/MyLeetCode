namespace Q303 {

    class NumArray {
        private nums: number[]
        private sumArr: number[]
        constructor(nums: number[]) {
            this.sumArr = [0]
            let total = 0;
            this.nums = nums;
            for (let i = 0; i < nums.length; i++) {
                total += nums[i]
                this.sumArr[i + 1] = total;
            }
        }

        public sumRange(i: number, j: number): number {
            return this.sumArr[j] - this.sumArr[i] + this.nums[j];
        }
    }
}
