
//Commonjs导入
const {add, mul} = require('./mathUtils');

console.log(add(20, 56));

console.log(mul(25, 6));

//ES6导入
import {name, age, height} from "./info";

console.log(name);

console.log(age);

console.log(height);