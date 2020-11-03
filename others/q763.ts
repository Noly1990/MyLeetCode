// 763. 划分字母区间 https://leetcode-cn.com/problems/partition-labels/

function partitionLabels(S: string): number[] {
    let last = new Map();
    for (let i = 0; i < S.length; i++) {
        last.set(S[i], i)
    }
    let partition = [];
    let start = 0, end = 0;
    for (let i = 0; i < S.length; i++) {
        end = Math.max(end, last.get(S[i]));
        if (i == end) {
            partition.push(end - start + 1);
            start = end + 1;
        }
    }
    return partition;

};

// console.log(partitionLabels("ababcbacadefegdehijhklij"));

// console.log(partitionLabels("caedbdedda"))

console.log(partitionLabels("dccccbaabe"))