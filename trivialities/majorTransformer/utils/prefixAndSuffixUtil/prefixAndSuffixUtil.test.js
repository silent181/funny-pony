const expect = require('chai').expect;

const {
    getSharpedPrefixAndSuffix,
    getFlatedPrefixAndSuffix
} = require('./prefixAndSuffixUtil');

describe('getSharpedPrefixAndSuffix函数测试', () => {
    it('both empty', () => {
        expect(getSharpedPrefixAndSuffix('', '')).to.have.ordered.members(['', '.']);
    });

    it('prefix.length === 1', () => {
        expect(getSharpedPrefixAndSuffix('.', '')).to.have.ordered.members(['', '']);
    });

    it('prefix.length > 1', () => {
        expect(getSharpedPrefixAndSuffix('...', '')).to.have.ordered.members(['..', '']);
    });

    it('suffix.length === 1', () => {
        expect(getSharpedPrefixAndSuffix('', '.')).to.have.ordered.members(['', '..']);
    });

    it('suffix.length > 1', () => {
        expect(getSharpedPrefixAndSuffix('', '...')).to.have.ordered.members(['', '....']);
    });
});

describe('getFlatedPrefixAndSuffix函数测试', () => {
    it('both empty', () => {
        expect(getFlatedPrefixAndSuffix ('', '')).to.have.ordered.members(['.', '']);
    });

    it('prefix.length === 1', () => {
        expect(getFlatedPrefixAndSuffix ('.', '')).to.have.ordered.members(['..', '']);
    });

    it('prefix.length > 1', () => {
        expect(getFlatedPrefixAndSuffix ('...', '')).to.have.ordered.members(['....', '']);
    });

    it('suffix.length === 1', () => {
        expect(getFlatedPrefixAndSuffix ('', '.')).to.have.ordered.members(['', '']);
    });

    it('suffix.length > 1', () => {
        expect(getFlatedPrefixAndSuffix ('', '...')).to.have.ordered.members(['', '..']);
    });
});