/**
 * @param {string} s
 * @return {boolean}
 */

var PAIR = {
    '(': ')',
    '{': '}',
    '[': ']'
};
var stack = [];

var isValid = function (s) {
    var data = s.split('');
    if (data.length % 2 !== 0) {
        return false;
    }
// debugger
    while (data.length) {
        var cur = data[0];

        if (isLeft(cur)) {
            stack.push(cur);
        } else if (isRight(cur)) {
            if (PAIR[stack.pop()] !== cur) {
                return false;
            }
        }

        data.shift();
    }
    
    return stack.length === 0
};

function isLeft(s) {
    return s === '(' || s === '{' || s === '['
}

function isRight(s) {
    return s === ')' || s === '}' || s === ']'
}

// isValid('()')
// isValid("()[]{}")
// isValid("(]")
// isValid("([)]")
isValid("{[]}")
// isValid("((")