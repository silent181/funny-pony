const path = require('path');
const fs = require('fs');
const rules = require('./rules');
const noteUtil = require('./noteUtil');

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

    getCMajor(note) {
        const {
            dist,
            action,
            notesWillChange
        } = this.getRule();
        const noteNumber = noteUtil.getNumber(note);
        return this.transformToCMajor(noteNumber, dist, action, notesWillChange);
    }

    transformToCMajor(noteNumber, dist, action, notesWillChange) {
        // FIXME: 实现
        const currentNote = noteUtil.getNoteByNoteNumber(noteNumber);
        const str = `currentNum: ${noteNumber}; currentNote: ${currentNote}`;
        console.log(str);
        if (notesWillChange.includes(currentNote)) {
            console.log('包含');
        } else {
            console.log('不包含');
        }
        return '';
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

    run(filePath) {
        this.readFile(filePath);
        const text = this.getFileText();
        const lines = text.split('\r\n');
        console.log('转调前：', lines);
        const cMajorLines = lines.map(this.getCMajorLines);
        console.log('转调后：', cMajorLines);
    }
}

const filePath = path.resolve(__dirname, './text.txt');
new MajorTransformer(rules, 'A').run(filePath);
