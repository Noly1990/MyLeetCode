// 922. 按奇偶排序数组 II https://leetcode-cn.com/problems/sort-array-by-parity-ii/

function sortArrayByParityII(A: number[]): number[] {
        A.sort((a, b) => a % 2 - b % 2);

        let f = true;
        let ans = []
        while(A.length > 0) {
            if (f) ans.push(A.shift())
            else ans.push(A.pop())
            f = !f;
        }
        return ans
};