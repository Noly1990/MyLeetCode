// 1203. 项目管理 https://leetcode-cn.com/problems/sort-items-by-groups-respecting-dependencies/

function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
    let groupMap: Map<number, number[]> = new Map();
    let index = m;
    for (let i = 0; i < group.length; i++) {
        if (group[i] !== -1) {
            if (groupMap.has(group[i])) {
                groupMap.get(group[i]).push(i)
            } else {
                groupMap.set(group[i], [i])
            }
        } else {
            group[i] = index
            groupMap.set(index++, [i]);
        }
    }

    let indeg = new Array(n).fill(0);

    let groupIndeg: Set<number>[] = new Array(index).fill(undefined).map(() => new Set());

    let beforeRevere: Map<number, number[]> = new Map();

    for (let i = 0; i < beforeItems.length; i++) {
        const ele = beforeItems[i]
        if (ele.length !== 0) {
            indeg[i] = ele.length;
            ele.forEach((v => {
                if (beforeRevere.has(v)) {
                    beforeRevere.get(v).push(i)
                } else {
                    beforeRevere.set(v, [i])
                }
                if (group[v] !== group[i]) groupIndeg[group[i]].add(group[v])
            }))
        }
    }

    let queue: number[][] = []

    let added = new Array(m + n).fill(0)
    while (queue.length < groupMap.size) {
        let work = false
        for (let i = 0; i < groupIndeg.length; i++) {
            if (groupIndeg[i].size === 0 && added[i] === 0 && groupMap.get(i)) {
                queue.push(groupMap.get(i));
                added[i] = 1;
                work = true
                for (let j = 0; j < groupIndeg.length; j++) {
                    groupIndeg[j].delete(i)
                }
            }
        }
        if (!work) return []
    }
    let queue2 = []
    let step = 0;
    let stepAdd = 0;
    while (queue2.length < n) {
        let temp = []
        for (let i = 0; i < queue[step].length; i++) {
            let r = queue[step][i]
            if (indeg[r] === 0) {
                temp.push(i)
                indeg[r] = -1
            }
        }
        if (temp.length === 0) return []
        for (let i = temp.length - 1; i >= 0; i--) {
            let r = queue[step][temp[i]];
            stepAdd++;
            queue2.push(r);
            if (beforeRevere.has(r)) {
                beforeRevere.get(r).forEach((v) => {
                    indeg[v]--
                })
            }

        }
        if (stepAdd === queue[step].length) {
            step++;
            stepAdd = 0
        }
    }

    return queue2;
};


// console.log(sortItems(8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3, 6], [], [], []]))

console.log(sortItems(5,
    5,
    [2, 0, -1, 3, 0],
    [[2, 1, 3], [2, 4], [], [], []]))