//因为webpack配置中很多东西只是在开发时需要，运行时并不需要，所以我们可以对它进行分离
//此处应放开发和运行时都需要的配置
//分离后通过安装webpack-merge来合并代码
//通过此种方式则没有webpack.config.js文件了，则要修改package.json中的script指令要通过--config指定配置文件，并且注意修改出口的路径
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',


  output: {

    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',

  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 8192,
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
  resolve: {
    extensions: ['.js', '.css', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new webpack.BannerPlugin('最终版权归lql所有'),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    //打包时才需要
    // new UglifyjsWebpackPlugin()
  ],
  //运行时不需要
  /*devServer: {
    contentBase: './dist',
    inline: true
  }*/
}