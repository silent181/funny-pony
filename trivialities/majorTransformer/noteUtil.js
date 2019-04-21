const DICTIONARY = require('./DICTIONARY');

/**
 * 根据字典中的value获取key
 */
function getNoteByNoteNumber(number) {
    for (const k in DICTIONARY) {
        const v = DICTIONARY[k];
        if (number == v) {
            return k;
        }
    }
}

/**
 * 获取原始谱中的音高，与升（降）多少个8度
 * 假设原始谱中都是"5", ".6", "7.."这种标记
 * 暂不支持原始谱中包含了升降号的情况
 * 返回值(Array): [prefix, noteNum, suffix]
 */
function getOriginalNoteInfo(str) {
    if (!str) {
        return;
    }
    return str.split(/(\d)/);
}

function sharpHalfKey(note) {
    return `#${note}`;
}

function flatHalfKey(note) {
    return `b${note}`;
}

/**
 * 重新构建C大调简谱音符
 */
function reconstruct(key, prefix, suffix) {
    if (prefix) {
        return `${prefix}${key}`;
    }
    if (suffix) {
        return `${key}${suffix}`;
    }
    return `${key}`;
}

module.exports = {
    getNoteByNoteNumber,
    getOriginalNoteInfo,
    sharpHalfKey,
    flatHalfKey,
    reconstruct
};