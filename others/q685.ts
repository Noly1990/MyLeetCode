// 685. 冗余连接 II https://leetcode-cn.com/problems/redundant-connection-ii/

function findRedundantDirectedConnection(edges: number[][]): number[] {
    let arr: number[][] = []
    let n = edges.length;
    edges.forEach(each => {
        let [a, b] = each;
        if (arr[a]) {
            arr[a].push(b)
        } else {
            arr[a] = [b]
        }
    })
    for (let i = 0; i <= n; i++) {
        if (!arr[i]) arr[i] = []
    }

    function checkRootTree(one: number[]): boolean {
        let index = arr[one[0]].indexOf(one[1]);
        arr[one[0]].splice(index, 1);
        let root = findRoot();
        if (root.length > 1 || root.length === 0) {
            arr[one[0]].push(one[1]);
            return false;
        }
        if (check(root[0])) return true
        arr[one[0]].push(one[1]);
        return false;
    }


    function findRoot() {
        let flatArr = arr.reduce((p, v)=>p.concat(v),[])
        let root = []
        for (let i = 1; i <= n; i++) {
            if (flatArr.indexOf(i)===-1) root.push(i)
        }
        return root;
    }

    function check(root: number) {
        let flag = new Array(n).fill(0);
        let debu = false;
        function gogoR(recent: number) {
            if (debu) return
            flag[recent-1] = 1;
            for (let p of arr[recent]) {
                if (flag[p - 1] === 0) {
                    gogoR(p)
                } else {
                    debu = true;
                }
            }
        }
        gogoR(root)
        return debu ? false : flag.every((v) => v === 1)
    }

    for (let i = edges.length - 1; i >= 0; i--) {
        if (checkRootTree(edges[i])) return edges[i]
    }

    return []
};
// console.log(findRedundantDirectedConnection([[1, 2], [2, 3], [3, 4], [4, 1], [1, 5]]))

// console.log(findRedundantDirectedConnection([[1,2], [1,3], [2,3]]))

console.log(findRedundantDirectedConnection([[2,1],[3,1],[4,2],[1,4]]))