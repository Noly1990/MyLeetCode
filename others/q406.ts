// 406. 根据身高重建队列 https://leetcode-cn.com/problems/queue-reconstruction-by-height/

function reconstructQueue(people: number[][]): number[][] {
    let temp = [];

    while(people.length > 1) {
        let min = 0;
        for (let i =1;i<people.length;i++) {
            if (people[i][1] === 0) {
                if (people[i][0] < people[min][0]) {
                    min = i;
                }
            }
        }

        temp.push(people.splice(min, 1));

        for (let i=0;i<people.length;i++) {
            if (people[i][0] >=temp[temp.length -1][0]) {
                people[i][1]--;
            }
        }
    }

    temp.push(people[0])
    return temp;
};