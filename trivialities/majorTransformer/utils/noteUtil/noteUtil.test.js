const expect = require('chai').expect;

const {
    getNoteByNoteNumber,
    getOriginalNoteInfo
} = require('./noteUtil');

describe('getNoteByNoteNumber函数测试', () => {
    it('do', () => {
        expect(getNoteByNoteNumber(1)).to.be.equal('do');
    });

    it('re', () => {
        expect(getNoteByNoteNumber(2)).to.be.equal('re');
    });

    it('mi', () => {
        expect(getNoteByNoteNumber(3)).to.be.equal('mi');
    });

    it('fa', () => {
        expect(getNoteByNoteNumber(4)).to.be.equal('fa');
    });

    it('so', () => {
        expect(getNoteByNoteNumber(5)).to.be.equal('so');
    });

    it('la', () => {
        expect(getNoteByNoteNumber(6)).to.be.equal('la');
    });

    it('ti', () => {
        expect(getNoteByNoteNumber(7)).to.be.equal('ti');
    });

    it('string ti', () => {
        expect(getNoteByNoteNumber('7')).to.be.equal('ti');
    });

    it('unknown', () => {
        expect(getNoteByNoteNumber(123)).to.be.equal(undefined);
    });
});