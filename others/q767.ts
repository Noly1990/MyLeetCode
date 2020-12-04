// 767. 重构字符串 https://leetcode-cn.com/problems/reorganize-string/

function reorganizeString(S: string): string {
    if (S.length<= 1) return S;
    if (S.length === 2) return S[0] === S[1]?'':S;
    function getNum(str: string):number {
        return str.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    let arr = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],];
    for (let i=0;i<S.length;i++) {
        arr[getNum(S[i])].push(S[i]);
    }

    let ans = [];

    while(ans.length < S.length) {
        
        arr = arr.filter((v)=> {
            return v.length >0
        } );
    
        arr.sort((a, b) => b.length - a.length);


        if (S.length - ans.length === 1) {
            ans.push(arr[0].pop());

            if (ans[ans.length -1] !== ans[ans.length-2]) return ans.join('');
            return ''
        }

        let one = arr[0].pop();

        let two = arr[arr.length -1].pop();

        if (one === two) return '';

        ans.push(one);
        ans.push(two)
    }

    return ans.join('')
};

console.log(reorganizeString('aabbccddfegruedkae'))