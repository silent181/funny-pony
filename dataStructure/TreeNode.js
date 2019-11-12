var TreeNode = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
}

/**
 * 中序遍历（前序遍历）
 */
var inOrderTraverse = function (node) {
    node.left && inOrderTraverse(node.left);
    console.log(node.val);
    node.right && inOrderTraverse(node.right);
}

/**
 * 先序遍历
 */
var preOrderTraverse = function (node) {
    console.log(node.val);
    node.left && preOrderTraverse(node.left);
    node.right && preOrderTraverse(node.right);
}

/**
 * 后序遍历
 */
var postOrderTraverse = function (node) {
    node.left && postOrderTraverse(node.left);
    node.right && postOrderTraverse(node.right);
    console.log(node.val);
}

inOrderTraverse(TreeNode) // 4 2 5 1 3
preOrderTraverse(TreeNode) // 1 2 4 5 3
postOrderTraverse(TreeNode) // 4 5 2 3 1