const sharp = require('./sharp');
const rules = require('./rules');
const mode = process.argv[2];
const rule = rules[mode];
const testNote = ['#5', '#6', '#7', '#4']
const expected = ['1.', '2.', '3.', '#6']


for (let i = 0; i < testNote.length; i++) {
    const result = sharp(testNote[i], rule);
    console.log('we get: ', result);
    console.log('expected: ', expected[i]);
}