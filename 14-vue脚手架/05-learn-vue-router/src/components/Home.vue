<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
<!--    嵌套路由-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
<!--    缓存页面，使得页面不要频繁的创建销毁-->
<!--    <keep-alive exclude="Profile"> 排除某个组件，多个用逗号隔开注意不要加空格，为组件的name。也可以使用正则表达式-->
<!--    <keep-alive include="Profile"> 包含进来的页面，基本不用-->
    <keep-alive exclude="Profile">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
 // 导出组件
export default {
  name: 'Home',
  created() {
    //组件创建后的回调
    //动态改变页面标题，最原始的方法，我们可以使用全局导航守卫来实现监听路由的跳转
    // document.title = '首页';
  },
  mounted() {
    //组件被挂载到dom后回调
  },
  updated() {
    //页面刷新后的回调
  },
  destroyed() {
    //页面销毁后的回调
  },
  activated() {
    //页面处于活跃状态时回调，非生命周期函数
    //并非总是会执行，当没有使用keep-alive时不会触发
  },
  deactivated() {
    //页面处于非活跃状态时回调，非生命周期函数
    //并非总是会执行，当没有使用keep-alive时不会触发
  }
};
</script>

<style scoped>

</style>
