var path = require('path');
var cheerio = require('cheerio');
var hl = require('highlight.js');
var highlightAuto = hl.highlightAuto;
var open = require('open');
var type = process.env.NODE_ENV;
var package = require("./package.json");
var version = package.version;
//nico setting
exports.site = {
  name: 'The Guide of Enterprise Front-end Solution'
};

exports.theme = 'themes';

exports.source = path.join(process.cwd(), 'doc');

var folderName = 'dist';
if (type === 'tag') {
  folderName = version;
}
console.log('type = ', type);
exports.output = path.join(process.cwd(), folderName);
exports.permalink = '{{directory}}/{{filename}}';

exports.ignorefilter = function(filepath, subdir) {
  var extname = path.extname(filepath);
  if (extname === '.tmp' || extname === '.bak') {
    return false;
  }
  if (/\.DS_Store/.test(filepath)) {
    return false;
  }
  if (/^(dist|_theme|node_modules|\.idea|static-src)/.test(subdir)) {
    return false;
  }
  return true;
};

exports.process_write = function(content, filename) {
  if (/\.html$/.test(filename)) {
    var $ = cheerio.load(content);
    $('pre code').replaceWith(function(i, block) {
      var $e = $(block);
      var text = $e.text();

      var klass = $e.attr('class') || '';
      var languageType = klass.split('lang-').filter(id);
      if (languageType.length) {
        return highlightAuto(text, languageType).value;
      } else {
        return highlightAuto(text).value;
      }
      $('pre').addClass('hljs');
    });
    return $.html();
  }
  return content;
}

function id(type) {
  return type;
}


exports.writers = [
  "nico.PostWriter",
  "nico.FileWriter",
  "nico.StaticWriter"
];
