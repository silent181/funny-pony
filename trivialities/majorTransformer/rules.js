/**
 * 第一版只实现白键上的6个大调
 */
const rules = {
    D: {
        dist: 1,
        notesToChange: {
            fa: 'sharp',
            do: 'sharp'
        }
    },
    E: {
        dist: 2,
        notesToChange: {
            fa: 'sharp',
            do: 'sharp',
            so: 'sharp',
            re: 'sharp'
        }
    },
    F: {
        dist: 3,
        notesToChange: {
            ti: 'flat'
        }
    },
    G: {
        dist: 4,
        notesToChange: {
            fa: 'sharp'
        }
    },
    A: {
        dist: 5,
        notesToChange: {
            fa: 'sharp',
            do: 'sharp',
            so: 'sharp'
        }
    },
    B: {
        dist: 6,
        notesToChange: {
            fa: 'sharp',
            do: 'sharp',
            so: 'sharp',
            re: 'sharp',
            la: 'sharp'
        }
    }
}

module.exports = rules;