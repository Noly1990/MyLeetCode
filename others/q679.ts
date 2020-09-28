// 679. 24 点游戏  https://leetcode-cn.com/problems/24-game/

function judgePoint24(numArr: number[]) {
    if (numArr.length === 1 && numArr[0].toFixed(3) === '24.000') return true;
    if (numArr.length === 2) {
        if (judgePoint24([numArr[0] + numArr[1]])) return true;
        if (judgePoint24([numArr[0] - numArr[1]])) return true;
        if (judgePoint24([numArr[0] * numArr[1]])) return true;
        if (judgePoint24([numArr[0] / numArr[1]])) return true;
        if (judgePoint24([numArr[1] - numArr[0]])) return true;
        if (judgePoint24([numArr[1] / numArr[0]])) return true;
    }
    if (numArr.length === 3) {
        if (judgePoint24([numArr[0] + numArr[1], numArr[2]])) return true;
        if (judgePoint24([numArr[0] - numArr[1], numArr[2]])) return true;
        if (judgePoint24([numArr[0] * numArr[1], numArr[2]])) return true;
        if (judgePoint24([numArr[0] / numArr[1], numArr[2]])) return true;
        if (judgePoint24([numArr[1] - numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[1] / numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[0] + numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[0] - numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[0] * numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[0] / numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[2] - numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[2] / numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[2] + numArr[1], numArr[0]])) return true;
        if (judgePoint24([numArr[2] - numArr[1], numArr[0]])) return true;
        if (judgePoint24([numArr[2] * numArr[1], numArr[0]])) return true;
        if (judgePoint24([numArr[2] / numArr[1], numArr[0]])) return true;
        if (judgePoint24([numArr[1] - numArr[2], numArr[0]])) return true;
        if (judgePoint24([numArr[1] / numArr[2], numArr[0]])) return true;
    }

    if (numArr.length === 4) {
        if (judgePoint24([numArr[0] + numArr[1], numArr[2], numArr[3]])) return true;
        if (judgePoint24([numArr[0] - numArr[1], numArr[2], numArr[3]])) return true;
        if (judgePoint24([numArr[0] * numArr[1], numArr[2], numArr[3]])) return true;
        if (judgePoint24([numArr[0] / numArr[1], numArr[2], numArr[3]])) return true;
        if (judgePoint24([numArr[1] - numArr[0], numArr[2], numArr[3]])) return true;
        if (judgePoint24([numArr[1] / numArr[0], numArr[2], numArr[3]])) return true;
        if (judgePoint24([numArr[0] + numArr[2], numArr[1], numArr[3]])) return true;
        if (judgePoint24([numArr[0] - numArr[2], numArr[1], numArr[3]])) return true;
        if (judgePoint24([numArr[0] * numArr[2], numArr[1], numArr[3]])) return true;
        if (judgePoint24([numArr[0] / numArr[2], numArr[1], numArr[3]])) return true;
        if (judgePoint24([numArr[2] - numArr[0], numArr[1], numArr[3]])) return true;
        if (judgePoint24([numArr[2] / numArr[0], numArr[1], numArr[3]])) return true;
        if (judgePoint24([numArr[0] + numArr[3], numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[0] - numArr[3], numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[0] * numArr[3], numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[0] / numArr[3], numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[3] - numArr[0], numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[3] / numArr[0], numArr[2], numArr[1]])) return true;
        if (judgePoint24([numArr[2] + numArr[1], numArr[0], numArr[3]])) return true;
        if (judgePoint24([numArr[2] - numArr[1], numArr[0], numArr[3]])) return true;
        if (judgePoint24([numArr[2] * numArr[1], numArr[0], numArr[3]])) return true;
        if (judgePoint24([numArr[2] / numArr[1], numArr[0], numArr[3]])) return true;
        if (judgePoint24([numArr[1] - numArr[2], numArr[0], numArr[3]])) return true;
        if (judgePoint24([numArr[1] / numArr[2], numArr[0], numArr[3]])) return true;
        if (judgePoint24([numArr[3] + numArr[1], numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[3] - numArr[1], numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[3] * numArr[1], numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[3] / numArr[1], numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[1] - numArr[3], numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[1] / numArr[3], numArr[0], numArr[2]])) return true;
        if (judgePoint24([numArr[3] + numArr[2], numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[3] - numArr[2], numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[3] * numArr[2], numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[3] / numArr[2], numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[2] - numArr[3], numArr[0], numArr[1]])) return true;
        if (judgePoint24([numArr[2] / numArr[3], numArr[0], numArr[1]])) return true;
    }


    return false;
}


// 6 / (1 - 3 / 4)

console.log(judgePoint24([3, 4, 6, 7]))

console.log(judgePoint24([9, 1, 2, 6]))

console.log(judgePoint24([8, 4, 2, 4]))

console.log(judgePoint24([8, 8, 8, 4]))