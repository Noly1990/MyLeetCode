// 316. 去除重复字母 https://leetcode-cn.com/problems/remove-duplicate-letters/
function removeDuplicateLetters(s: string): string {
    let stack: string[] = [s[0]];
    for (let i = 1; i < s.length; i++) {
        if (stack.indexOf(s[i]) > -1) continue  
        let index = stack.length - 1;
        while (index >= 0 && stack.length > 0 && stack[index].charCodeAt(0) > s[i].charCodeAt(0)) {
            if (s.slice(i).indexOf(stack[index]) > -1) {
                stack.pop();
                index--;
            } else {
                index--;
            }
        }
        stack.push(s[i]);
    }
    return stack.join('')
};