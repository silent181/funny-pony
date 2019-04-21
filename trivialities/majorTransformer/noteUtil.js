const dictionary = {
    do: 1,
    re: 2,
    mi: 3,
    fa: 4,
    so: 5,
    la: 6,
    ti: 7
}

function getNoteByNoteNumber(number) {
    for (const k in dictionary) {
        const v = dictionary[k];
        if (number == v) {
            return k;
        }
    }
}

/**
 * 只获取一串字符串中的一个数字（假设这串字符串中只含有一个数字）
 */
function getNumber(str) {
    if (!str) {
        return;
    }
    return +str.match(/\d/)[0];
}

module.exports = {
    dictionary,
    getNoteByNoteNumber,
    getNumber
};