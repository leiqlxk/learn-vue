
//Commonjs导入
const {add, mul} = require('./js/mathUtils');

console.log(add(20, 56));

console.log(mul(25, 6));

//ES6导入
import {name, age, height} from "./js/info";

console.log(name);

console.log(age);

console.log(height);

//依赖css文件，有依赖才会跟我们写的东西产生引用去打包进来，因为css不像引用js中的属性或者方法等需要使用变量接收，引用进来就行
//但是正常webpack不支持打包css，我们需要通过不同的loader来打包css、scss、less等内容，不同的loader在官网中都有https://webpack.js.org/，翻译后的网站为https://www.webpackjs.com/
//loader的使用步骤为：
//1.通过npm安装需要使用的loader
//2.在webpack.config.js中的module关键字下进行配置

require('./css/normal.css');

require('./css/special.less');

document.writeln('<h2>你好啊,webpack</h2>')

//使用Vue进行开发
//在npm install vue后在node_modules中就用vue的引用了，并且其通过export default Vue导出
import Vue from 'vue';
//组件抽出来其实就是一个对象，从而可以使用第三种方式，从一个js中导入进来
/*const App = {
  template: `
    <div>
      <h2>{{message}}</h2>
    </div>
  `,
  data() {
    return {
      message: '哈哈哈哈'
    }
  }
}*/

//3.使用import导入
// import App from './vue/app'

//4.js和模板分离,.vue格式要有对应的loader  vue-loader  vue-template-compiler
import App from './vue/App.vue';
new Vue({
  el: '#app',
  //1.使用template替换el，vue在编译的时候会把template中的内容去替换el挂载的div
 /* template: `
    <div>
      <h2>{{message}}</h2>
    </div>
  `,*/
  //2.使用组件抽离
  template: '<App/>',
  components: {
    App
  }
});
