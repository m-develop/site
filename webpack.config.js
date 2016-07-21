var webpack = require('webpack');
var open = require('open');
var package = require("./package.json");
var entry = package.entry;
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var type = process.env.NODE_ENV;
var path = require('path');

module.exports = {
  entry: entry,
  output: {
    path: path.join(process.cwd(), 'dist', 'static'),
    filename: '[name].js' // Template based on keys in entry above
  },
  module: {
    loaders: [{
      test: /\.js(x?)$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/,
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
    }, {
      test: /\.png$/,
      loader: "url-loader?mimetype=image/png"
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
    new ExtractTextPlugin("[name].css")
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.md']
  }
};
