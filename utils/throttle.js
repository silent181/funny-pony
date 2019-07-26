function throttle(fn, delay) {
    var previous = 0;
    return function () {
        var context = this;
        var now = Date.now();
        if (now - previous > delay) {
            previous = now;
            fn.apply(context, arguments);
        }
    }
}

function throttle2(fn, delay) {
    var timer;
    return function () {
        var context = this;
        if (timer) {
            return;
        }
        timer = setTimeout(() => {
            fn.apply(context, arguments);
            timer = null;
        }, delay);
    }
}

var foo = function () {
    console.log('我会一直执行')
}

var throttled = throttle2(foo, 500)

var add = function (node, handler) {
    node.addEventListener('mousemove', handler);
}

var remove = function (node, handler) {
    node.removeEventListener('mousemove', handler);
}