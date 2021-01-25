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
    filename: 'bundle.js',
    //在index.html文件没有打包进dist中时引用图片时应该引用打包后的文件，即dist中的文件
    // 项目中所有用到url的时候默认前缀，例如图片文件等
    publicPath: 'dist/'
  },
  //配置webpack所用到的扩展模块，css-loader只负责加载不会将样式加到dom里，还需要配置style-loader
  module: {
    rules: [
      {
        //正则表达式
        test: /\.css$/,
        //使用多个loader时从右向左读
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //高版本默认情况下，文件加载器生成使用ES modules语法的JS模块，此处我们直接使用了url而没有导入，可以使用CommonJS
              esModule: false,
              //当图片大小下于该值时，会自动转换成base64显示，大于该值时会打包文件,则需要使用到file-loader，file-loader不需要配置，直接安装即可
              //一般设置8KB即
              limit: 8192,
              //设置打包后的文件夹及文件名规范
              name: 'img/[name].[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  }
}