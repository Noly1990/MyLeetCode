// 1491. 去掉最低工资和最高工资后的工资平均值 https://leetcode-cn.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
function average(salary: number[]): number {
    let max = salary[0];
    let min = salary[0];
    let sum = 0;
    for (const s of salary) {
        if (s< min) {
            min = s;
        }
        if (s > max) {
            max = s;
        }
        sum += s;
    }
    return ( sum - max -min) / (salary.length -2);
};