/**
 * @param {number[][]} grid
 * @return {number}
 */
/**
 *
输入：[[2]]
输出：10
示例 2：

输入：[[1,2],[3,4]]
输出：34
示例 3：

输入：[[1,0],[0,2]]
输出：16
示例 4：

输入：[[1,1,1],[1,0,1],[1,1,1]]
输出：32
示例 5：

输入：[[2,2,2],[2,1,2],[2,2,2]]
输出：46
 */
var surfaceArea = function(grid) {
    var front = [];
    var aside = [];
    var top = 0;

    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 0) {
                top += 1;
            }
            var cur = grid[i][j];
            if (i === 0) {
                aside[j] = cur;
            }
            if (j === 0) {
                front[i] = cur;
            }
            var nextFront = grid[i][j + 1] || 0;
            var nextAside = grid[i + 1] != null ? grid[i + 1][j] : 0;
            
            var addedFront = nextFront - cur;
            var addedAside = nextAside - cur;
            if (addedFront > 0) {
                front[i] += addedFront;
            }
            if (addedAside > 0) {
                aside[j] += addedAside;
            }
        }
    }
    return (front.reduce(sum) + aside.reduce(sum) + top) * 2;
};

function max() {
    if (Array.isArray(arguments[0])) {
        return Math.max.apply(null, arguments[0]);
    }
    return Math.max.apply(null, arguments);
}

function sum(acc, cur) {
    return acc + cur;
}

// var test = [[1,0],[0,2]]
// surfaceArea(test)

// var test1 = [[1,1,1],[1,0,1],[1,1,1]];
// surfaceArea(test1)