// 1184. 公交站间的距离 https://leetcode-cn.com/problems/distance-between-bus-stops/

function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let sumArr = [0];
    for (let i = 0; i < distance.length; i++) {
        sumArr[i + 1] = sumArr[i] + distance[i];
    }
    let sum1 = Math.abs(sumArr[destination] - sumArr[start]);
    let sum2 = sumArr[sumArr.length -1] - sum1;
    return Math.min(sum1, sum2);
};