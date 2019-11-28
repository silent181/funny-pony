function compose(...funcs) {
    debugger
    if (funcs.length === 0) {
        return arg => arg
    }

    if (funcs.length === 1) {
        return funcs[0]
    }
    
    return funcs.reduce((acc, cur) => {
        return function (...args) {
            return acc((cur(...args)))
        }
    })
}

var add = x => y => x + y;
var multiple10 = x => x * 10;
var dividedBy2 = x => x / 2;

var calc = x => {
    return dividedBy2(multiple10(add(5)(x)))
}

calc(3) // （3 + 5） * 10  / 2 === 40

var calc1 = x => compose(
    dividedBy2,
    multiple10,
    add(5)
)(x)

calc1(3)