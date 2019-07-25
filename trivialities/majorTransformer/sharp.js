const {
    isNotEmpty,
    setState
} = require('./utils/common');
const {
    DICTIONARY,
    MAX_SHARPED_NOTE,
    MIN_FLATED_NOTE
} = require('./consts');

const {
    getOriginalNoteInfo,
    reconstruct,
    getNoteByNoteNumber
} = require('./utils/noteUtil');

const {
    getSharpedPrefixAndSuffix,
    getFlatedPrefixAndSuffix
} = require('./utils/prefixAndSuffixUtil');

/**
 * 转C大调核心逻辑实现
 */
function sharp(noteStr, {
    dist,
    action,
    notesWillChange
}) {
    const [
        prefix,
        decorator,
        note,
        suffix
    ] = getOriginalNoteInfo(noteStr);

    const noteNumber = +note;
    const transformedResult = _move();
    return reconstruct(...transformedResult);

    /**
     * TODO: 返回转调后的最终结果，包含高低音记号，升降号和音高
     * 过程略复杂，先用POP编程实现功能
     */
    function _move() {
        const sharpedNote = noteNumber + dist;
        let result = {
            decorator,
            prefix,
            suffix,
            note: sharpedNote
        };

        /**
         * step1：get movedNote, fixedPrefix and fixedSuffix by simple dist move
         */
        if (sharpedNote > MAX_SHARPED_NOTE) {
            const [sharpedPrefix, sharpedSuffix] = getSharpedPrefixAndSuffix(prefix, suffix);
            setState(result, {
                note: sharpedNote - MAX_SHARPED_NOTE,
                prefix: sharpedPrefix,
                suffix: sharpedSuffix
            });
        }

        /**
         * step2: check if movedNote should sharp or flat to get final note, decorator, prefix and suffix
         */
        if (notesWillChange.includes(getNoteByNoteNumber(result.note))) {
            if (action === 'sharp') {
                result = sharpHalfKey(result);
            } else if (action === 'flat') {
                result = flatHalfKey(result);
            }
        } else {
            const args = {
                prefix: result.prefix,
                decorator: '',
                note: result.note,
                suffix: result.suffix
            };
            if (decorator === '#') {
                result = sharpHalfKey(args);
            } else if (decorator === 'b') {
                result = flatHalfKey(args);
            }
        }

        return `${result.prefix}${result.decorator}${result.note}${result.suffix}`
    }
}

function sharpHalfKey({
    note,
    decorator,
    prefix,
    suffix
}) {
    // FIXME:  增加半音情形
    if (note === MAX_SHARPED_NOTE) {
        const [sharpedPrefix, sharpedSuffix] = getSharpedPrefixAndSuffix(prefix, suffix);
    }
    return `#${note}`;
}

function flatHalfKey({
    note,
    decorator,
    prefix,
    suffix
}) {
    // FIXME: 增加半音情形
    return `b${note}`;
}

module.exports = sharp;