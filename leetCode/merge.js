/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    var p1 = m - 1;
    var p2 = n - 1;
    var cur = m + n - 1;
    while (p2 >= 0 || p1 >= 0) {
        var v1 = nums1[p1];
        var v2 = nums2[p2];

        if (v1 == null) {
            nums1[cur] = v2;
            p2--;
            cur--;
            continue
        }
        if (v2 == null) {
            nums1[cur] = v1;
            p1--;
            cur--;
            continue;
        }

        if (v1 > v2) {
            nums1[cur] = v1;
            p1--;
        } else {
            nums1[cur] = v2;
            p2--;
        }
        cur--
    }
};
