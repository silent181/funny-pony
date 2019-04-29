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
const MAX_SHARPED_NOTE = DICTIONARY['ti'];

/**
 * 转C大调核心逻辑实现
 */
function sharp(noteStr, rule) {
    const [
        prefix,
        decorator,
        note,
        suffix
    ] = getOriginalNoteInfo(noteStr);
    const {
        dist,
        action,
        notesWillChange
    } = rule;
    const noteNumber = +note;
    const transformedResult = _move();
    return reconstruct(...transformedResult);

    /**
     * TODO: 返回转调后的最终结果，包含高低音记号，升降号和音高
     */
    function _move() {
        let movedNote;
        let fixedPrefix = prefix;
        let fixedSuffix = suffix;
        let finalNote;
        let finalPrefix;
        let finalSuffix;
        const sharpedNote = noteNumber + dist;
        /**
         * step1：get movedNote, fixedPrefix and fixedSuffix by simple dist move
         */
        if (sharpedNote > MAX_SHARPED_NOTE) { // 跨音程
            movedNote = sharpedNote - MAX_SHARPED_NOTE;
            [fixedPrefix, fixedSuffix] = getFixedPrefixAndSuffix(prefix, suffix);
        } else {
            movedNote = sharpedNote;
        }
        /**
         * step2: check if movedNote should sharp or flat and get final note, prefix and suffix
         */
        if (notesWillChange.includes(getNoteByNoteNumber(movedNote))) {
            if (action === 'sharp') {
                [finalNote, finalPrefix, finalSuffix] = sharpHalfKey(movedNote, decorator, fixedPrefix, fixedSuffix);
            } else if (action === 'flat') {
                [finalNote, finalPrefix, finalSuffix] = flatHalfKey(movedNote, decorator, fixedPrefix, fixedSuffix);
            }
        } else {
            [finalNote, finalPrefix, finalSuffix] = [movedNote, fixedPrefix, fixedSuffix];
        }

        return [finalNote, finalPrefix, finalSuffix];
    }
}

module.exports = sharp;