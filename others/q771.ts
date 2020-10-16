function numJewelsInStones(J: string, S: string): number {
    let m = new Set()
    for (let c of J) {
        m.add(c)
    }
    let t = 0;
    for (let c of S) {
        if (m.has(c)) {
            t++
        }
    }
    return t;
};