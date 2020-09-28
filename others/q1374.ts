//1374. 生成每种字符都是奇数个的字符串 https://leetcode-cn.com/problems/generate-a-string-with-characters-that-have-odd-counts/

function generateTheString(n: number): string {
    if (n===1) return 'x';
    if (n===2) return 'x'+'y';
    if (n % 2 === 0) {
        return 'x' + 'y'.repeat(n - 1);
    } else {
        return 'x' + 'y' + 'z'.repeat(n - 2);
    }
};