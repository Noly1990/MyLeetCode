// 1047. 删除字符串中的所有相邻重复项 https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/submissions/

function removeDuplicates(S: string): string {
    let sArr = S.split('');


    let stack = [];



    for (let i=0;i<sArr.length;i++) {
        if (stack.length === 0) {
            stack.push(sArr[i])
        } else {
            if (stack[stack.length -1] === sArr[i]) {
                stack.pop()
                continue
            } else {
                stack.push(sArr[i])
            }
        }
    }
    return stack.join('')


};