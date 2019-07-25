function isNotEmpty(str) {
    return typeof str === 'string' && str.length > 0;
}

function HUMBLE_setState(target, state) {
    Object.assign(target, state);
}

module.exports = {
    isNotEmpty,
    setState: HUMBLE_setState
}