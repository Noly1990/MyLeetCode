// 93. 复原IP地址  https://leetcode-cn.com/problems/restore-ip-addresses/

function restoreIpAddresses(s: string): string[] {
    let r: string[][] = [];

    function process(str: string, level: number, arr: string[]) {
        if (level === 1) {
            let head = parseInt(str, 10);
            if (head >= 0 && head <= 255) {
                if (str.length > 1 && str[0] === '0') return
                arr.push(str);
                r.push(arr)
            }
            return
        }
        for (let i = 0; i < Math.min(str.length, 4); i++) {
            let headStr = str.substr(0, i);
            let head = parseInt(headStr, 10);
            if (head >= 0 && head <= 255) {
                if (headStr.length > 1 && headStr[0] === '0') return
                let t = [...arr];
                t.push(headStr);
                process(str.substr(i), level - 1, t);
            }
        }
    }
    
    process(s, 4, []);

    return r.map(v => v.join('.'))
};



console.log(restoreIpAddresses("010010"))