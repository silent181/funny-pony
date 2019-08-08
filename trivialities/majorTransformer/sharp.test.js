const expect = require('chai').expect;

const sharp = require('./sharp');
const { rules } = require('./consts');

const D = rules['D'];
const E = rules['E'];
const F = rules['F'];
const G = rules['G'];
const A = rules['A'];
const B = rules['B'];

describe('D大调测试', () => {
    it('1', () => {
        expect(sharp('1', D)).to.be.equal('2');
    });
    it('2', () => {
        expect(sharp('2', D)).to.be.equal('3');
    });
    it('3', () => {
        expect(sharp('3', D)).to.be.equal('#4');
    });
    it('4', () => {
        expect(sharp('4', D)).to.be.equal('5');
    });
    it('5', () => {
        expect(sharp('5', D)).to.be.equal('6');
    });
    it('6', () => {
        expect(sharp('6', D)).to.be.equal('7');
    });
    it('7', () => {
        expect(sharp('7', D)).to.be.equal('#1.');
    });

    it('#1', () => {
        expect(sharp('#1', D)).to.be.equal('#2');
    });
    it('#2', () => {
        expect(sharp('#2', D)).to.be.equal('4');
    });
    it('#3', () => {
        expect(sharp('#3', D)).to.be.equal('5');
    });
    it('#4', () => {
        expect(sharp('#4', D)).to.be.equal('#5');
    });
    it('#5', () => {
        expect(sharp('#5', D)).to.be.equal('#6');
    });
    it('#6', () => {
        expect(sharp('#6', D)).to.be.equal('1.');
    });
    it('#7', () => {
        expect(sharp('#7', D)).to.be.equal('2.');
    });

    it('b1', () => {
        expect(sharp('b1', D)).to.be.equal('b2');
    });
    it('b2', () => {
        expect(sharp('b2', D)).to.be.equal('b3');
    });
    it('b3', () => {
        expect(sharp('b3', D)).to.be.equal('4');
    });
    it('b4', () => {
        expect(sharp('b4', D)).to.be.equal('b5');
    });
    it('b5', () => {
        expect(sharp('b5', D)).to.be.equal('b6');
    });
    it('b6', () => {
        expect(sharp('b6', D)).to.be.equal('b7');
    });
    it('b7', () => {
        expect(sharp('b7', D)).to.be.equal('1.');
    });
});

describe('E大调测试', () => {
    it('1', () => {
        expect(sharp('1', E)).to.be.equal('3');
    });
    it('2', () => {
        expect(sharp('2', E)).to.be.equal('#4');
    });
    it('3', () => {
        expect(sharp('3', E)).to.be.equal('#5');
    });
    it('4', () => {
        expect(sharp('4', E)).to.be.equal('6');
    });
    it('5', () => {
        expect(sharp('5', E)).to.be.equal('7');
    });
    it('6', () => {
        expect(sharp('6', E)).to.be.equal('#1.');
    });
    it('7', () => {
        expect(sharp('7', E)).to.be.equal('#2.');
    });

    it('#1', () => {
        expect(sharp('#1', E)).to.be.equal('4');
    });
    it('#2', () => {
        expect(sharp('#2', E)).to.be.equal('5');
    });
    it('#3', () => {
        expect(sharp('#3', E)).to.be.equal('6');
    });
    it('#4', () => {
        expect(sharp('#4', E)).to.be.equal('#6');
    });
    it('#5', () => {
        expect(sharp('#5', E)).to.be.equal('1.');
    });
    it('#6', () => {
        expect(sharp('#6', E)).to.be.equal('2.');
    });
    it('#7', () => {
        expect(sharp('#7', E)).to.be.equal('3.');
    });

    it('b1', () => {
        expect(sharp('b1', E)).to.be.equal('b3');
    });
    it('b2', () => {
        expect(sharp('b2', E)).to.be.equal('4');
    });
    it('b3', () => {
        expect(sharp('b3', E)).to.be.equal('5');
    });
    it('b4', () => {
        expect(sharp('b4', E)).to.be.equal('b6');
    });
    it('b5', () => {
        expect(sharp('b5', E)).to.be.equal('b7');
    });
    it('b6', () => {
        expect(sharp('b6', E)).to.be.equal('1.');
    });
    it('b7', () => {
        expect(sharp('b7', E)).to.be.equal('2.');
    });
});