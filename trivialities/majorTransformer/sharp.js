/**
 * 转C大调核心逻辑实现
 * v0.0.1 增加原调带有升降号的情形 ————2019.07.26
 */

const { setState } = require('./utils/common');
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
    const sharpedNote = noteNumber + dist;
    const result = {
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
            setState(result, sharpHalfKey(result));

        } else if (action === ACTIONS.flat) {
            setState(result, flatHalfKey(result));
        }
    } else {
        const args = {
            prefix: result.prefix,
            decorator: DECORATORS.none,
            note: result.note,
            suffix: result.suffix
        };
        if (decorator === DECORATORS.sharp) {
            setState(result, sharpHalfKey(args));
        } else if (decorator === DECORATORS.flat) {
            setState(result, flatHalfKey(args));
        }
    }

    return `${result.prefix}${result.decorator}${result.note}${result.suffix}`
}

function sharpHalfKey(noteInfos) {
    return moveHalfKey(noteInfos);
}

function flatHalfKey(noteInfos) {
    return moveHalfKey(noteInfos, false);
}

function moveHalfKey({
    note,
    decorator,
    prefix,
    suffix
}, isSharp = true) {
    const result = {
        note,
        decorator,
        prefix,
        suffix
    };

    if (
        (isSharp && decorator === DECORATORS.flat) ||
        (!isSharp && decorator === DECORATORS.sharp)
    ) {
        setState(result, {
            decorator: DECORATORS.none
        });
    } else {
        if ((isSharp && note === MAX_SHARPED_NOTE) || 
            (!isSharp && note === MIN_FLATED_NOTE)
        ) {
            const [fixedPrefix, fixedSuffix] = isSharp ? 
                getSharpedPrefixAndSuffix(prefix, suffix) :
                getFlatedPrefixAndSuffix(prefix, suffix);
            setState(result, {
                note: isSharp ? MIN_FLATED_NOTE : MAX_SHARPED_NOTE,
                prefix: fixedPrefix,
                suffix: fixedSuffix
            });
        } else if ((isSharp && note === LOW_HALF_INTERVAL_NOTE) ||
            (!isSharp && note === HIGH_HALF_INTERVAL_NOTE)
        ) {
            setState(result, {
                note: isSharp ? HIGH_HALF_INTERVAL_NOTE : LOW_HALF_INTERVAL_NOTE
            });
        } else {
            if (
                (isSharp && decorator === DECORATORS.sharp) ||
                (!isSharp && decorator === DECORATORS.flat)
            ) {
                setState(result, {
                    note: isSharp ? note + 1 : note - 1,
                    decorator: DECORATORS.none
                });
            } else {
                setState(result, {
                    decorator: isSharp ? DECORATORS.sharp : DECORATORS.flat
                });
            }
        }
    }

    return result;
}

module.exports = sharp;