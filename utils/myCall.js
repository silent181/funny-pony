Function.prototype.myCall = function (context, ...args) {
    debugger
    context = context || {};
    context.fn = this; /**
     * 这里的this是一个function
     * 比如functionA.call(context, arg1)这种调用方式，this就是比如functionA
     * 造成这种比较反直觉的原因在于someFunction.call()这种调用方式与我们平时习惯的someObj.method1()这种调用方式不太一样
     * 其实只需要深刻理解在函数调用中，this到底等于什么
     * 例如：someObj.method1()，在method1的作用域中，this === someObj这个比较好理解
     * 同理：someFunction.call()，在call的作用域中，this === someFunction
     */
    var res = context.fn(...args);
    delete context.fn;
    return res;
}
var arrayLike = {
    length: 0
};
var c = [].push.myCall;

[].push.myCall(arrayLike, 1)
// c(arrayLike, 1)
console.log(arrayLike); // {0: 1, lenght: 1}