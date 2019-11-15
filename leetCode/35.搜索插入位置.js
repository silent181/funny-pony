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


    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        if (target <= cur) {
            return i;
        }
    }
    return nums.length;
};
// @lc code=end

