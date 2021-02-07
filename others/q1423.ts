// 1423. 可获得的最大点数 https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/

function maxScore(cardPoints: number[], k: number): number {
    let other = cardPoints.length - k;

    let sum = cardPoints.reduce((p, v) => v + p, 0);

    let otherSum = cardPoints.slice(0, other).reduce((p, v) => p +v, 0);

    let min = otherSum;

    if (other === 0) return sum;

    for (let i = 0; i< cardPoints.length - other; i++) {
        let left = cardPoints[i];
        let right = cardPoints[i+other];
        otherSum = otherSum - left + right;
        if (otherSum < min) min = otherSum
    }

    return sum - min;

}