// 140. 单词拆分 II  https://leetcode-cn.com/problems/word-break-ii/

function wordBreak(s: string, wordDict: string[]): string[] {
    const d = new Set(wordDict)
    const n = s.length
    const store: string[][][] = Array(n).concat([[[]]])
    function process(i: number) {
        if (store[i]) {
            return store[i]
        }
        store[i] = []
        for (let j = i + 1; j <= n; ++j) {
            let w = s.slice(i, j)
            if (d.has(w)) {
                for (const ws of process(j)) {
                    store[i].push([w].concat(ws))
                }
            }
        }
        return store[i]
    }
    return process(0).map(ws => ws.join(' '))

};