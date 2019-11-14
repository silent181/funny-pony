/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return '';
    }

    var prefix = strs[0];
    for (var i = 1; i < strs.length; i++) {
        var cur = strs[i];
        while (cur.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, prefix.length - 1)
        }
    }
    return prefix;
};
// @lc code=end

