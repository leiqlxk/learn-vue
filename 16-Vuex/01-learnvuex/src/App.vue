<template>
  <!--  view-->
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <!--    行为-->
<!--    直接操作state中的变量是可以的，但是官方不建议-->
    <button @click="$store.state.count++">+</button>
    <button @click="$store.state.count--">-</button>
    <!--父子组件使用props传值-->
    <!--   当其不为父子组件时，传值就需要传递很多次，容易造成混乱，则可以使用vuex来管理，共享状态数据-->
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";

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
  }
}
</script>

<style>
</style>
