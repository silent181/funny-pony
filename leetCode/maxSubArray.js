/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    var ans = nums[0];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        if(sum > 0) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }
        ans = Math.max(ans, sum);
    }
    return ans;

};
// var test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// var test = [1, 2];
var test = [1, 2, -1, -2, 2, 1, -2, 1, 4, -5, 4];
maxSubArray(test)