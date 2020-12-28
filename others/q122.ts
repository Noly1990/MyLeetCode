// 买卖股票的最佳时机 II https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

namespace Q122 {
    function maxProfit(prices: number[]): number {
        const sell = []; // 第几天卖
        const take = []; // 第几天持有
        const empty = [];
        if (prices.length === 1) return 0;
        if (prices.length === 2) return Math.max(prices[1] - prices[0], 0)
        take[0] = -prices[0];
        empty[0] = 0;
        sell[0] = 0;
        take[1] = Math.max(-prices[1], - prices[0])
        sell[1] = Math.max(prices[1] - prices[0], 0);
        empty[1] = sell[1];
        for (let i = 2; i < prices.length; i++) {
            take[i] = Math.max(sell[i - 1] - prices[i], empty[i - 1] - prices[i], take[i - 1]);
            sell[i] = take[i - 1] + prices[i];
            empty[i] = Math.max(empty[i - 1], sell[i - 1]);
        }
        return Math.max(empty[prices.length - 1], sell[prices.length - 1]);


    };
}
