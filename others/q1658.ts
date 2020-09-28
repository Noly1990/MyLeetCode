// 1658 模式匹配 https://leetcode-cn.com/problems/pattern-matching-lcci/

// "abbbaabbaabbbab"
// "ndnnnnnnnnnnnndnnndnnnnnnnnnnndnnndnnnnnnnnnnnnnnndnnnnnn"

// "baabab"
// "eimmieimmieeimmiee"

function patternMatching(pattern: string, value: string): boolean {
    if (pattern === "" && value === "") return true;
    if (pattern === "" && value.length > 0) return false;
    if (pattern.length === 1) return true;
    if (pattern.length > 1 && value === "") return false;
    if (pattern === 'ab' && value !== "") return true;
    let bPattern = pattern.replace(/a/ig, '');
    let aPattern = pattern.replace(/b/ig, '');
    let bLength = bPattern.length;
    let aLength = aPattern.length;
    const isAFirst = pattern[0] === 'a';
    for (let i = 0; i <= value.length; i++) {
        let one = value.substr(0, i);

        // 第一个是a
        const other = isAFirst ? 'b' : 'a';
        const oneLength = isAFirst ? aLength : bLength;
        const otherLength = isAFirst ? bLength : aLength;
        const firstOther = pattern.indexOf(other);
        if (firstOther > -1) {
            // 有 other
            if ((value.length - one.length * oneLength) % otherLength === 0) {
                // 能整除
                const otherStrLength = (value.length - one.length * oneLength) / otherLength;
                const otherStr = value.substr(one.length * firstOther, otherStrLength);
                const a = isAFirst ? one : otherStr;
                const b = isAFirst ? otherStr : one;
                if (check(a, b, pattern, value)) {
                    return true;
                }
            }

        } else {
            // 没有 other
            if (one.length * oneLength === value.length) {
                const a = isAFirst ? one : '';
                const b = isAFirst ? '' : one;
                if (check(a, b, pattern, value)) {
                    return true;
                }
            }
        }

    }
    return false;
};

function check(a: string, b: string, pattern: string, value: string) {
    let t = ''
    for (const c of pattern) {
        if (c === 'a') {
            t += a;
        }
        if (c === 'b') {
            t += b;
        }
    }
    return t === value;
}

console.log(patternMatching('abbbaabbaabbbab', "ndnnnnnnnnnnnndnnndnnnnnnnnnnndnnndnnnnnnnnnnnnnnndnnnnnn"))

// console.log(patternMatching('baabab', "e immie immie e immie e"))
