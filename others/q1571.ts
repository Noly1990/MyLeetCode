// 1571  剑指 Offer 10- II. 青蛙跳台阶问题  https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/

function numWays(n: number): number {
    let store = [1, 1, 2];
    function process(a: number) {
        if (store[a] !== undefined) return store[a];
        store[a] = (process(a - 1) + process(a - 2)) % 1000000007;
        return store[a];    
    }
    process(n)
    return store[n]
}
console.log(numWays(88))