// 424. 替换后的最长重复字符 https://leetcode-cn.com/problems/longest-repeating-character-replacement/

function characterReplacement(s: string, k: number): number {


    let flagArr = new Array(26).fill(0);
    let len = s.length;
    let max = 0;
    let left = 0;
    let right = 0;
    function charCode(char: string) {
        return char.charCodeAt(0) - 'A'.charCodeAt(0);
    }

    while(right < len) {
        flagArr[charCode(s[right])] ++;
        max = Math.max(max, flagArr[charCode(s[right])]);

        if (right - left + 1 -max > k) {
            flagArr[charCode(s[left])]--
            left++
        }


        right++;
    }
    return right - left;
};