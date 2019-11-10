/**
 * 斐波那契数列前n项和
 * @param {number} n
 * @return {number}
 */
var memoize = {};

var climbStairs = function(n) {
    if (memoize[n]) {
        return memoize[n];
    }
    
    if (n === 1) {
        memoize[n] = 1;
        return 1;
    }
    
    if (n === 2) {
        memoize[n] = 2;
        return 2
    }
    var ret = climbStairs(n - 1) + climbStairs(n - 2);
    memoize[n] = ret
    return ret;
};