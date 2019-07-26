const fs = require('fs');
const path = require('path');

const sharp = require('./sharp');
const platformUtil = require('./utils/platformUtil');
const defaultOutputPath = path.resolve(__dirname, './resources/C大调结果.txt');

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
        this.getCMajorNote = this.getCMajorNote.bind(this);
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
        return line ? line.split(' ').map(this.getCMajorNote).join(' ') : '';
    }

    getCMajorNote(note) {
        const rule = this.getRule();
        const cNote = sharp(note, rule);
        return cNote;
    }

    run(filePath, ouputPath = defaultOutputPath) {
        this.readFile(filePath);
        const text = this.getFileText();
        const lines = platformUtil.getLines(text);
        const cMajorLines = lines.map(this.getCMajorLines);
        const result = platformUtil.getResultText(cMajorLines);
        
        fs.writeFileSync(ouputPath, result);
        console.log('==============done==============');
    }
}

module.exports = MajorTransformer;