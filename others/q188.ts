// 188. 买卖股票的最佳时机 IV https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/

namespace Q188 {
    function maxProfit(k: number, prices: number[]): number {
        if (k < 1) return 0;
        function allCan() {
            let total = 0;
            for (let i = 1; i < prices.length; ++i) {
                if (prices[i] > prices[i - 1])
                    total += prices[i] - prices[i - 1];
            }
            return total;
        }
        if (k >= prices.length / 2) return allCan();
        let buyArr = new Array(k).fill(Number.MIN_SAFE_INTEGER);
        let sellArr = new Array(k).fill(0);
        for (let p of prices) {
            buyArr[0] = Math.max(buyArr[0], - p);
            sellArr[0] = Math.max(sellArr[0], sellArr[0] + p);
            for (let i = 1; i < k; i++) {
                buyArr[i] = Math.max(buyArr[i], sellArr[i - 1] - p);
                sellArr[i] = Math.max(sellArr[i], sellArr[i] + p);
            }
        }
        return sellArr[k - 1]
    };
}
