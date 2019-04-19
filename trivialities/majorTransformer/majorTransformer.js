const path = require('path');
const fs = require('fs');
const rules = require('./rules');
const noteDictionary = require('./noteDictionary');
const getNumber = require('./getNumber');

class MajorTransformer {
    constructor(rules, mode) {
        this.setRules(rules);
        this.setMode(mode);
        this.getCMajorLines = this.getCMajorLines.bind(this);
        this.getCMajor = this.getCMajor.bind(this);
    }

    run(filePath) {
        this.readFile(filePath);
        const text = this.getFileText();
        const lines = text.split('\r\n');
        console.log('转调前：', lines);
        const cMajorLines = lines.map(this.getCMajorLines);
        console.log('转调后：', cMajorLines);
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
        const {
            rules,
            mode
        } = this;
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

    getCMajor(note) {
        // FIXME: 实现
        const {
            dist,
            notesToChange
        } = this.getRule();
        const mode = this.getMode();
        const noteNumber = getNumber(note);
        for (const k in notesToChange) {
            
        }
        return this.move8Key(note, 1, false)
    }

    sharp(note) {
        return `#${note}`;
    }
    
    flat(note) {
        return `b${note}`;
    }
    
    move8Key(note, deep = 1, isSharp = true) {
        while (deep--) {
            note = isSharp ? `${note}.` : `.${note}`;
        }
        return note;
    }
}

const filePath = path.resolve(__dirname, './text.txt');
new MajorTransformer(rules, 'A').run(filePath);
