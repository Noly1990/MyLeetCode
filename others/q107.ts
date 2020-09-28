import TreeNode from "./TreeNode";

// 107. 二叉树的层次遍历 II https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
function levelOrderBottom(root: TreeNode | null): number[][] {
    let r = [];

    function levelOrder(node: TreeNode | null, deep: number) {
        if (!node) return
        if (r[deep]) {
            r[deep].push(node.val)
        } else {
            r[deep] = [node.val]
        }
        levelOrder(node.left, deep + 1);

        levelOrder(node.right, deep + 1)
    }

    levelOrder(root, 0)

    return r.reverse();
};

function levelOrderBottom2(root: TreeNode | null): number[][] {
    if (!root) return [];

    let r = [];
    let q = [[root]]
    while (q[0].length > 0) {
        let t = [];
        let tr = []
        for (let p of q[0]) {
            tr.push(p.val);
            if (p.left) t.push(p.left)
            if (p.right) t.push(p.right)
        }
        q.unshift(t)
        r.unshift(tr)
    }

    return r;
};




