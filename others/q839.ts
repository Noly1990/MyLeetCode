// 839. 相似字符串组 https://leetcode-cn.com/problems/similar-string-groups/

function numSimilarGroups(strs: string[]): number {
    if (strs.length === 1) return 1;
    let setArr: Set<number>[] = [new Set([0])];

    function isSimi(s1: string, s2: string) {
        let c = 0
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] !== s2[i]) c++
            if (c > 2) return false
        }
        return true;
    }

    function unionSet(set1: Set<number>, set2: Set<number>) {
        return new Set(Array.from(set1).concat(Array.from(set2)))
    }


    for (let i = 1; i < strs.length; i++) {
        let temp = []
        let tempSet = new Set([i]);
        for (let set of setArr) {
            let added = false;
            for (let v of set) {
                if (isSimi(strs[i], strs[v])) {
                    tempSet = unionSet(tempSet, set);
                    added = true;
                    break
                }
            }
            if (!added) temp.push(set);
        }
        temp.push(tempSet)
        setArr = temp

    }

    return setArr.length
};