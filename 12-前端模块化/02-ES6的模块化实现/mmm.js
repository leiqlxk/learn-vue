import {flag, sum} from "./aaa.js";

//默认导入的就是export default的那个
import addr from "./aaa.js";

//全部导入
import * as aaa from "./aaa.js";

console.log(aaa.flag);
if (flag) {
  console.log('小明是个天才');
}

console.log(addr('你好啊'));