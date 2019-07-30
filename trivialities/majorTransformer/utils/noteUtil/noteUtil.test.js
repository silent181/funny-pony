const expect = require('chai').expect;

const {
    getNoteByNoteNumber,
    getOriginalNoteInfo
} = require('./noteUtil');

function hasNoNumber() {
    return getOriginalNoteInfo('..b.');
}

function invalidInput() {
    return getOriginalNoteInfo('s1');
}

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

describe('getOriginalNoteInfo函数测试', () => {
    it('has no number', () => {
        expect(hasNoNumber).to.throw('note must be a string which contains one number');
    });

    it('invalid input', () => {
        expect(invalidInput).to.throw('invalid input');
    });

    it('have members', () => {
        expect(getOriginalNoteInfo('.b5')).to.have.members(['.', '', 'b', '5']);
    });

    it('normal note', () => {
        expect(getOriginalNoteInfo('5')).to.have.ordered.members(['', '', '5', '']);
    });

    it('note with sharp', () => {
        expect(getOriginalNoteInfo('#5')).to.have.ordered.members(['', '#', '5', '']);
    });

    it('note with flat', () => {
        expect(getOriginalNoteInfo('b5')).to.have.ordered.members(['', 'b', '5', '']);
    });

    it('note with prefix', () => {
        expect(getOriginalNoteInfo('..5')).to.have.ordered.members(['..', '', '5', '']);
    });

    it('note with suffix', () => {
        expect(getOriginalNoteInfo('5..')).to.have.ordered.members(['', '', '5', '..']);
    });
    
    it('note with prefix and decorator', () => {
        expect(getOriginalNoteInfo('.#5')).to.have.ordered.members(['.', '#', '5', '']);
    });

    it('note with suffix and decorator', () => {
        expect(getOriginalNoteInfo('b5..')).to.have.ordered.members(['', 'b', '5', '..']);
    });
});