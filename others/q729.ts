// 729. 我的日程安排表 I https://leetcode-cn.com/problems/my-calendar-i/

class MyCalendar {
    public range:number[][];
    constructor() {
        this.range = [];
    }

    book(start: number, end: number): boolean {
        if (this.range.length === 0) {
            this.range.push([start, end]);
        }

        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */