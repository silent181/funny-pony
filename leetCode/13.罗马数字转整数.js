/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

var couple = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
};

var romanToInt = function(s) {
    var res = 0;
    for (var i = 0; i < s.length; i++) {
        var cur = s[i];
        var next = s[i + 1];
        var combination = cur + next;
        if (couple[combination]) {
            res += couple[combination];
            i += 1;
        } else {
            res += dic[cur];
        }
    }
    return res
};
// @lc code=end

