// 225. 用队列实现栈 https://leetcode-cn.com/problems/implement-stack-using-queues/

class MyStack {
    private data:number[];
    constructor() {
        this.data  = []
    }

    push(x: number): void {
        this.data.push(x)
    }

    pop(): number {
        return this.data.pop()
    }

    top(): number {
        return this.data[this.data.length - 1]
    }

    empty(): boolean {
        return this.data.length === 0
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */