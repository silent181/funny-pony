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

describe('F大调测试', () => {
    it('1', () => {
        expect(sharp('1', F)).to.be.equal('4');
    });
    it('2', () => {
        expect(sharp('2', F)).to.be.equal('5');
    });
    it('3', () => {
        expect(sharp('3', F)).to.be.equal('6');
    });
    it('4', () => {
        expect(sharp('4', F)).to.be.equal('b7');
    });
    it('5', () => {
        expect(sharp('5', F)).to.be.equal('1.');
    });
    it('6', () => {
        expect(sharp('6', F)).to.be.equal('2.');
    });
    it('7', () => {
        expect(sharp('7', F)).to.be.equal('3.');
    });

    it('#1', () => {
        expect(sharp('#1', F)).to.be.equal('#4');
    });
    it('#2', () => {
        expect(sharp('#2', F)).to.be.equal('#5');
    });
    it('#3', () => {
        expect(sharp('#3', F)).to.be.equal('#6');
    });
    it('#4', () => {
        expect(sharp('#4', F)).to.be.equal('7');
    });
    it('#5', () => {
        expect(sharp('#5', F)).to.be.equal('#1.');
    });
    it('#6', () => {
        expect(sharp('#6', F)).to.be.equal('#2.');
    });
    it('#7', () => {
        expect(sharp('#7', F)).to.be.equal('4.');
    });

    it('b1', () => {
        expect(sharp('b1', F)).to.be.equal('3');
    });
    it('b2', () => {
        expect(sharp('b2', F)).to.be.equal('b5');
    });
    it('b3', () => {
        expect(sharp('b3', F)).to.be.equal('b6');
    });
    it('b4', () => {
        expect(sharp('b4', F)).to.be.equal('6');
    });
    it('b5', () => {
        expect(sharp('b5', F)).to.be.equal('7');
    });
    it('b6', () => {
        expect(sharp('b6', F)).to.be.equal('b2.');
    });
    it('b7', () => {
        expect(sharp('b7', F)).to.be.equal('b3.');
    });
});

describe('G大调测试', () => {
    it('1', () => {
        expect(sharp('1', G)).to.be.equal('5');
    });
    it('2', () => {
        expect(sharp('2', G)).to.be.equal('6');
    });
    it('3', () => {
        expect(sharp('3', G)).to.be.equal('7');
    });
    it('4', () => {
        expect(sharp('4', G)).to.be.equal('1.');
    });
    it('5', () => {
        expect(sharp('5', G)).to.be.equal('2.');
    });
    it('6', () => {
        expect(sharp('6', G)).to.be.equal('3.');
    });
    it('7', () => {
        expect(sharp('7', G)).to.be.equal('#4.');
    });

    it('#1', () => {
        expect(sharp('#1', G)).to.be.equal('#5');
    });
    it('#2', () => {
        expect(sharp('#2', G)).to.be.equal('#6');
    });
    it('#3', () => {
        expect(sharp('#3', G)).to.be.equal('1.');
    });
    it('#4', () => {
        expect(sharp('#4', G)).to.be.equal('#1.');
    });
    it('#5', () => {
        expect(sharp('#5', G)).to.be.equal('#2.');
    });
    it('#6', () => {
        expect(sharp('#6', G)).to.be.equal('4.');
    });
    it('#7', () => {
        expect(sharp('#7', G)).to.be.equal('5.');
    });

    it('b1', () => {
        expect(sharp('b1', G)).to.be.equal('b5');
    });
    it('b2', () => {
        expect(sharp('b2', G)).to.be.equal('b6');
    });
    it('b3', () => {
        expect(sharp('b3', G)).to.be.equal('b7');
    });
    it('b4', () => {
        expect(sharp('b4', G)).to.be.equal('7');
    });
    it('b5', () => {
        expect(sharp('b5', G)).to.be.equal('b2.');
    });
    it('b6', () => {
        expect(sharp('b6', G)).to.be.equal('b3.');
    });
    it('b7', () => {
        expect(sharp('b7', G)).to.be.equal('4.');
    });
});

