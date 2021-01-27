//首先从node中导入path包，以便后面可以动态获取绝对路径
//一旦要使用node的东西，最好立马执行npm init初始化项目会生成package.json,里面说明了引用了哪些包也就是node管理包的核心文件
//然后执行npm install安装package中的依赖包，目前只是使用node中的path没有依赖别的相关包所以install也没有效果
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

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
    //由于使用了html-webpack-plugin，此时会在dist文件夹中自动生成index.html文件，则为同一目录下不需要再家此前缀
    // publicPath: 'dist/'
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
      },
      {
        //把es6语法转换成es5
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  //配置runtime-compiler
  resolve: {
    //配置import的时候不想写的扩展名
    extensions: ['.js', '.css', '.vue'],
    alias: {
      // 配置我们import的vue具体指向的文件，vue.esm.js中包含了compiler，默认指向的是vue.runtime.js
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
      //plugin是插件的意思，通常是用于多某个现有的架构进行扩展，webpack的插件就是对webpack现有功能的各种扩展，比如打包优化，文件压缩等
      //loader主要用于转换某些类型的模块，它是一个加载器和转换器。插件它是对webpack本身的扩展，是一个扩展器
      //使用过程：
      //步骤一：通过npm安装需要使用的plugin
      //步骤二：在webpack.config.js中的plugins中配置插件
      //banner插件是webpack本身自带的，只需导入webpack，无需额外安装
      new webpack.BannerPlugin('最终版权归lql所有'),

      //新增的.npmrc文件的作用为在项目的根目录中包含该文件并且改文件配有registry，则该项目使用npm时源会切换为文件中配置的源
      //打包html的plugin，html-webpack-plugin
      //在真是发布项目时，发布的是dist文件夹中的内容，但是dist文件夹中如果没有入口文件即本项目中的index.html文件，那么打包的js将毫无意义
      //因此我们需要将index.html文件打包到dist文件夹中，这个时候就可以使用HtmlWebpackPlugin插件，该插件可以为我们做：
      //1.自动生成一个index.html文件（可以指定模板来生成）
      //2.将打包的js文件，自动通过script标签插入到body中
      new HtmlWebpackPlugin({
        //配置模板文件，从该配置文件同级中去寻找html
        template: 'index.html'
      }),

      //js压缩插件：uglifyjs-webpack-plugin
      //当使用js丑话插件即压缩插件时，版本插件就没什么用了。。不要同时使用
      new UglifyjsWebpackPlugin()
  ]
}