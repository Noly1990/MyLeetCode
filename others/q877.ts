// 877. 石子游戏 https://leetcode-cn.com/problems/stone-game/

function stoneGame(piles: number[]): boolean {
    if (piles.length === 2) return true;
    let diff = 0;
    while (piles.length > 0) {
        let len = piles.length;
        let leftDiff = Math.min(piles[0] - piles[1], piles[0] - piles[len - 1]);
        let rightDiff = Math.min(piles[len - 1] - piles[len - 2], piles[len - 1] - piles[0]);
    }
};