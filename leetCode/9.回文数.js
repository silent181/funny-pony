/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x >= 0 && x < 10) {
        return true;
    }
    if (x < 0 || x % 10 === 0) {
        return false;
    }
    var reversed = 0;

    while (x > reversed) {
        var remainder = x % 10;
        reversed = 10 * reversed + remainder;

        if (x === reversed || Math.floor(x / 10) === reversed) {
            return true;
        }
        x = Math.floor(x / 10);

    }
    return false;
};

// @lc code=end

