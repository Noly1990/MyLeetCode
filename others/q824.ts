//824. 山羊拉丁文 https://leetcode-cn.com/problems/goat-latin/
function toGoatLatin(S: string): string {
    const wordArr = S.split(' ');
    return wordArr.map((v, i) => convertWord(v, i)).join(' ');
};

function convertWord(s: string, index: number) {
    if (s[0] === 'a' || s[0] === 'A'
        || s[0] === 'e' || s[0] === 'E'
        || s[0] === 'I' || s[0] === 'i'
        || s[0] === 'o' || s[0] === 'O'
        || s[0] === 'u' || s[0] === 'U') {
        return s + 'ma' + 'a'.repeat(index + 1);
    } else {
        return s.substring(1) + s[0] + 'ma' + 'a'.repeat(index + 1);
    }
}