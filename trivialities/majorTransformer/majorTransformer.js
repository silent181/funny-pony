const path = require('path');
const fs = require('fs');

const rules = require('./rules');
const sharp = require('./sharp');
const platformUtil = require('./platformUtil');

class MajorTransformer {
    constructor(rules, mode) {
        this.init(rules, mode);
        this.bind();
    }

    init(rules, mode) {
        this.setRules(rules);
        this.setMode(mode);
    }

    bind() {
        this.getCMajorLines = this.getCMajorLines.bind(this);
        this.getCMajor = this.getCMajor.bind(this);
    }

    setRules(rules) {
        this.rules = rules;
    }

    getRules() {
        return this.rules;
    }

    setMode(mode) {
        this.mode = mode;
    }

    getMode() {
        return this.mode;
    }

    getRule() {
        const rules = this.getRules();
        const mode = this.getMode();
        return rules[mode];
    }

    readFile(path) {
        this.buffer = fs.readFileSync(path);
    }

    getFileText() {
        return this.buffer.toString();
    }

    getCMajorLines(line) {
        return line ? line.split(' ').map(this.getCMajor).join(' ') : '';
    }

    getCMajor(noteStr) {
        const rule = this.getRule();
        const cNote = sharp(noteStr, rule);
        return cNote;
    }

    run(filePath) {
        this.readFile(filePath);
        const text = this.getFileText();
        const lines = platformUtil.getLines(text);
        console.log('转调前, ：', lines);
        console.log('数组长度：', lines.length);
        const cMajorLines = lines.map(this.getCMajorLines);
        console.log('转调后：', cMajorLines);
        console.log('转换后数组长度：', cMajorLines.length);
        const result = platformUtil.getResultText(cMajorLines);
        console.log('结果：', result);
    }
}

const filePath = path.resolve(__dirname, './text.txt');
new MajorTransformer(rules, 'A').run(filePath);
