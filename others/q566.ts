// 566. 重塑矩阵 https://leetcode-cn.com/problems/reshape-the-matrix/

function matrixReshape(nums: number[][], r: number, c: number): number[][] {
    let m = nums.length;
    let n = nums[0].length;
    if (m * n !== r * c) return nums;

    let newArr = new Array(r).fill([]).map(() => new Array(c).fill(0));
    
    for (let i=0;i<m;i++) {
        for (let j =0;j<n;j++) {
            let index =i *n + j;
            let y= index % c;
            let x = (index - y) / c
            newArr[x][y] = nums[i][j]
        }
    }

    return newArr
};