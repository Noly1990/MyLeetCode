// 1521 用两个栈实现队列 https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/



class CQueue {

    private main: number[];
    private sub: number[];
    constructor() {
        this.main = [];
        this.sub = [];
    }

    appendTail(value: number): void {
        this.main.push(value);
    }

    deleteHead(): number {

        if (this.sub.length > 0) {
            return this.sub.pop() || -1;
        }

        if (this.main.length === 0) return -1;

        while (this.main.length > 0) {
            this.sub.push(this.main.pop() || -1);
        }

        return this.sub.pop() || -1;
    }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */