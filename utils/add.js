function toArray(arrayLike) {
    return [].slice.call(arrayLike);
}

function add() {
    var totalArgs = toArray(arguments);
    function _add() {
        var args = toArray(arguments);
        totalArgs = totalArgs.concat(args);
        return _add;
    }

    _add.valueOf = function () {
        return totalArgs.reduce((acc, cur) => acc + cur);
    }

    return _add;
}

add(1) == 1
add(1)(2) == 3
add(1, 2)(3) == 6
add(1, 2)(3)(4, 5) == 15


