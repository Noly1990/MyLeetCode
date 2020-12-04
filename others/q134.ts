// 134. 加油站 https://leetcode-cn.com/problems/gas-station/

function canCompleteCircuit(gas: number[], cost: number[]): number {
    let len = gas.length;
    let total = 0;
    let cTotal = 0;
    let start = 0;


    for (let i = 0; i < len; i++) {
        let temp = gas[i] - cost[i];
        total+=temp
        cTotal+=temp;

        if (cTotal  < 0) {
            start = i + 1;
            cTotal  = 0;
        }
    }
    if (total=0) return -1;

    return start;
};