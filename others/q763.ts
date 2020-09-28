// 763. 划分字母区间 https://leetcode-cn.com/problems/partition-labels/

function partitionLabels(S: string): number[] {
    const charMap = new Map();
    for (let i = 0; i < S.length; i++) {
        let t = charMap.get(S[i])
        if (t) {
            let [min, max] = t;
            if (i > max) {
                max = i;
            }
            charMap.set(S[i], [min, max])
        } else {
            charMap.set(S[i], [i, i])
        }
    }
    const arr = new Array(S.length).fill(-1);
    
    charMap.forEach((p, k) => {
        let [min, max] = p;
        for (let i = min; i <= max; i++) {
            arr[i]++;
        }
    })
    console.log(arr.join('').split('0'))
    return arr.slice(1, arr.length - 1).join('').split('00').map(v => v.length + 2)
};

console.log(partitionLabels("ababcbacadefegdehijhklij"));

console.log(partitionLabels("caedbdedda"))