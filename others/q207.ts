// 207. 课程表 https://leetcode-cn.com/problems/course-schedule/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const needMap: Map<number, number[]> = new Map();
    for (const p of prerequisites) {
        let [a, b] = p;
        if (needMap.get(a)) {
            needMap.get(a)?.push(b)
        } else {
            needMap.set(a, [b])
        }
    }
    let canSet: Set<number> = new Set()
    let flagSet: Set<number> = new Set();
    function oneCan(index: number) {
        if (flagSet.has(index)) return false;
        let indexNeed = needMap.get(index)
        if (indexNeed) {
            flagSet.add(index)
            for (let per of indexNeed) {
                if (canSet.has(per)) continue
                if (!oneCan(per)) return false;
                flagSet.delete(per)
            }
            indexNeed.forEach((p) => {
                canSet.add(p)
            })
            return true;
        }
        canSet.add(index)
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (canSet.has(i)) continue
        flagSet = new Set();
        if (!oneCan(i)) return false
    }
    return true;
};

console.log(canFinish(2, [[1, 0]]))
console.log(canFinish(2, [[1, 0], [0, 1]]))
console.log(canFinish(3, [[0, 1], [0, 2], [1, 2]]))
console.log(canFinish(8, [[1, 0], [2, 6], [1, 7], [6, 4], [7, 0], [0, 5]]))