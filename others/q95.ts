// 95. 不同的二叉搜索树 II https://leetcode-cn.com/problems/unique-binary-search-trees-ii/

import TreeNode from "./TreeNode";

function generateTrees(n: number): Array<TreeNode | null> {

    function copyTreeArr(nodes: TreeNode[], addition: number) {
        let r = [];
        for (const n of nodes) {
            r.push(copyTree(n, addition))
        }
        return r;
    }


    function copyTree(node: TreeNode, addition: number) {
        let n = new TreeNode(node.val + addition);
        if (node.left) {
            n.left = copyTree(node.left, addition)
        }
        if (node.right) {
            n.right = copyTree(node.right, addition)
        }
        return n;
    }
    const dp: any[][] = [];
    if (n===0) return [];
    dp[0] = [null]
    dp[1] = [new TreeNode(1),];
    dp[2] = [new TreeNode(1, null, new TreeNode(2)), new TreeNode(2, new TreeNode(1), null)];
    if (n >= 3) {
        for (let i = 3; i <= 8; i++) {
            dp[i] = [];
            for (let head = 1; head <= i; head++) {
                const leftArr = dp[head - 1];
                const rightArr = i - head === 0 ? dp[0] : copyTreeArr(dp[i - head], head);
                for (let left of leftArr) {
                    for (let right of rightArr) {
                        const headNode = new TreeNode(head);
                        headNode.left = left;
                        headNode.right = right;
                        dp[i].push(headNode)
                    }
                }
            }
        }
    }
    return dp[n]
};

console.log(generateTrees(3))