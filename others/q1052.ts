// 1052. 爱生气的书店老板  https://leetcode-cn.com/problems/grumpy-bookstore-owner/

function maxSatisfied(customers: number[], grumpy: number[], X: number): number {
    let like = 0;
    const unLikeSum = [0]
    for (let i = 0; i < customers.length; i++) {
        like += grumpy[i] === 0 ? customers[i] : 0;
        unLikeSum[i + 1] = unLikeSum[i] + grumpy[i] * customers[i];
    }
    let likeMax = like;
    for (let i = 0; i < customers.length - X + 1; i++) {
        likeMax = Math.max(likeMax, like + unLikeSum[i + X] - unLikeSum[i])
    }
    return likeMax;
};

console.log(maxSatisfied(
    [1, 0, 1, 2, 1, 1, 7, 5],
    [0, 1, 0, 1, 0, 1, 0, 1],
    3,
))