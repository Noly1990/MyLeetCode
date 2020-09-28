// 677. 键值映射  https://leetcode-cn.com/problems/map-sum-pairs/

class MapSum {
    public treeRoot: TrieTreeNode;
    constructor() {
        this.treeRoot = new TrieTreeNode()
    }

    insert(key: string, val: number): void {
        let l = key.length;
        let index = 0;
        let recent = this.treeRoot;
        while (index <= l - 1) {
            const c = key[index];
            const num = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!recent.children[num]) {
                recent.children[num] = new TrieTreeNode();
                recent = recent.children[num]
            } else {
                recent = recent.children[num]
            }
            index++;
        }
        recent.value = val;
    }

    sum(prefix: string): number {
        let l = prefix.length;
        let index = 0;
        let recent = this.treeRoot;
        while (index <= l - 1) {
            const c = prefix[index];
            const num = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!recent.children[num]) {
                return 0;
            } else {
                recent = recent.children[num];
            }
            index++;
        }

        function sumR(node: TrieTreeNode) {
            let total = node.value;
            for (const p of node.children) {
                if (p) {
                    total += sumR(p)
                }
            }
            return total;
        }
        return sumR(recent);
    }
}


class TrieTreeNode {
    public children: TrieTreeNode[];
    public value: number;
    constructor(v?: number) {
        this.children = [];
        this.value = v === undefined ? 0 : v;
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
var obj = new MapSum()
obj.insert('apple', 2)
obj.insert('app', 2)
console.log(obj.treeRoot)
var param_2 = obj.sum('ap')

console.log(param_2);