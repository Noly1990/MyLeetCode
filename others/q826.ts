// 826. 安排工作以达到最大收益 https://leetcode-cn.com/problems/most-profit-assigning-work/

function maxProfitAssignment(difficulty: number[], profit: number[], worker: number[]): number {
    worker.sort((a, b) => a - b);

    let part = difficulty.map((v, i) => [v, profit[i]]);
    part.sort((a, b) => a[0] - b[0]);
    let ans = 0;
    let maxProfit = 0;

    let partIndex = 0;
    let workIndex = 0;
    while (workIndex < worker.length && partIndex < part.length) {
        if (part[partIndex][0] > worker[workIndex]) {
            ans += maxProfit;
            console.log(ans)
            workIndex++;
        } else {
            if (part[partIndex][1] > maxProfit) {
                maxProfit = part[partIndex][1];
            }
            partIndex++;
        }


    }
    if (workIndex !== worker.length) {
        ans += (worker.length - workIndex) * maxProfit
    }


    return ans;
};

console.log(maxProfitAssignment([2, 4, 6, 8, 10],
    [10, 20, 30, 40, 50],
    [4, 5, 6, 7]))
console.log(maxProfitAssignment([85, 47, 57],
    [24, 66, 99],
    [40, 25, 25]))