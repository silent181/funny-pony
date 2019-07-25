const {
    DICTIONARY,
    MAX_SHARPED_NOTE,
    MIN_FLATED_NOTE
} = require('../consts');
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
 * 假设原始谱中都是"5", ".6", "7..", ".#5"这种标记
 * v0.0.2 支持原始谱中包含了升降记号的情况 ———— 2019/04/27
 * 返回值(Array): [prefix, decorator(值为'b','#',''其中之一), note(音高数字，String类型), suffix]
 * v0.0.3 增加输入校验 ————2019/07/24
 */
function getOriginalNoteInfo(str) {
    if (!str || !_hasNumber(str)) {
        throw new Error('note must be a string which contains one number');
    }
    if (_hasInvalidStr(str)) {
        throw new Error('invalid input');
    }
    return str.split(/([b#]?)(\d)/);
}

function _hasNumber(str) {
    return /\d/.test(str);
}

function _hasInvalidStr(str) {
    return /[^\db#\.]/.test(str);
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
    reconstruct
};