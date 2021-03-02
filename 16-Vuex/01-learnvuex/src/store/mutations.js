import {INCREMENT} from "./mutations-types";

export default {
  //定义方法,默认入参state
  //常量方式
  [INCREMENT](state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  //mutations传递参数，官方将下例中的count称为载荷（payload）
  incrementCount(state, count) {
    state.count += count.count
  },
  updateInfo(state) {
    state.info.name = 'james'
  }
}
