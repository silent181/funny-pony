/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 0;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j += 1;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};
// @lc code=end

