const DICTIONARY = require('../consts/DICTIONARY');
const MAX_SHARPED_NOTE = DICTIONARY['ti'];
const MIN_FLATED_NOTE = DICTIONARY['do'];

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
 */
function getOriginalNoteInfo(str) {
    if (!str) {
        throw new Error('note must be a string which contains one number');
    }
    return str.split(/([b#]?)(\d)/);
}

function sharpHalfKey(note, decorator, prefix, suffix) {
    // FIXME:  增加半音情形

    return `#${note}`;
}

function flatHalfKey(note) {
    // FIXME: 增加半音情形
    return `b${note}`;
}

/**
 * 会执行此函数就表明音高转换时出现了跨音程的情况，需要根据原始的prefix与suffix进行高低音记号修正
 */
function getFixedPrefixAndSuffix(prefix, suffix) {
    let fixedPrefix;
    let fixedSuffix;

    if (!prefix) {
        /**
         * 没有低音几号时，加一个8度的高音记号
         */
        fixedPrefix = '';
        fixedSuffix = `${suffix}.`;
    } else if (prefix.length > 1) {
        /**
         * 低音记号多余1个时，减去一个低音记号
         */
        fixedPrefix = prefix.substr(1);
        fixedSuffix = '';
    } else {
        /**
         * 低音记号个数为1
         */
        fixedPrefix = '';
        fixedSuffix = '';
    }

    return [fixedPrefix, fixedSuffix];
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
    getFixedPrefixAndSuffix,
    reconstruct
};