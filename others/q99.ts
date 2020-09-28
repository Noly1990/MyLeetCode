// 99. 恢复二叉搜索树 https://leetcode-cn.com/problems/recover-binary-search-tree/

import TreeNode from "./TreeNode";

function recoverTree(root: TreeNode | null): void {
    if (!root) return;
    let midNode: TreeNode[] = [];
    let r:number[] = [];
    let flag = 0;
    function midOrder(node: TreeNode | null) {
        if (flag >=2) return
        if (!node) return;
        if (node.left) {
            midOrder(node.left);
        }
        let len = midNode.push(node);
        if (len >1) {
            if (midNode[len -1].val < midNode[len - 2].val) {
                r.push(flag ===0? len - 2 : len-1);
                flag++;
            }
        }
        if (node.right) {
            midOrder(node.right);
        }
    }
    midOrder(root);
    

    if (r.length === 1) {
        r.push(r[0] + 1)
    }

    let [index1, index2] = r;
    let temp = midNode[index1].val;
    midNode[index1].val = midNode[index2].val;
    midNode[index2].val = temp;
};
console.log(recoverTree(new TreeNode(3, new TreeNode(1, null, null), new TreeNode(4, new TreeNode(2, null, null), null))));
