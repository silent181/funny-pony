const expect = require('chai').expect;

const sharp = require('./sharp');
const { rules } = require('./consts');

const testNote = ['#5', '#6', '#7', '#4', '6']
const expected = ['1.', '2.', '3.', '#6', '#1.'] // 以E大调为例，因为E大调升号较多


const D = rules['D'];
const E = rules['E'];
const F = rules['F'];
const G = rules['G'];
const A = rules['A'];
const B = rules['B'];

describe('E大调测试', () => {
    it(' #5 应该转为 1. ', () => {
        expect(sharp('#5', E)).to.be.equal('1.');
    });
    it(' #6 应该转为 2. ', () => {
        expect(sharp('#6', E)).to.be.equal('2.');
    });
    it(' #7 应该转为 3. ', () => {
        expect(sharp('#7', E)).to.be.equal('3.');
    });
    it(' #4 应该转为 #6 ', () => {
        expect(sharp('#4', E)).to.be.equal('#6');
    });
    it(' 6 应该转为 #1. ', () => {
        expect(sharp('6', E)).to.be.equal('#1.');
    });
});