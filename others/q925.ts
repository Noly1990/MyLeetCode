// 925. 长按键入 https://leetcode-cn.com/problems/long-pressed-name/

function isLongPressedName(name: string, typed: string): boolean {
    if (name === '' && typed==='') return true;
    if (name === '' && typed !== '') return false;
    if (name !== '' && typed === '') return false;

    function split(str: string) {
        let index = 0;
        let arr = []
         let t = str[index];
         let total = 0;
        while(index < str.length) {
            if (str[index] === t) {
                total++;
            } else {
                arr.push(t.repeat(total))
                t = str[index]
                total= 1;
            }
            index++;
        }
        arr.push(t.repeat(total))
        return arr;
    }
    let a = split(name);
    let b = split(typed);
    if (a.length!==b.length) return false;
    for (let i=0;i<a.length;i++) {
        if (b[i][0] !== a[i][0]) return false;
        if (b[i].length < a[i].length) return false;
    }
    return true;
 };