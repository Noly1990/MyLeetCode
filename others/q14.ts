// 14. 最长公共前缀 https://leetcode-cn.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {

    if (strs.length === 0) return ''

    if (strs[0].length === 0) return ''

    strs.sort((a, b) => a.length - b.length);

    let index = 0;

    while(index< strs[0].length) {
        let tar = strs[0][index]
        for (let i=1;i<strs.length;i++) {
            if (strs[i][index] !== tar) return strs[0].substring(0, index)
        }

        index++;
    }

    return strs[0];

};