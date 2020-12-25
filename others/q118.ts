// 118. 杨辉三角 https://leetcode-cn.com/problems/pascals-triangle/

function generate(numRows: number): number[][] {
    if (numRows === 0) return [];

    if (numRows === 1) return [[1]];
    let ans: number[][] = [[1]];
    for (let i = 2; i <= numRows; i++) {
        let temp = [];
        for (let j = 0; j < i; j++) {
            if (j === 0) {
                temp.push(ans[i - 2][0])
            } else if (j === i - 1) {
                temp.push(ans[i - 2][ans[i - 2].length - 1])
            } else {
                temp.push(ans[i-2][j-1] + ans[i-2][j])
            }
        }
        ans.push(temp)
    }

    return ans;
};