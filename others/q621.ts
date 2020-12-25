// 621. 任务调度器 https://leetcode-cn.com/problems/task-scheduler/

function leastInterval(tasks: string[], n: number): number {
    if (n === 0) return tasks.length;
    let map: Map<string, string[]> = new Map();
    for (let v of tasks) {
        if (map.has(v)) {
            let old = map.get(v);
            old.push(v)
        } else {
            map.set(v, [v]);
        }
    }


    let ans: string[] = [];
    let taskArr: string[][] = []

    for (let v of map) {
        let [key, strArrs] = v
        taskArr.push(strArrs);
    }

    taskArr.sort((a, b) => b.length - a.length);
    let m = taskArr[0].length;
    let t = 0;
    for (let i=0;i<taskArr.length;i++) {
        if (taskArr[i].length === m) {
            t++;
        }
    }
    return Math.max((m - 1) * (n + 1) + t, tasks.length);
};