/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 方法一：递归
var invertTree = function(root) {
    if (root == null) {
        return null;
    }
    var reversedLeft = invertTree(root.right);
    var reversedRight = invertTree(root.left);
    root.left = reversedLeft;
    root.right = reversedRight;
    return root;
};

// 方法二：循环迭代，深度优先（前序遍历）
var invertTree1 = function(root) {
    if (root == null) {
        return null;
    }
    // 使用unshift与pop模拟队列的效果
    var queue = [];
    queue.unshift(root);
    while (queue.length > 0) {
        var curNode = queue.pop();
        var tmp = curNode.left;
        curNode.left = curNode.right;
        curNode.right = tmp;

        if (curNode.left != null) {
            queue.unshift(curNode.left);
        }
        if (curNode.right != null) {
            queue.unshift(curNode.right);
        }
    }
    return root;
};
// var node = {
//     val: 7,
//     left: {
//         val: 6,
//         left: null,
//         right: null
//     },
//     right: {
//         val: 9,
//         left: null,
//         right: null
//     }
// }

var node = {
    val: 9,
    left: {
        val: 4,
        left: null,
        right: null
    },
    right: null
}
invertTree(node)
