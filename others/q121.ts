// 121. 买卖股票的最佳时机 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/ 

namespace Q121 {
    function maxProfit(prices: number[]): number {
        let fstBuy = Number.MIN_SAFE_INTEGER, fstSell = 0;
        for (let p of prices) {
            fstBuy = Math.max(fstBuy, -p);
            fstSell = Math.max(fstSell, fstBuy + p);
        }
        return fstSell;
    };
}

