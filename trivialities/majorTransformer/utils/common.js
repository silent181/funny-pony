function isNotEmpty(str) {
    return typeof str === 'string' && str.length > 0;
}

module.exports = {
    isNotEmpty
}