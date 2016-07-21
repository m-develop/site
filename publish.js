var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'dist'), {
  branch: 'master',
  repo: 'git@github.com:m-develop/m-develop.github.io.git'
}, function(error) {
  console.log(error)
});
