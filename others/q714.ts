// 714. 买卖股票的最佳时机含手续费 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

function maxProfit(prices: number[], fee: number): number {
    const sell = []; // 第几天卖
    const take = []; // 第几天持有
    const empty = [];
    if (prices.length === 1) return 0;
    if (prices.length === 2) return Math.max(prices[1] - fee - prices[0], 0)
    take[0] = -prices[0];
    empty[0] = 0;
    sell[0] = 0;
    take[1] = Math.max(-prices[1], - prices[0])
    sell[1] = Math.max(prices[1] - fee - prices[0], 0);
    empty[1] = sell[1];
    for (let i = 2; i < prices.length; i++) {
        take[i] = Math.max(sell[i - 1] - prices[i], empty[i - 1] - prices[i], take[i - 1]);
        sell[i] = take[i - 1] + prices[i] - fee;
        empty[i] = Math.max(empty[i - 1], sell[i-1]);
    }
    console.log('empty',empty)
    console.log('sell', sell)
    return Math.max(empty[prices.length -1],sell[prices.length - 1]);
};

console.log(maxProfit([1, 3, 2, 8, 4, 9, 2, 9, 3,10], 2))