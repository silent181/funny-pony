/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var len = nums.length;
    var l = 0;
    var r = len - 1;
    var m = Math.floor(len / 2);

    if (target <= nums[l]) {
        return 0;
    }

    if (target > nums[r]) {
        return len;
    }

    while (r - l > 1) {
        var mid = nums[m];
        if (mid === target) {
            return m;
        } else {
            if (mid < target) {
                l = m;
                m += Math.floor((r - m) / 2);
            } else {
                r = m;
                m -= Math.floor((m - l) / 2 );
            }
        }
    }
    return r;
};
// @lc code=end

