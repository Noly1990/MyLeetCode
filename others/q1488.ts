// 1488. 避免洪水泛滥 https://leetcode-cn.com/problems/avoid-flood-in-the-city/

function avoidFlood(rains: number[]): number[] {
    const fullMap = new Map();
    const answer = [];
    const emptySet: Set<number> = new Set()
    for (let i = 0; i < rains.length; i++) {
        if (rains[i] > 0) {
            answer[i] = -1;
            if (fullMap.has(rains[i])) {
                let before = fullMap.get(rains[i]);
                let can = false;
                for (let p of emptySet) {
                    if (p > before) {
                        can = true;
                        answer[p] = rains[i];
                        emptySet.delete(p)
                        break;
                    }
                }
                if (!can) return [];
            };
            fullMap.set(rains[i], i);
        } else {
            answer[i] = 1;
            emptySet.add(i)
        }
    }
    return answer;
};
console.log(avoidFlood([1, 2, 0, 0, 2, 1]))
console.log(avoidFlood([10, 20, 20]))