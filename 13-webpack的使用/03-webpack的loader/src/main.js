
//Commonjs导入
const {add, mul} = require('./js/mathUtils');

console.log(add(20, 56));

console.log(mul(25, 6));

//ES6导入
import {name, age, height} from "./js/info";

console.log(name);

console.log(age);

console.log(height);

//依赖css文件，有依赖才会跟我们写的东西产生引用去打包进来，因为css不想引用js中的属性或者方法等需要使用，所以我们都不需要新建变量来接收，引用进来就行
//但是正常webpack不支持打包css，我们需要通过通过不同的loader来打包css、scss、less等内容，不同的loader在官网中都有https://webpack.js.org/，翻译后的网站为https://www.webpackjs.com/
//loader的使用步骤为：
//1.通过npm安装需要使用的loader
//2.在webpack.config.js中的module关键字下进行配置
require('./css/normal.css');