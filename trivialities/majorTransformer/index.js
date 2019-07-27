const path = require('path');
const { rules } = require('./consts');
const MajorTransformer = require('./MajorTransformer');

const filePath = path.resolve(__dirname, './resources/海滩A调.txt');
const mode = process.argv[2] || 'A';

new MajorTransformer(rules, mode).run(filePath);