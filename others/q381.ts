// 381. O(1) 时间插入、删除和获取随机元素 - 允许重复 https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed/

class RandomizedCollection {

    private index: Map<number, Set<number>>;


    private arr: number[];
    constructor() {
        this.index = new Map();
        this.arr = [];
    }

    insert(val: number): boolean {
        
        let index = this.arr.push(val);

        if (this.index.has(val)) {
            this.index.get(val)?.add(index - 1);
        } else {
            let temp:Set<number> = new Set();
            temp.add(index-1);
            this.index.set(val, temp);
        }
        return this.index.get(val)?.size === 1;
    }

    remove(val: number): boolean {
        if (!this.index.has(val) || this.index.get(val)?.size === 0) return false;
        let index = this.index.get(val)?.values().next().value;
        
        this.arr[index] = this.arr[this.arr.length -1];
        
        this.index.get(this.arr[index])?.delete(this.arr.length -1)
        this.index.get(val)?.delete(index);

        if (index < this.arr.length- 1) {
            this.index.get(this.arr[index])?.add(index)
        }
        this.arr.pop();
        return true;
    }

    getRandom(): number {
        return this.arr[Math.floor(this.arr.length * Math.random())];
    }
}

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */