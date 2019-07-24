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

module.exports = rules;