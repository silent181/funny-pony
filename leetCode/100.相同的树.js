/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true;
    }
    if ((p === null || q === null)) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
// @lc code=end

