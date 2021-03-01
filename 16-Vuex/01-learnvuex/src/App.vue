<template>
  <!--  view-->
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <!--    行为-->
<!--    直接操作state中的变量是可以的，但是官方不建议-->
<!--    <button @click="$store.state.count++">+</button>
    <button @click="$store.state.count&#45;&#45;">-</button>-->
    <button @click="addition">+</button>
    <button @click="substraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>--------------APP内容: getters相关信息------------</h2>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.getters.powerCount1}}</h2>
    <h2>{{$store.getters.powerCount2(4)}}</h2>

    <h2>--------------APP内容: info对象的内容展示（是否响应式）------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改</button>
    <button @click="aUpdateInfo">异步修改</button>

    <h2>--------------APP内容: modules相关信息------------</h2>
<!--    取值是相反的，先拿到state再拿到模块a在拿到变量-->
<!--    commit，getters还是一样的，不关心是定义在根还是在模块里面-->
<!--    actions中的context和根的context不一样，根的context相当于store，而模块中的context只为当前模块，要使用根的东西需要使用.rootState或者.rootGetters-->
    <h2>{{$store.state.a.name}}</h2>
    <!--父子组件使用props传值-->
    <!--   当其不为父子组件时，传值就需要传递很多次，容易造成混乱，则可以使用vuex来管理，共享状态数据-->
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from "./store/mutations-types";

export default {
  name: 'App',
  //状态
  data() {
    return {
      message: 'Hello Vuex',
      // count: 0
    }
  },
  components: {
    HelloVuex
  },
  methods: {
    addition() {
      this.$store.commit(INCREMENT)
    },
    substraction() {
      this.$store.commit('decrement')
    },
    addCount(count) {
      //1.普通的提交方式
      // this.$store.commit('incrementCount', count)

      //2.特殊的提交方式,这种方式count会被当成对象，即把括号中整个对象提交给载荷
      this.$store.commit({
        type: 'incrementCount',
        count
      })

    },
    updateInfo() {
      this.$store.commit('updateInfo')
    },
    aUpdateInfo() {
      // this.$store.dispatch('aUpdateInfo', '我是payload')
     /* this.$store.dispatch('aUpdateInfo', {
        message:'我是携带的信息',
        success: () => {
          console.log('里面已经完成了');
        }
      })*/

      this.$store.dispatch('aUpdateInfo', '我是携带的信息')
        .then(data => {
          console.log(data);
          console.log('里面已经完成');
        })
    }
  }
}
</script>

<style>
</style>
