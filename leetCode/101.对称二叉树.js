/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    var queue = [];
    queue.push(root, root);

    while (queue.length) {
        // 每次连续取两个节点进行比较
        var n1 = queue.shift();
        var n2 = queue.shift();
        if (n1 === null && n2 === null) {
            continue;
        }
        if (n1 === null || n2 === null) {
            return false;
        }
        if (n1.val !== n2.val) {
            return false;
        }
        queue.push(n1.left);
        queue.push(n2.right);
        queue.push(n1.right);
        queue.push(n2.left);
    }
    return true;
};

// @lc code=end

