/*var name = '小明';

var age = 28;

function sum (i, j) {
  return i + j;
}

var flag = true;

if (flag) {
  console.log(sum(5, 13));
}*/

//利用匿名函数使用函数的作用域可以解决全局变量冲突的问题，但是会失去代码的复用性，别的js不能在引用这个js中定义的变量或者函数
//这就是模块化的最基本封装，即解决了全局变量全局函数的冲突，也解决了匿名函数不可复用的问题
//常见的模块化规范有（核心就是导入和导出）：CommonJs（node就是该规范的具体实现）、AMD、CMD、ES6(export/import)都有Modules
var moduleA = (function (){
  //利用导出对象来给别的js使用
  var obj = {}

  var name = '小明';

  var age = 28;

  function sum (i, j) {
    return i + j;
  }

  var flag = true;

  if (flag) {
    console.log(sum(5, 13));
  }

  obj.flag = flag;
  obj.sum = sum;

  //把对象以返回的形式抛出去
  return obj;
})()

//CommonJs实例
//导出
/*
var name = '小明';

var age = 28;

function sum (i, j) {
  return i + j;
}

var flag = true;

if (flag) {
  console.log(sum(5, 13));
}
导出需要的内容
module.exports = {
  flag, sum
}*/
//导入
// var {flag, sum} = require('.../aaa.js')

