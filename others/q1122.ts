// 1122. 数组的相对排序 https://leetcode-cn.com/problems/relative-sort-array/

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    return arr1.sort((a, b) => {
        let index1 = arr2.indexOf(a);
        let index2 = arr2.indexOf(b);
        if (index1 > -1 && index2 > -1) {
            return index1 = index2;
        } else if (index1 === -1 && index2 === -1) {
            return a-b;
        } else  {
            return 1
        }
    })
};

function relativeSortArray2(arr1: number[], arr2: number[]): number[] {
    const map = new Map()
    const unArr = []
    for (let p of arr1) {
        if (arr2.indexOf(p) > -1) {
            let t = map.get(p)
            if (t) {
                t.push(p)
            } else {
                map.set(p, [p])
            }
        } else {
            unArr.push(p)
        }
    }
    unArr.sort((a,b)=> a-b)
    let r:number[] = []
    for (let p of arr2) {
        r = r.concat(map.get(p))
    }
    return r.concat(unArr)
};