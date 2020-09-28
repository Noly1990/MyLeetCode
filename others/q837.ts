// 837. 新21点 https://leetcode-cn.com/problems/new-21-game/

function new21Game(N: number, K: number, W: number): number {
    if (K + W - 1 <= N) return 1;
    if (K === 0) {
        return 1;
    }


    // 0 1 2 3 4    5   6  7  8  9   10   11  12    14      15 
    //         K-1  K         N        W           K+W-1    K+W

    const dp: number[] = []; // 从 x 开始游戏  获胜的概率
    let s = 0;
    for (let i = K; i < K + W; i++) {
        dp[i] = i > N ? 0 : 1;
        s += dp[i]
    }

    dp[K - 1] = s / W;

    for (let i = K - 2; i >= 0; i--) {
        s = s - dp[i + W + 1] + dp[i + 1];
        dp[i] = s / W;
    }

    return dp[0]
};


function new21Game2(N: number, K: number, W: number): number {
    if (K + W - 1 <= N) return 1;
    if (K === 0) {
        return 1;
    }
    const dp: number[] = []; // 扔出 n 的可能性
    dp[0] = 1;
    dp[1] = 1 / W;
    for (let i = 2; i < K + W; i++) {
        let t = 0;
        let left = i - W < 0 ? 0 : i - W;
        let right = i - 1 >= K ? K - 1 : i - 1;
        for (let j = left; j <= right; j++) {
            t += dp[j];
        }
        dp[i] = t / W;
    }
    let sum = 0;
    let can = 0;
    for (let i = K; i < dp.length; i++) {

        sum += dp[i];

        if (i > N) {
            can += dp[i];
        }
    }

    return 1 - can / sum;
};


console.log(new21Game2(21, 17, 10))
console.log(new21Game(21, 17, 10))