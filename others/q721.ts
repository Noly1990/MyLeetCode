// 721. 账户合并 https://leetcode-cn.com/problems/accounts-merge/ 
function accountsMerge(accounts: string[][]): string[][] {
    class Person {
        public emailSet: Set<string>;
        public name: string;

        constructor(name: string, emailArr: string[]) {
            this.name = name;
            this.emailSet = new Set(emailArr)
        }

        public check(name: string, emailArr: string[]) {
            if (name !== name) return false;

            for (let one of emailArr) {
                if (this.emailSet.has(one)) {
                    return true
                }
            }

            return false;
        }


        public addOne(emailArr: string[]) {
            emailArr.forEach((per) => {
                this.emailSet.add(per)
            })
        }

        public union(other: Person) {

            other.emailSet.forEach((per) => {
                this.emailSet.add(per)
            })

        }
    }

    let map: Map<string, Person[]> = new Map();

    for (let accout of accounts) {
        let name = accout[0];
        let emailArr = accout.slice(1);

        if (map.has(name)) {
            let temp = []
            let p = new Person(name, emailArr)
            for (let eachPer of map.get(name)) {
                if (eachPer.check(name, emailArr)) {
                    p.union(eachPer)
                } else {
                    temp.push(eachPer)
                }
            }
            temp.push(p)
            map.set(name, temp) 
        } else {
            map.set(name, [new Person(name, emailArr)])
        }
    }

    let ans = [];
    map.forEach((per) => {
        for (let eachPerson of per) {
            ans.push([eachPerson.name, ...Array.from(eachPerson.emailSet).sort()])
        }
    })


    return ans
};

console.log(accountsMerge([["David", "David0@m.co", "David1@m.co"], ["David", "David3@m.co", "David4@m.co"], ["David", "David4@m.co", "David5@m.co"], ["David", "David2@m.co", "David3@m.co"], ["David", "David1@m.co", "David2@m.co"]]))