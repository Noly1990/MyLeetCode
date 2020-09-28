// 309. 最佳买卖股票时机含冷冻期 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

function maxProfit2(prices: number[]): number {
    const buy: number[] = [];
    const sell: number[] = [];
    if (prices.length < 2) return 0;
    if (prices.length === 2) return Math.max(prices[1] - prices[0], 0);
    buy[0] = 0;
    sell[0] = 0;
    buy[1] = 0;
    sell[1] = Math.max(prices[1] - prices[0], 0);
    buy[2] = 0;
    sell[2] = Math.max(prices[2] - prices[0], prices[2] - prices[1], 0);
    for (let i = 3; i < prices.length; i++) {
        let beforeBuy = [];
        let beforeSell = [];
        for (let j = 0; j < i - 1; j++) {
            let t = buy[j] + prices[i] - prices[j];
            beforeBuy.push(t);
            beforeSell.push(sell[j])
        }
        beforeBuy.push(buy[i - 1] + prices[i] - prices[i - 1]);
        sell[i] = Math.max(...beforeBuy, 0);
        buy[i] = Math.max(...beforeSell, 0);
    }
    return Math.max(...sell);
};

function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;
    if (prices.length === 2) return Math.max(prices[1] - prices[0], 0);
    const dp: number[][] = [];
    for (let i=0;i<prices.length;i++) {
        dp.push([])
    }
    dp[0][0] = -prices[0]; // 持有
    dp[0][1] = 0; // 刚卖
    dp[0][2] = 0;// 卖了超过一天
    for (let i = 1; i < prices.length; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        dp[i][1] = dp[i - 1][0] + prices[i];
        dp[i][2] = Math.max(dp[i-1][1], dp[i-1][2]);
    }
    return Math.max(dp[prices.length - 1][1], dp[prices.length - 1][2]);
};


console.log(maxProfit([1, 2, 3, 0, 2]))

console.log(maxProfit([6, 1, 6, 4, 3, 0, 2]))
