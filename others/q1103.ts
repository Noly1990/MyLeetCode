// 1103. 分糖果 II  https://leetcode-cn.com/problems/distribute-candies-to-people/

function distributeCandies(candies: number, num_people: number): number[] {
    const arr = new Array(num_people).fill(0);
    let n = 1;
    let index = 0;
    while (candies > 0) {
        if (candies > n) {
            candies -= n;
            arr[index] += n;
            if (index === num_people - 1) {
                index = 0;
            } else {
                index++;
            }
        } else {
            arr[index] += candies;
            candies = 0;
        }
        n++;
    }
    return arr;
};

console.log(distributeCandies(10,3))