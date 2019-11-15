/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var len = digits.length;
    var carry = 0;
    for (var i = len - 1; i >= 0; i--) {

        if (i === len - 1) {
            digits[i] += 1;
        }

        digits[i] += carry;
        if (digits[i] === 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0;
        }

    }

    return carry === 1 ? [1].concat(digits) : digits;
};
plusOne([1,2,3])
// @lc code=end