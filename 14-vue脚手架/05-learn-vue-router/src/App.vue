<template>
  <div id="app">
<!--    router-link最终被默认渲染成a标签，其形式就是<a href='#/home'>#表示默认的就是hash的方式-->
<!--   使用tag属性可以改变渲染方式， replace属性不需要值即可指定为replace形式，active-class属性设置来改变默认的点击样式-->
<!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link> 即使用active修改默认的router-link-active，这个也可以再router实例上批量修改-->
    <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">首页</button>
    <button>关于</button>
<!--    router-view相当于占位，告诉router-link关联的组件应该渲染到什么位置-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    homeClick() {
      //通过代码的方式修改路由,其实内部使用的就是history.pushState
      this.$router.push('/homne');
      console.log('homeClick');
    },
    aboutClick() {
      //通过代码的方式修改路由,其实内部使用的就是history.repalceState
      this.$router.replace('/about');
      console.log('aboutClick');
    }
  }
};
</script>

<style>
</style>
