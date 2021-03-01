import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import getters from "./getters";
import a from './module/moduleA'
import actions from "./actions";

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
  count: 5,
  info: {
    name: 'curry',
    age: 18,
    height: 1.90
  }
}
const store = new Vuex.Store({
    state,
  //更新state一定是用mutations，哪怕是先走actions异步方法最后还是走mutations更新state
    mutations,
    actions,
    getters,
    modules: {
      a
    }
  }
)

// 3.导出对象
export default store
