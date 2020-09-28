// 1696 面试题 16.06. 最小差  https://leetcode-cn.com/problems/smallest-difference-lcci/


function smallestDifference(a: number[], b: number[]): number {
    let min = Math.abs(a[0] - b[0]);
    const lenB = b.length;
    b.sort((x, y) => x - y);
    for (let i = 0; i < a.length; i++) {
        let index = findIndex(a[i]);
        min = Math.min(min, Math.abs(a[i] - b[index[0]]), Math.abs(a[i] - b[index[1]]));
        if (min === 0) return 0
    }

    function findIndex(num: number): [number, number] {
        if (num <= b[0]) return [0, 0];
        if (num >= b[lenB - 1]) return [lenB - 1, lenB - 1];
        let left = 0;
        let right = lenB - 1;
        let mid = Math.floor((left + right) / 2);
        while (left !== right) {
            if (num < b[mid]) {
                if (mid === left + 1) return [left, mid];
                right = mid;
            } else if (num > b[mid]) {
                if (mid === right - 1) return [mid, right];
                left = mid
            } else {
                return [mid, mid];
            }
            mid = Math.floor((left + right) / 2);
        }
    }
    return min;
};

console.log(smallestDifference([0], [2147483647]))