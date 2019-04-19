/**
 * 只获取一串字符串中的一个数字（假设这串字符串中只含有一个数字）
 */
function getNumber(str) {
    if (!str) {
        return;
    }
    return +str.match(/\d/)[0];
}

module.exports = getNumber;