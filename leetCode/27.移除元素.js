/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.sort((v1, v2) => v1 - v2);
    var j = 0;

    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        if (cur !== val) {
            nums[j] = cur;
            j++;
        }
    }
    return j;
};
// @lc code=end

