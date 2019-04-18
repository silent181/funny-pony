const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, './text.txt');
const buf = fs.readFileSync(filePath);
const txt = buf.toString();
const lines = txt.split('\r\n');
console.log('转调前：', lines);
const cMajorLines = lines.map(getCMajorLines);
console.log('转调后：', cMajorLines);

const NOTES = {
    do: 1,
    re: 2,
    mi: 3,
    fa: 4,
    so: 5,
    la: 6,
    ti: 7
};

function getCMajorLines(line) {
    return line ? line.split(' ').map(getCMajor).join(' ') : '';
}

function getCMajor(note) {
    // FIXME: 实现
    return move8Key(note, 1, false)
}

function sharp(note) {
    return `#${note}`;
}

function flat(note) {
    return `b${note}`;
}

function move8Key(note, deep = 1, isSharp = true) {
    while (deep--) {
        note = isSharp ? `${note}.` : `.${note}`;
    }
    return note;
}