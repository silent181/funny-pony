const DICTIONARY = {
    do: 1,
    re: 2,
    mi: 3,
    fa: 4,
    so: 5,
    la: 6,
    ti: 7
};

/**
 * 一个八度音程中的最高音
 */
const MAX_SHARPED_NOTE = DICTIONARY['ti'];

/**
 * 一个八度音程中的最低音
 */
const MIN_FLATED_NOTE = DICTIONARY['do'];

/**
 * 一个八度音程中的半音程中的较低音
 */
const LOW_HALF_INTERVAL_NOTE = DICTIONARY['mi'];

/**
 * 一个八度音程中的半音程中的较高音
 */
const HIGH_HALF_INTERVAL_NOTE = DICTIONARY['fa'];

/**
 * 升降记号
 */
const DECORATORS = {
    sharp: '#',
    flat: 'b',
    none: ''
};

const ACTIONS = {
    sharp: 'sharp',
    flat: 'flat'
};

/**
 * 第一版只实现白键上的6个大调
 */
const rules = {
    D: {
        dist: 1,
        action: 'sharp',
        notesWillChange: ['fa', 'do']
    },
    E: {
        dist: 2,
        action: 'sharp',
        notesWillChange: ['fa', 'do', 'so', 're']
    },
    F: {
        dist: 3,
        action: 'flat',
        notesWillChange: ['ti']
    },
    G: {
        dist: 4,
        action: 'sharp',
        notesWillChange: ['fa']
    },
    A: {
        dist: 5,
        action: 'sharp',
        notesWillChange: ['fa', 'do', 'so']
    },
    B: {
        dist: 6,
        action: 'sharp',
        notesWillChange: ['fa', 'do', 'so', 're', 'la']
    }
}

module.exports = {
    DICTIONARY,
    MAX_SHARPED_NOTE,
    MIN_FLATED_NOTE,
    LOW_HALF_INTERVAL_NOTE,
    HIGH_HALF_INTERVAL_NOTE,
    DECORATORS,
    ACTIONS,
    rules
}