describe('A大调测试', () => {
    it('1', () => {
        expect(sharp('1', A)).to.be.equal('6');
    });
    it('2', () => {
        expect(sharp('2', A)).to.be.equal('7');
    });
    it('3', () => {
        expect(sharp('3', A)).to.be.equal('#1.');
    });
    it('4', () => {
        expect(sharp('4', A)).to.be.equal('2.');
    });
    it('5', () => {
        expect(sharp('5', A)).to.be.equal('3.');
    });
    it('6', () => {
        expect(sharp('6', A)).to.be.equal('#4.');
    });
    it('7', () => {
        expect(sharp('7', A)).to.be.equal('#5.');
    });

    it('#1', () => {
        expect(sharp('#1', A)).to.be.equal('#6');
    });
    it('#2', () => {
        expect(sharp('#2', A)).to.be.equal('1.');
    });
    it('#3', () => {
        expect(sharp('#3', A)).to.be.equal('2.');
    });
    it('#4', () => {
        expect(sharp('#4', A)).to.be.equal('#2.');
    });
    it('#5', () => {
        expect(sharp('#5', A)).to.be.equal('4.');
    });
    it('#6', () => {
        expect(sharp('#6', A)).to.be.equal('5.');
    });
    it('#7', () => {
        expect(sharp('#7', A)).to.be.equal('6.');
    });

    it('b1', () => {
        expect(sharp('b1', A)).to.be.equal('b6');
    });
    it('b2', () => {
        expect(sharp('b2', A)).to.be.equal('b7');
    });
    it('b3', () => {
        expect(sharp('b3', A)).to.be.equal('1.');
    });
    it('b4', () => {
        expect(sharp('b4', A)).to.be.equal('b2.');
    });
    it('b5', () => {
        expect(sharp('b5', A)).to.be.equal('b3.');
    });
    it('b6', () => {
        expect(sharp('b6', A)).to.be.equal('4.');
    });
    it('b7', () => {
        expect(sharp('b7', A)).to.be.equal('5.');
    });
});

describe('B大调测试', () => {
    it('1', () => {
        expect(sharp('1', B)).to.be.equal('7');
    });
    it('2', () => {
        expect(sharp('2', B)).to.be.equal('#1.');
    });
    it('3', () => {
        expect(sharp('3', B)).to.be.equal('#2.');
    });
    it('4', () => {
        expect(sharp('4', B)).to.be.equal('3.');
    });
    it('5', () => {
        expect(sharp('5', B)).to.be.equal('#4.');
    });
    it('6', () => {
        expect(sharp('6', B)).to.be.equal('#5.');
    });
    it('7', () => {
        expect(sharp('7', B)).to.be.equal('#6.');
    });

    it('#1', () => {
        expect(sharp('#1', B)).to.be.equal('1.');
    });
    it('#2', () => {
        expect(sharp('#2', B)).to.be.equal('2.');
    });
    it('#3', () => {
        expect(sharp('#3', B)).to.be.equal('3.');
    });
    it('#4', () => {
        expect(sharp('#4', B)).to.be.equal('4.');
    });
    it('#5', () => {
        expect(sharp('#5', B)).to.be.equal('5.');
    });
    it('#6', () => {
        expect(sharp('#6', B)).to.be.equal('6.');
    });
    it('#7', () => {
        expect(sharp('#7', B)).to.be.equal('7.');
    });

    it('b1', () => {
        expect(sharp('b1', B)).to.be.equal('b7');
    });
    it('b2', () => {
        expect(sharp('b2', B)).to.be.equal('1.');
    });
    it('b3', () => {
        expect(sharp('b3', B)).to.be.equal('2.');
    });
    it('b4', () => {
        expect(sharp('b4', B)).to.be.equal('b3.');
    });
    it('b5', () => {
        expect(sharp('b5', B)).to.be.equal('4.');
    });
    it('b6', () => {
        expect(sharp('b6', B)).to.be.equal('5.');
    });
    it('b7', () => {
        expect(sharp('b7', B)).to.be.equal('6.');
    });
});