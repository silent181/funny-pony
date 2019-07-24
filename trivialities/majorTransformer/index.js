const path = require('path');
const rules = require('./consts/rules');
const MajorTransformer = require('./MajorTransformer');

const filePath = path.resolve(__dirname, './resources/海滩A调.txt');
// FIXME: 在mac平台下可使用这种方法获取命令行参数，windows下不知道，有待尝试
const mode = process.argv[2];

new MajorTransformer(rules, mode).run(filePath);