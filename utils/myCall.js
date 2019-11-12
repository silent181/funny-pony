Function.prototype.myCall = function (context, ...args) {
    debugger
    context = context || {};
    context.fn = this;
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