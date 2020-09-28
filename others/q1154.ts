//1154. 一年中的第几天 https://leetcode-cn.com/problems/day-of-the-year/
function dayOfYear(date: string): number {
    // 主要还是闰年的检测，没什么意思，内置函数hack
    // 闰年 4 100 400
    const now = new Date(date);

    const first = new Date(date.slice(0, 4) + '-01-01');

    console.log(now, first)

    return (now.getTime() - first.getTime()) / 1000 / 60 / 60 / 24 + 1;
};

console.log(dayOfYear('2004-01-01'))