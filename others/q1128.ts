// 1128. 等价多米诺骨牌对的数量 https://leetcode-cn.com/problems/number-of-equivalent-domino-pairs/

function numEquivDominoPairs(dominoes: number[][]): number {


    function convertToNum(doArr: number[]) {
        return doArr[0] <= doArr[1] ? doArr[0] * 10 + doArr[1] : doArr[1] * 10 + doArr[0]
    }

    let temp = new Array(100).fill(0);
    let ans = 0;
    for (let per of dominoes) {
        let num = convertToNum(per);
        temp[num]++;
        if (temp[num] > 1) {
            ans = temp[num] * (temp[num] - 1) / 2
        }
    }

    return ans
};