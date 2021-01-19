
//Commonjs导入
const {add, mul} = require('./js/mathUtils');

console.log(add(20, 56));

console.log(mul(25, 6));

//ES6导入
import {name, age, height} from "./js/info";

console.log(name);

console.log(age);

console.log(height);