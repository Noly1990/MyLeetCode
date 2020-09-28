// 639 解码方法 2  https://leetcode-cn.com/problems/decode-ways-ii/


function numDecodings(s: string): number {
    if (s[0]==='0') return 0;
    let flag = false;
    function process(index: number) {
        if (flag) return 0;
        if (index === 0) {
            switch (s[index]) {
                case '*':
                    return 9;
                    break;
                case '0':
                    return 0;
                default:
                    return 1;
                    break;
            }
        }
        switch (s[index -1] + s[index]) {
            case '**':
                return process(index -1) * 9 + process(index -2) * 15;
                break;
        
            default:
                break;
        }
    }

    return process(s.length - 1)
};