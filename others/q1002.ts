// 1002. 查找常用字符 https://leetcode-cn.com/problems/find-common-characters/

function commonChars(A: string[]): string[] {



    function countEach(str: string) {
        let map:Map<string, number> = new Map();
        for (let c of str) {
            if (map.has(c)) {
                map.set(c, map.get(c) + 1)
            } else {
                map.set(c, 1);
            }
        }
        return map;
    }

    let mapArr = A.map(v => countEach(v));
    

    let answer = []

    for (let one = 'a'.charCodeAt(0);one <= 'z'.charCodeAt(0);one++) {
        let char = String.fromCharCode(one);
        let flag = true;
        let min = Number.MAX_SAFE_INTEGER;
        for (let per of mapArr) {
            if (!per.has(char)) {
                flag = false;
                break;
            } else {
                let temp = per.get(char)
                if (temp < min) {
                    min = temp
                }
            }
        }
        if (flag) {
            for (let i=0;i<min;i++) {
                answer.push(char);
            }
        }
    }
    return answer
};

console.log(commonChars(["bella","label","roller"]))