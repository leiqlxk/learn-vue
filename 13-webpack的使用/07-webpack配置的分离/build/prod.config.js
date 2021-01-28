const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const WebpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

//通过webpackMerge合并配置文件
module.exports = WebpackMerge.merge(baseConfig,{
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})