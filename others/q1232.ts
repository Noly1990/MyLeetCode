// 1232. 缀点成线 https://leetcode-cn.com/problems/check-if-it-is-a-straight-line/

function checkStraightLine(coordinates: number[][]): boolean {
    if (coordinates.length <= 2) return true;

    if (coordinates[1][1] - coordinates[0][1] === 0) {
        return coordinates.every(v => v[1] === coordinates[0][1])
    }

    if (coordinates[1][0] - coordinates[0][0] === 0) {
        return coordinates.every(v => v[0] === coordinates[0][0])
    }

    let r = (coordinates[1][0] - coordinates[0][0]) / (coordinates[1][1] - coordinates[0][1]);

    for (let i = 2; i < coordinates.length; i++) {
        if ((coordinates[i][0] - coordinates[0][0]) / (coordinates[i][1] - coordinates[0][1]) === r) continue
        return false;
    }

    return true;

};