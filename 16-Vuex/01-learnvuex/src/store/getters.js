export default {
  powerCount(state) {
    return state.count * state.count
  },
  powerCount1(state, getters) {
    return getters.powerCount/2
  },
  //外部传参方式，返回一个函数
  powerCount2(state, getters) {
    /* return function (num) {
       return getters.powerCount/num
     }*/
    return num => getters.powerCount/num
  }
}
