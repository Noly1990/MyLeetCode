// 135. 分发糖果 https://leetcode-cn.com/problems/candy/

function candy(ratings: number[]): number {
    let candies = new Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length - 1; i++) {
        if (ratings[i - 1] > ratings[i] && candies[i - 1] <= candies[i]) {
            candies[i - 1] = candies[i] + 1;
        }
        if (ratings[i - 1] < ratings[i] && candies[i - 1] >= candies[i]) {
            candies[i] = candies[i - 1] + 1;
        }
        if (ratings[i] < ratings[i + 1] && candies[i] >= candies[i + 1]) {
            candies[i + 1] = candies[i] + 1;
        }
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1
        }
    }

    for (let i = ratings.length - 1; i > 0; i--) {

        if (ratings[i - 1] > ratings[i] && candies[i - 1] <= candies[i]) {
            candies[i - 1] = candies[i] + 1;
        }
        if (ratings[i - 1] < ratings[i] && candies[i - 1] >= candies[i]) {
            candies[i] = candies[i - 1] + 1;
        }
        if (ratings[i] < ratings[i + 1] && candies[i] >= candies[i + 1]) {
            candies[i + 1] = candies[i] + 1;
        }
        if (ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) {
            candies[i] = candies[i + 1] + 1
        }
    }

    return candies.reduce((p, v) => p + v, 0);
};

candy([1, 7, 2, 5, 4, 9, 11, 8])