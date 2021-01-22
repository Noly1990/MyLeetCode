// 947. 移除最多的同行或同列石头 https://leetcode-cn.com/problems/most-stones-removed-with-same-row-or-column/


function removeStones(stones: number[][]): number {


    let checkers: XYContainer[] = [];

    class XYContainer {
        public xSet: Set<number>;
        public ySet: Set<number>;

        public num: number;
        constructor(x: number, y: number) {
            this.xSet = new Set([x]);
            this.ySet = new Set([y]);
            this.num = 1;
        }

        public check(x: number, y: number) {
            if (this.xSet.has(x)) {
                return true;
            }
            if (this.ySet.has(y)) {
                return true
            }
            return false
        }

        public union(other: XYContainer) {
            this.xSet = new Set([...this.xSet, ...other.xSet])
            this.ySet = new Set([...this.ySet, ...other.ySet])
            this.num = this.num + other.num
        }

    }




    for (let [x, y] of stones) {
        let nC = new XYContainer(x, y);
        let temp = []
        for (let checker of checkers) {
            if (checker.check(x, y)) {
                nC.union(checker)
            } else {
                temp.push(checker)
            }
        }

        temp.push(nC)
        checkers = temp
    }



    return stones.length - checkers.length;
};

console.log(removeStones([[0, 0], [0, 1], [1, 0], [1, 2], [2, 1], [2, 2]]))