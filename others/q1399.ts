// 1399. 统计最大组的数目 https://leetcode-cn.com/problems/count-largest-group/

function countLargestGroup(n: number): number {

    let bits = new Array(40).fill(0);


    function bitSum(num: number) {
        let sum = 0;

        while (num > 9) {
            let temp = num % 10;
            num = (num - temp) / 10
            sum += temp
        }


        return sum + num;
    }

    for (let i = 1; i <= n; i++) {
        bits[bitSum(i)]++;
    }
    bits.sort((a, b) => b -a)
    let t = 1;
    for (let i=1;i<bits.length;i++) {
        if (bits[i] === bits[0]) t++;
        else break
    }
    return t
};

console.log(countLargestGroup(13))