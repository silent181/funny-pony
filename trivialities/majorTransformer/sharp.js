const {
    isNotEmpty,
    setState
} = require('./utils/common');
const {
    MAX_SHARPED_NOTE,
    MIN_FLATED_NOTE,
    LOW_HALF_INTERVAL_NOTE,
    HIGH_HALF_INTERVAL_NOTE,
    DECORATORS,
    ACTIONS
} = require('./consts');

const {
    getOriginalNoteInfo,
    getNoteByNoteNumber
} = require('./utils/noteUtil');

const {
    getSharpedPrefixAndSuffix,
    getFlatedPrefixAndSuffix
} = require('./utils/prefixAndSuffixUtil');

/**
 * 转C大调核心逻辑实现
 * v0.0.1 增加原调带有升降号的情形 ————2019.07.26
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

    return _move();

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
            if (action === ACTIONS.sharp) {
                result = sharpHalfKey(result);
            } else if (action === ACTIONS.flat) {
                result = flatHalfKey(result);
            }
        } else {
            const args = {
                prefix: result.prefix,
                decorator: DECORATORS.none,
                note: result.note,
                suffix: result.suffix
            };
            if (decorator === DECORATORS.sharp) {
                result = sharpHalfKey(args);
            } else if (decorator === DECORATORS.flat) {
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
    let result = {
        note,
        decorator,
        prefix,
        suffix
    };

    if (decorator === DECORATORS.flat) {
        setState(result, {
            decorator: DECORATORS.none
        });
    } else {
        if (note === MAX_SHARPED_NOTE) {
            const [sharpedPrefix, sharpedSuffix] = getSharpedPrefixAndSuffix(prefix, suffix);
            setState(result, {
                note: MIN_FLATED_NOTE,
                prefix: sharpedPrefix,
                suffix: sharpedSuffix
            });
        } else if (note === LOW_HALF_INTERVAL_NOTE) {
            setState(result, {
                note: HIGH_HALF_INTERVAL_NOTE
            });
        } else {
            if (decorator === DECORATORS.sharp) {
                setState(result, {
                    note: note + 1,
                    decorator: DECORATORS.none
                });
            } else {
                setState(result, {
                    decorator: DECORATORS.sharp
                });
            }
        }
    }

    return result;
}

function flatHalfKey({
    note,
    decorator,
    prefix,
    suffix
}) {
    let result = {
        note,
        decorator,
        prefix,
        suffix
    };

    if (decorator === DECORATORS.sharp) {
        setState(result, {
            decorator: DECORATORS.none
        });
    } else {
        if (note === MIN_FLATED_NOTE) {
            const [flatedPrefix, flatedSuffix] = getFlatedPrefixAndSuffix(prefix, suffix);
            setState(result, {
                note: MAX_SHARPED_NOTE,
                prefix: flatedPrefix,
                suffix: flatedSuffix
            });
        } else if (note === HIGH_HALF_INTERVAL_NOTE) {
            setState(result, {
                note: LOW_HALF_INTERVAL_NOTE
            });
        } else {
            if (decorator === DECORATORS.flat) {
                setState(result, {
                    note: note - 1,
                    decorator: DECORATORS.none
                });
            } else {
                setState(result, {
                    decorator: DECORATORS.flat
                });
            }
        }
    }
    
    return result;
}

module.exports = sharp;