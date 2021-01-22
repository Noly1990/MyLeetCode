// 1672. 最富有客户的资产总量 https://leetcode-cn.com/problems/richest-customer-wealth/

function maximumWealth(accounts: number[][]): number {
    return accounts.reduce((p, v) => {
        let t = v.reduce((ip, iv) => ip+iv, 0);
        return Math.max(t, p)
    }, 0)
};