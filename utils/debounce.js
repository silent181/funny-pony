function debounce(fn, delay, leading = false) {
    var timer;
    var firstTrigger = true;
    return function () {
        var context = this;
        if (timer) {
            clearTimeout(timer);
        }
        if (leading && firstTrigger) {
            fn.apply(context, arguments);
            firstTrigger = false;
        }
        timer = setTimeout(() => {
            fn.apply(context, arguments);
            timer = null;
            firstTrigger = true;
        }, delay)
    }
}

var foo = function () {
    console.log('我会一直执行')
}

var debounced = debounce(foo, 500, true)

var add = function (node, handler) {
    node.addEventListener('mousemove', handler);
}

var remove = function (node, handler) {
    node.removeEventListener('mousemove', handler);
}