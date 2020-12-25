// 49. 字母异位词分组 https://leetcode-cn.com/problems/group-anagrams/

function groupAnagrams(strs: string[]): string[][] {
    function convert(str: string) {
        let temp = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (let s of str) {
            temp[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return temp;
    }

    function same(A: number[], B: number[]) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== B[i]) return false
        }
        return true;
    }

    let keys: number[][] = [];
    let ans: string[][] = [];
    for (let i = 0; i < strs.length; i++) {
        let tt = convert(strs[i]);
        let add = true;
        for (let j = 0; j < keys.length; j++) {
            if (same(keys[j], tt)) {
                ans[j].push(strs[i])
                add = false;
                break;
            }

        }
        if (add) {
            keys.push(tt);
            ans.push([strs[i]]);
        }
    }

    return ans
};