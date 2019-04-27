const DICTIONARY = require('./DICTIONARY');
const {
    getOriginalNoteInfo,
    reconstruct,
    getFixedPrefixAndSuffix,
    getNoteByNoteNumber,
    sharpHalfKey,
    flatHalfKey
} = require('./noteUtil');
/**
 * 一个8度音程中的最大值
 */
const MAX_SHARPED_KEY = DICTIONARY['ti'];

/**
 * 转C大调核心逻辑实现
 */
function sharp(noteStr, rule) {
    const [
        prefix,
        noteNum,
        suffix
    ] = getOriginalNoteInfo(noteStr);
    const {
        dist,
        action,
        notesWillChange
    } = rule;
    const noteNumber = +noteNum;
    const transformedResult = _move();
    
    return reconstruct(...transformedResult);

    /**
     * TODO: 返回转调后的最终结果，包含高低音记号，升降号和音高
     * 对低音高音记号产生的影响分为3种情况。以A大调升5key为例子，其余调号同理
     * 1、不跨音程，无任何影响。如从1升到6
     * 2、跨音程，高音记号加1。如从5升到3.
     * 3、跨音程，低音记号减1，如从.5升到3。这种情况有可能将prefix修正为空字符串''
     */
    function _move() {
        let moved;
        let fixedPrefix = prefix;
        let fixedSuffix = suffix;
        const sharpedKey = noteNumber + dist;
        if (sharpedKey > MAX_SHARPED_KEY) { // 跨音程
            moved = sharpedKey - MAX_SHARPED_KEY;
            [fixedPrefix, fixedSuffix] = getFixedPrefixAndSuffix(prefix, suffix);
        } else {
            moved = sharpedKey;
        }

        if (notesWillChange.includes(getNoteByNoteNumber(moved))) {
            if (action === 'sharp') {
                moved = sharpHalfKey(moved);
            } else if (action === 'flat') {
                moved = flatHalfKey(moved);
            }
        }

        return [moved, fixedPrefix, fixedSuffix];
    }
}

module.exports = sharp;