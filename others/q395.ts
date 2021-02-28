// 395. 至少有K个重复字符的最长子串 https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/

function longestSubstring(s: string, k: number): number {
    if (k === 1) return s.length;
    let max = 0;

    class Worker {
        private charArr: number[];
        private allSet: Set<string>;
        private fullSet: Set<string>;
        public total: number
        constructor() {
            this.total = 0;
            this.charArr = new Array(26).fill(0);
            this.allSet = new Set()
            this.fullSet = new Set();
        }

        public addChar(char: string) {
            this.total++
            this.allSet.add(char)
            let charCode = char.charCodeAt(0) - 97;
            this.charArr[charCode]++
            if (this.fullSet.has(char)) return
            if (this.charArr[charCode] >= k) {
                this.fullSet.add(char)
            }

        }


        public removeChar(char) {
            this.total--
            let charCode = char.charCodeAt(0) - 97;
            this.charArr[charCode]--
            if (this.charArr[charCode] === 0) {
                this.allSet.delete(char)
                return
            }
            if (this.charArr[charCode] < k) {
                this.fullSet.delete(char)
            }
        }


        public isOk() {
            return this.allSet.size === this.fullSet.size;
        }


        public copyOne() {
            let temp = new Worker();
            temp.charArr = [...this.charArr]
            temp.total = this.total;
            temp.allSet = new Set(this.allSet);
            temp.fullSet = new Set(this.fullSet);
            return temp;
        }
    }

    let worker = new Worker();



    for (let i = 0; i < s.length; i++) {
        worker.addChar(s[i]);
        if (worker.isOk()) {
            if (worker.total > max) {
                max = worker.total
            }
        }
        let tempWorker = worker.copyOne()
        for (let j = 0; j < i - max; j++) {
            tempWorker.removeChar(s[j]);
            if (tempWorker.isOk()) {
                if (tempWorker.total > max) {
                    max = tempWorker.total
                }
            }
        }
    }

    return max;
};