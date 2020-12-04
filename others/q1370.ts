// 1370. 上升下降字符串 https://leetcode-cn.com/problems/increasing-decreasing-string/

function sortString(s: string): string {
    let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    let strArr = s.split('');

    strArr.forEach((v) => {
       arr[v.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    })

    let ans = '';
    let up = true;
    while(ans.length < s.length) {
        if (up) {
            for (let i=0;i<26;i++) {
                if (arr[i] > 0) {
                    arr[i] --;
                    ans+=String.fromCharCode('a'.charCodeAt(0) + i)
                }
            }
        } else {
            for (let i=25;i>=0;i--) {
                if (arr[i] > 0) {
                    arr[i] --;
                    ans+=String.fromCharCode('a'.charCodeAt(0) + i)
                }
            }
        }

        up = !up;
    }

    return ans;

};