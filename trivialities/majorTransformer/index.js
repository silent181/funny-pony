const path = require('path');
const { rules } = require('./consts');
const { entry } = require('./config');
const MajorTransformer = require('./MajorTransformer');

const filePath = path.resolve(__dirname, `./resources/${entry}`);
const mode = process.argv[2] || 'A';

new MajorTransformer(rules, mode).run(filePath);