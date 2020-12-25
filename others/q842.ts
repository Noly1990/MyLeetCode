// 842. 将数组拆分成斐波那契序列 https://leetcode-cn.com/problems/split-array-into-fibonacci-sequence/

function splitIntoFibonacci(S: string): number[] {
    let len = S.length;

    function process(A:string, B:string) {
        let tans:number[] = [];

        let tempStr = A +  B;
        if (tempStr === S) return tans
        let AN = parseInt(A, 10);
        let BN = parseInt(B, 10);
        tans.push(AN)
        tans.push(BN)
        while(tempStr.length < S.length) {
            if (tempStr !== S.slice(0, tempStr.length)) return [];
            let sum = AN + BN;
            if (sum >2147483647) return []
            tempStr = tempStr + `${sum}`;
            tans.push(sum);
            AN = BN;
            BN = sum;
        }
        if (tempStr === S) return tans;
        return []
    }

    for (let i=1;i<=Math.floor(len /2);i++) {
        for (let j =1;j<=Math.floor(len /2);j++) {
            let str1 = S.slice(0, i);
            let str2 = S.slice(i, i+j);
            if (str1[0] === '0' && str1!=='0' || str2[0]==='0' && str2!=='0') continue
            let temp = process(str1, str2);
            if (temp.length > 0) return temp
        }
    } 

    return []
};