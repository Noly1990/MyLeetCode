// 123. 买卖股票的最佳时机 III https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/

namespace Q123 {
    function maxProfit(prices: number[]): number {
        let fstBuy = Number.MIN_SAFE_INTEGER, fstSell = 0;
        let secBuy = Number.MIN_SAFE_INTEGER, secSell = 0;
        for (let p of prices) {
            fstBuy = Math.max(fstBuy, -p);
            fstSell = Math.max(fstSell, fstBuy + p);
            secBuy = Math.max(secBuy, fstSell - p);
            secSell = Math.max(secSell, secBuy + p);
        }
        return secSell;
    };
}

