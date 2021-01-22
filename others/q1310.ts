// 1310. 子数组异或查询 https://leetcode-cn.com/problems/xor-queries-of-a-subarray/

function xorQueries(arr: number[], queries: number[][]): number[] {

    let ans = []

    for (let [x, y] of queries) {
        
        let temp = arr[x];

        for (let i = x + 1; i <= y; i++) {
            temp = temp ^ arr[i]
        }

        ans.push(temp)
    }
    return ans;
};