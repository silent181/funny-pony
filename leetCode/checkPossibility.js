/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    var ret = true;
    var adjusted = 0;

    for (var i = 0; i < nums.length; i++) {

        if (nums[i] > nums[i + 1]) {
            var memo = nums[i];
            adjusted += 1;
            
            /**
             * 先将将nums[i]调整为nums[i - 1]，比较nums[i]与nums[i + 1]
             * 如果是第一个元素，直接把第一个元素设为最小值
             */
            if (i === 0) {
                nums[i] = 1;
            } else {
                nums[i] = nums[i - 1];
            }
            /**
             * 若还不能满足升序，再将nums[i + 1]调整为nums[i]
             */
            if (nums[i] > nums[i + 1]) {
                nums[i + 1] = memo;
            }
        }

        if (adjusted > 1) {
            ret = false;
            break;
        }
    }
    return ret;
};