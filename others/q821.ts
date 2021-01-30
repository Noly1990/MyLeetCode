// 821. 字符的最短距离 https://leetcode-cn.com/problems/shortest-distance-to-a-character/
function shortestToChar(S: string, C: string): number[] {
    let ans = new Array(S.length).fill(-1);
    let indexArr = []
    for (let i = 0; i < S.length; i++) {
        if (S[i] === C[0]) {
            ans[i] = 0;
            indexArr.push(i);
        }
    }
    if (indexArr[0] !== 0) {
        let temp = 1;
        for (let i = indexArr[0] - 1; i >= 0; i--) {
            ans[i] = temp;
            temp++;
        }
    }
    if (indexArr[indexArr.length - 1] !== S.length - 1) {
        let temp = 1;
        for (let i = indexArr[indexArr.length - 1] + 1; i < S.length; i++) {
            ans[i] = temp;
            temp++;
        }
    }

    for (let i = 0; i < indexArr.length -1; i++) {
        let left = indexArr[i];
        let right = indexArr[i+1];

        for (let j = left+1;j<right;j++) {
            ans[j] = Math.min(j-left,right -j);
        }
    }


    return ans;
};  