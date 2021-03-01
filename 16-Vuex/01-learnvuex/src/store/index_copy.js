import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutations-types";

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  }
}

const store = new Vuex.Store({
    state: {
      count: 5,
      info: {
        name: 'curry',
        age: 18,
        height: 1.90
      }
    },
    //更新state一定是用mutations，哪怕是先走actions异步方法最后还是走mutations更新state
    mutations: {
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
    },
    actions: {
      aUpdateInfo(context, payload) {
        /*setTimeout(() => {
          //最终还是要使用mutations来更新state
          context.commit(INCREMENT)
          // console.log(payload);
          console.log(payload.message);
          payload.success();
        }, 1000)*/
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit(INCREMENT)
            console.log(payload);
            resolve('1111111111')
          }, 1000)
        })
      }
    },
    getters: {
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
    },
    modules: {
      a: moduleA
    }
  }
)

// 3.导出对象
export default store
