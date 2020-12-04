// 452. 用最少数量的箭引爆气球 https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/

function findMinArrowShots(points: number[][]): number {
    if (points.length === 0) return 0;
    if (points.length === 1) return 1;
    points.sort((a, b) => {
        if (a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0];
    });
    let total = 0;
    let before = points[0];
    for (let i = 1 ;i< points.length;i++) {
        if (points[i][0] > before[1]) {
            total++;
            before = points[i];
        }else if (points[i][0] === before[1]) {
            before[0] = before[1];
        }else {
            before = [points[i][0], Math.min(before[1], points[i][1]) ];
        } 
    }
    return total+1;
};