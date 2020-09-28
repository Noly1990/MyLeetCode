//315. 计算右侧小于当前元素的个数 https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/

class MyTreeNode {
    public val: number;
    public count: number;
    public son: number;
    public left: MyTreeNode | null;
    public right: MyTreeNode | null;
    constructor(val: number) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.count = 1;
        this.son = 0;
    }
}

function countSmaller(nums: number[]): number[] {
    if (nums.length === 0) return [];
    const counts: number[] = [0];
    const lenN = nums.length;
    let root = new MyTreeNode(nums[lenN - 1]);

    function addToTree(v: number) {
        let total = 0;
        let recent: MyTreeNode | null = root;
        while (recent) {
            if (v === recent.val) {
                recent.count++;
                total += recent.left ? (recent.left.son + recent.left.count) : 0;
                return total;
            } else if (v > recent.val) {
                recent.son++;
                total += recent.count;
                total += recent.left ? (recent.left.son + recent.left.count) : 0;
                if (recent.right) {
                    recent = recent.right;
                } else {
                    recent.right = new MyTreeNode(v);
                    return total;
                }
            } else if (v < recent.val) {
                recent.son++;
                if (recent.left) {
                    recent = recent.left;
                } else {
                    recent.left = new MyTreeNode(v);
                    return total;
                }
            }
        }
        return 0;
    }
    for (let i = lenN - 2; i >= 0; i--) {
        const t = addToTree(nums[i]);
        counts.unshift(t);
    }
    return counts;
};


function countSmaller2(nums: number[]): number[] {
    if (nums.length === 0) return [];
    const counts: number[] = [0];
    const lenN = nums.length;
    for (let i = lenN - 2; i >= 0; i--) {
        let c = 0;
        for (let j = i + 1; j < lenN; j++) {
            if (nums[j] < nums[i]) {
                c++;
            }
        }
        counts.unshift(c);
    }

    return counts;
};
console.log(countSmaller([5, 2, 6, 1, 3]))
console.log(countSmaller2([5, 2, 6, 1, 3]))