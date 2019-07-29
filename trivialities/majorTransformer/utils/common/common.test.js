const expect = require('chai').expect;

const { isNotEmpty } = require('./common');

describe('isNotEmpty函数测试', () => {
    it('number', () => {
        expect(isNotEmpty(123)).to.not.be.ok;
    });

    it('plain object1', () => {
        expect(isNotEmpty({ foo: '123' })).to.not.be.ok;
    });

    it('plain object2', () => {
        expect(isNotEmpty({})).to.not.be.ok;
    });

    it('function', () => {
        expect(isNotEmpty(function () {})).to.not.be.ok;
    });

    it('array1', () => {
        expect(isNotEmpty([1, 2, 3])).to.not.be.ok;
    });

    it('array2', () => {
        expect(isNotEmpty([])).to.not.be.ok;
    });

    it('null', () => {
        expect(isNotEmpty(null)).to.not.be.ok;
    });

    it('undefined', () => {
        expect(isNotEmpty(undefined)).to.not.be.ok;
    });

    it('empty string', () => {
        expect(isNotEmpty('')).to.not.be.ok;
    });

    it('not empty string', () => {
        expect(isNotEmpty('sssss')).to.be.ok;
    });
});