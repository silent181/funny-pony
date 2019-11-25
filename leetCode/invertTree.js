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
var invertTree1= function(root) {
    if (root == null) {
        return null;
    }
    var reversedLeft = invertTree(root.right);
    var reversedRight = invertTree(root.left);
    root.left = reversedLeft;
    root.right = reversedRight;
    return root;
};

// 方法二：循环迭代，深度优先（先序遍历）
var invertTree = function(root) {
    // debugger
    if (root == null) {
        return null;
    }
    /**
     * 使用队列可实现广度优先遍历,
     * 使用栈可实现深度优先遍历
     */
    var queue = [];
    queue.push(root);
    while (queue.length > 0) {
        var curNode = queue.pop();
        console.log(curNode.val);

        if (curNode.right != null) {
            queue.push(curNode.right);
        }
        if (curNode.left != null) {
            queue.push(curNode.left);
        }

 
        var tmp = curNode.left;
        curNode.left = curNode.right;
        curNode.right = tmp;
    }
    return root;
};
var node = {
    val: 7,
    left: {
        val: 6,
        left: {
            val: 5,
            left: {
                val: 1,
                left: null,
                right: null
            },
            right: {
                val: 2,
                left: null,
                right: null
            }
        },
        right: {
            val: 3,
            left: null,
            right: null
        }
    },
    right: {
        val: 9,
        left: {
            val: 7,
            left: {
                val: 10,
                left: null,
                right: null
            },
            right: null
        },
        right: {
            val: 4,
            left: null,
            right: null
        }
    }
}

var n1 = {
    val: 7,
    left: {
        val: 6,
        left: {
            val: 5,
            left: null,
            right: null
        }
    },
    right: {
        val: 9,
        left: null,
        right: null
    }
}

// var node = {
//     val: 9,
//     left: {
//         val: 4,
//         left: null,
//         right: null
//     },
//     right: null
// }
invertTree(node)
