/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.nums = nums.sort((v1, v2) => v2 - v1);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    var nums = this.nums;
    var k = this.k;

    if (!nums.length) {
        nums.push(val);
        return val;
    }
    
    for (var i = 0; i < nums.length; i++) {
        var cur = nums[i];
        if (val >= cur) {
            nums.splice(i, 0, val);
            break;
        } else if (i === nums.length - 1) {
            // 若遍历到最后一位时val仍然是最小值，则直接添加到数组末位
            nums.push(val);
        }
    }
    return nums[k - 1]
};
var arr = [-2]
var k = 1;
var kth = new KthLargest(k, arr)

kth.add(-3);
kth.add(0);
kth.add(2);
kth.add(-1);
kth.add(4);
/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

