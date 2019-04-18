/**
 * 只维护了5个升号与5个降号的大调
 */
const rules = {
    D: {
        fa: 'sharp',
        do: 'sharp'
    },
    E: {
        fa: 'sharp',
        do: 'sharp',
        so: 'sharp',
        re: 'sharp'
    },
    F: {
        ti: 'flat'
    },
    G: {
        fa: 'sharp'
    },
    A: {
        fa: 'sharp',
        do: 'sharp',
        so: 'sharp'
    },
    B: {
        fa: 'sharp',
        do: 'sharp',
        so: 'sharp',
        re: 'sharp',
        la: 'sharp'
    },
    Dflat: {
        ti: 'flat',
        mi: 'flat',
        la: 'flat',
        re: 'flat',
        so: 'flat'
    }

}

module.exports = rules;