const noteUtil = require('./noteUtil');
const DICTIONARY = require('./DICTIONARY');
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
    ] = noteUtil.getOriginalNoteInfo(noteStr);
    const {
        dist,
        action,
        notesWillChange
    } = rule;
    const noteNumber = +noteNum;
    const transformedResult = _move();
    
    return noteUtil.reconstruct(...transformedResult);

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
            [fixedPrefix, fixedSuffix] = _getFixedPrefixAndSuffix(prefix, suffix);
        } else {
            moved = sharpedKey;
        }

        if (notesWillChange.includes(noteUtil.getNoteByNoteNumber(moved))) {
            if (action === 'sharp') {
                moved = noteUtil.sharpHalfKey(moved);
            } else if (action === 'flat') {
                moved = noteUtil.flatHalfKey(moved);
            }
        }

        return [moved, fixedPrefix, fixedSuffix];
    }

    /**
     * 会执行此函数就表明音高转换时出现了跨音程的情况，需要根据原始的prefix与suffix进行高低音记号修正
     */
    function _getFixedPrefixAndSuffix(prefix, suffix) {
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
}

module.exports = sharp;