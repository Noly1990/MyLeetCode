// 232. 用栈实现队列 https://leetcode-cn.com/problems/implement-queue-using-stacks/

class MyQueue {

    private inStack: number[];
    private outStack: number[]
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    push(x: number): void {
        this.inStack.push(x);
    }

    pop(): number {
        if (this.outStack.length > 0) {
            return this.outStack.pop();
        } else {
            while (this.inStack.length > 0) {
                this.outStack.push(this.inStack.pop())
            }
            return this.outStack.pop();
        }
    }

    peek(): number {
        return this.outStack.length > 0 ? this.outStack[this.outStack.length - 1] : this.inStack[0];
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */