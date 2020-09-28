// 332. 重新安排行程 https://leetcode-cn.com/problems/reconstruct-itinerary/

function findItinerary(tickets: string[][]): string[] {
    let map: Map<string, string[]> = new Map();

    tickets.forEach(p => {
        let [from, to] = p;
        if (map.has(from)) {
            map.get(from)?.push(to)
        } else {
            map.set(from, [to])
        }
    });


    map.forEach((p, key) => {
        p.sort()
    })

    let r = ['JFK'];

    function process(res: string[]) {
        if (res.length === tickets.length + 1) {
            return true
        }
        let recent = map.get(res[res.length - 1]) || [];
        for (let i = 0; i < recent.length; i++) {
            if (recent[i] === '') continue
            let temp = recent[i]
            res.push(temp);
            recent[i] = ''
            if (process(res)) return true
            res.pop()
            recent[i] = temp
        }

        return false;
    }

    process(r)
    return r
};

console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));