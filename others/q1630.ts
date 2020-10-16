function minimumOperations(leaves: string): number {

    let len = leaves.length;
    let g = (leaves[0] == 'y' ? 1 : -1);
    let gmin = g;
    let ans = Number.MAX_VALUE;
    for (let i = 1; i < len; ++i) {
        let isYellow = (leaves[i] === 'y')?1:0;
        g += 2 * isYellow - 1;
        if (i !== len - 1) {
            ans = Math.min(ans, gmin - g);
        }
        gmin = Math.min(gmin, g);
    }
    return ans + (g + len) / 2;
};
