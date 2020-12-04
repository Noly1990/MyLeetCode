// 493. 翻转对 https://leetcode-cn.com/problems/reverse-pairs/

function reversePairs(nums: number[]): number {
    let len = nums.length;
    let ans = 0;
    let map: Map<number, [number, number]> = new Map();
    for (let i = 1; i < len; i++) {
        let temp = 0;
        if (map.has(nums[i])) {
            let [index, old] = map.get(nums[i]) || [0, 0];
            for (let j = index + 1; j < i; j++) {
                if (nums[j] > 2 * nums[i]) {
                    temp++;
                }
            }
            map.set(nums[i], [i - 1, temp + old]);
            ans += temp;
            ans += old;
        } else {
            for (let j = 0; j < i; j++) {
                if (nums[j] > 2 * nums[i]) {
                    temp++;
                }
            }
            map.set(nums[i], [i - 1, temp]);
            ans += temp;
        }
    }
    return ans;
};

function reversePairs2(nums: number[]): number {
    let len = nums.length;
    let ans = 0;
    class MyyTreeNode {
        public value: number;
        public left: MyyTreeNode | null;
        public lC: number;
        public right: MyyTreeNode | null;
        public rC: number;
        constructor(v) {
            this.value = v;
            this.left = null;
            this.right = null;
            this.lC = 0;
            this.rC = 0;
        }
    }
    let head = new MyyTreeNode(nums[0]);

    function insert(v: number) {
        let r = head;
        if (r.value)
    }

    function countV(v: number) {

    }
    for (let i = 0; i < nums.length; i++) {

    }
    return ans;
};