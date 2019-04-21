const path = require('path');
const rules = require('./rules');
const MajorTransformer = require('./MajorTransformer');

const filePath = path.resolve(__dirname, './海滩A调.txt');

new MajorTransformer(rules, 'A').run(filePath);