var data = require('./guide');
var components = require('./components');
var platform = require('./platform');
var ui = require('./ui');
var tool = require('./tool');

exports.filters = {
  enabled: function(writers, name) {
    return writers.filter(function(writer) {
      return ~writer.indexOf(name)
    }).length;
  },
  reader: function(post) {
    return post;
  },
  getGudieDirectory: function() {
    for (var i in data) {
      if (data[i].children) {
        for (var j in data[i].children) {
          if (data[i].children[j].option) {
            if (typeof data[i].children[j].option === 'string') continue;
            data[i].children[j].option = escape(JSON.stringify(data[i].children[j].option));
          }
        }
      }
    }
    return {
      data: data
    };
  },
  getComponentsDirectory: function() {
    return {
      data: components,
      components: escape(JSON.stringify(components))
    }
  },
  getPlatformDirectory: function() {
    return {
      data: platform
    }
  },
  getUIDirectory: function() {
    return {
      data: ui
    }
  },

  getToolDirectory: function() {
    return {
      data: tool
    }
  },

  getSearchData: function() {
    return {
      data: escape(JSON.stringify(data)),
      components: escape(JSON.stringify(components))
    }
  }
};
