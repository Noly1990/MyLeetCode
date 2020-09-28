// 1525. 字符串的好分割数目 https://leetcode-cn.com/problems/number-of-good-ways-to-split-a-string/

function numSplits(s: string): number {
    if (s.length < 2) return 0;
    if (s.length === 2) return 1;


    class SplitHelper {
        public charArr: number[];
        public aCode: number;
        public typeNum: number;
        constructor(str: string) {
            this.charArr = new Array(26).fill(0);
            this.aCode = 'a'.charCodeAt(0);
            this.typeNum = 0;
            for (let c of str) {
                if (this.charArr[c.charCodeAt(0) - this.aCode] === 0) this.typeNum++;
                this.charArr[c.charCodeAt(0) - this.aCode]++;
            }
        }

        public addChar(c: string) {
            if (this.charArr[c.charCodeAt(0) - this.aCode] === 0) this.typeNum++;
            this.charArr[c.charCodeAt(0) - this.aCode]++;
        }

        public deleteChar(c: string) {
            if (this.charArr[c.charCodeAt(0) - this.aCode] === 1) this.typeNum--;
            this.charArr[c.charCodeAt(0) - this.aCode]--;
        }

    }

    let leftHelper = new SplitHelper(s[0])
    let rightHelper = new SplitHelper(s.substr(1))
    let total = leftHelper.typeNum === rightHelper.typeNum?1:0;
    for (let i =1;i<s.length;i++) {
        leftHelper.addChar(s[i]);
        rightHelper.deleteChar(s[i]);
        total += leftHelper.typeNum === rightHelper.typeNum?1:0;
    }
    return total;
};