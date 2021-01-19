//首先从node中导入path包，以便后面可以动态获取绝对路径
//一旦要使用node的东西，最好立马执行npm init初始化项目会生成package.json,里面说明了引用了哪些包也就是node管理包的核心文件
//然后执行npm install安装package中的依赖包，目前只是使用node中的path没有依赖别的相关包所以install也没有效果
const path = require('path');

//webpack本身使用的是CommonJS的规范导出配置
module.exports = {
  //入口
  entry: './src/main.js',
  //出口是对象，包含路径和文件名且path必须为绝对路径

  output: {
    //path.resolve()拼接字符串的函数, __dirname是node中的全局变量获取当前项目上下文的路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
}