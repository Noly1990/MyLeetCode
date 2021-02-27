// 03. 数据流中的第 K 大元素 https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/

class KthLargest {

    public heap: MinHeap;
    public k: number;

    constructor(k: number, nums: number[]) {

        this.heap = new MinHeap();
        this.k = k
        for (const x of nums) {
            this.add(x);
        }
    }

    add(val: number): number {
        this.heap.offer(val);
    if (this.heap.size() > this.k) {
        this.heap.poll();
    }
    return this.heap.peek();
    }
}

class MinHeap {
    private data: number[];
    constructor(data = []) {
        this.data = data;
        this.heapify();
    }

    heapify() {
        if (this.size() < 2) return;
        for (let i = 1; i < this.size(); i++) {
        this.bubbleUp(i);
        }
    }

    peek() {
        if (this.size() === 0) return null;
        return this.data[0];
    }

    offer(value) {
        this.data.push(value);
        this.bubbleUp(this.size() - 1);
    }

    poll() {
        if (this.size() === 0) {
            return null;
        }
        const result = this.data[0];
        const last = this.data.pop();
        if (this.size() !== 0) {
            this.data[0] = last;
            this.bubbleDown(0);
        }
        return result;
    }
    comparator(a, b) {
        return a-b
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = (index - 1) >> 1;
            if (this.comparator(this.data[index], this.data[parentIndex]) < 0) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        const lastIndex = this.size() - 1;
        while (true) {
            const leftIndex = index * 2 + 1;
            const rightIndex = index * 2 + 2;
            let findIndex = index;
            if (
                leftIndex <= lastIndex &&
                this.comparator(this.data[leftIndex], this.data[findIndex]) < 0
            ) {
                findIndex = leftIndex;
            }
            if (
                rightIndex <= lastIndex &&
                this.comparator(this.data[rightIndex], this.data[findIndex]) < 0
            ) {
                findIndex = rightIndex;
            }
            if (index !== findIndex) {
                this.swap(index, findIndex);
                index = findIndex;
            } else {
                break;
            }
        }
    }

  swap(index1, index2) {
        [this.data[index1], this.data[index2]] = [this.data[index2], this.data[index1]];
    }

    size() {
        return this.data.length;
    }
}
