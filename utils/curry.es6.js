/**
 * ES6 一行代码实现curry函数
 */
const curry = (fn, args = []) => 
    (...arg) => 
        args.concat(arg).length === fn.length ? 
            fn.apply(null, args.concat(arg)) : curry(fn, args.concat(arg));