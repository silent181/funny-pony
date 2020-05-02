const path = require('path');
const fs = require('fs');

const filePath = path.resolve(__dirname, `./resources/惊雷.txt`);
const outputPath = path.resolve(__dirname, `./resources/检测结果.txt`);

const lyricStr = fs.readFileSync(filePath).toString();

const input = lyricStr.split('\n').map(
    line => line.split('').filter(char => char !== ' ')
);

const map = new Map();

for (const line of input) {
    for (const char of line) {
        map.set(
            char,
            map.has(char) ? map.get(char) + 1 : 1
        );
    }
}

const sorted = [];

for (const [k, v] of map) {
    sorted.push({
        word: k,
        time: v
    });
}

sorted.sort((v1, v2) => v2.time - v1.time);

const ret = sorted.map(({ word, time }) => `${word}: ${time}`).join('\n');

fs.writeFileSync(outputPath, ret);