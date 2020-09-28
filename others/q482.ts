// 482. 密钥格式化 https://leetcode-cn.com/problems/re-space-lcci/submissions/

function licenseKeyFormatting(S: string, K: number): string {
    const allStr = S.split('-').join('');
    let last;
    let str =''
    for (let i = allStr.length - K; i > 0; i = i - K) {
        str = allStr.substr(i, K).toUpperCase()+'-' + str
        last = i;
    }
    str = allStr.substring(0, last).toUpperCase() + '-' + str;
    return str.slice(0, str.length -1);
};

console.log(licenseKeyFormatting(
    "5F3Z-2e-9-w-1", 4))