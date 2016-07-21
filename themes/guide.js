var introduce = {
  title: '简介',
  url: '/guide/0-introduce.html',
  needOpen: false,
};

var guide = require('./doc/index'); // 开发指引
var solution = require('./doc/solution'); // 解决方案
var specification = require('./doc/specification'); // 开发规范

const Data = [
  introduce,
  guide,
  solution,
  specification
];

module.exports = Data;
