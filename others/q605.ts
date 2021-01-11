// 605. 种花问题 https://leetcode-cn.com/problems/can-place-flowers/

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    if (n === 0) return true;
    if (flowerbed.length === 0) return false;
    if (flowerbed[0]===0 && n === 1 && flowerbed.length===1) return true;
    let zeroNum = 0;
    let can = 0;
    let f = flowerbed[0] === 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            zeroNum++;
        } else {
            if (f && zeroNum >=2) {
                can += Math.floor(zeroNum / 2);
            }else if (zeroNum >= 3) {
                can += Math.ceil((zeroNum - 2) / 2)
            }
            zeroNum = 0;
            f = false
        }
    }
    if (zeroNum >=2) {
        can +=f?Math.ceil(zeroNum / 2):  Math.floor(zeroNum / 2);
    }
    return can >= n;
};