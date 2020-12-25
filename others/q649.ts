// 649. Dota2 参议院 https://leetcode-cn.com/problems/dota2-senate/

function predictPartyVictory(senate: string): string {
    const len = senate.length;
    const radiant:number[] = [], dire:number[] = [];

    for (let i = 0; i < len; i++) {
        if (senate[i] === 'R') {
            radiant.push(i);
        } else {
            dire.push(i);
        }
    }

    while (radiant.length && dire.length) {
        if (radiant[0] < dire[0]) {
            radiant.push(radiant[0] + len);
        } else {
            dire.push(dire[0] + len);
        }
        radiant.shift();
        dire.shift();
    }
    return radiant.length ? "Radiant" : "Dire";
};
