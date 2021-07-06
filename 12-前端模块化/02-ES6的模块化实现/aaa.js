let name = '小明';
let age = 28;
let flag = true;

function sum (n, m) {
  return n + m;
}

if (flag) {
  console.log(sum(20, 15));
}

//导出方式一
export {
  flag, sum
}

//导出方式二定义的时候直接导出
export let num1 = 123;

//直接导出函数或者类
export function mul() {

}

//es6中通过class定义类等价于使用函数的方式
export class Person {

}

/*
export function Person() {

}*/


//export default:上面的三种方式导出的时候都已命名，而有的时候我们并不想在导出的时候给他名字，而是导入的时候给他起名字
//一个模块只能有一个export default
/*const address = '北京市';
export default address;*/

export default function (argument) {
  return argument;
}
