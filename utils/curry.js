/**
 * ES5 柯里化curry函数简单实现
 */
function curry(fn, args) {
    var totalArg = fn.length;
    args = args || [];

    return function () {
        var curArg = args.concat([].slice.call(arguments));
        if (totalArg === curArg.length) {
            return fn.apply(this, curArg);
        }
        return curry(fn, curArg);
    }
}