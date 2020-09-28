// 753. 破解保险箱  https://leetcode-cn.com/problems/cracking-the-safe/

function crackSafe(n: number, k: number): string {
    if (k === 1) return '0'.repeat(n);
    if (n === 1 && k === 2) return '01';
    let arr:string[] = []
    const set: Set<string> = new Set()
    function dfs(node: string) {
        for (let i = 0; i<k; i++) {
            let l = node + i;
            if (!set.has(l)) {
                set.add(l);
                dfs(l.substr(1))
                arr.push(i.toString())
            }
        }
    }
    dfs('0'.repeat(n - 1))
    return arr.join('') + '0'.repeat(n-1);
}




console.log(crackSafe(4, 3))