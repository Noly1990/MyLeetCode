// 133. 克隆图 https://leetcode-cn.com/problems/clone-graph/
var cloneGraph = function(node) {
    if (!node) return null;

    let temp = new Node(node.val,[]);
    let arr = [];
    if (node.neighbors.length === 0) return temp;
    arr[temp.val] = temp;
    node.neighbors.forEach(v => temp.neighbors.push(walk(v)))

    function walk(n) {
        if (arr[n.val]!==undefined) return arr[n.val]
        let t = new Node(n.val,[]);
        arr[t.val] = t;
         n.neighbors.forEach(v => t.neighbors.push(walk(v)));
        return t;
    }
    return temp;
};  