<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息，嘿嘿嘿</p>
    <!--    获取动态路由的内容，注意和$router区分-->
    <h2>{{ $route.params.userId }}</h2>
    <h2>query:{{ $route.query }}</h2>
    <h2>path:{{ $route.path }}</h2>
    <h2>name:{{ $route.name }}</h2>
    <h2>fullPath:{{ $route.fullPath }}</h2>
    <h2>hash:{{ $route.hash }}</h2>
    <h2>meta:{{ $route.meta }}</h2>
<!--    <h2>matched:{{ $route.matched }}</h2>-->
  </div>
</template>

<script>
export default {
  name: 'User',
  computed: {
    userId() {
      /* 1.$route.path
       字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
     2.$route.params
       一个 key/value 对象，包含了 动态片段 和 全匹配片段，
       如果没有路由参数，就是一个空对象。
     3.$route.query
       一个 key/value 对象，表示 URL 查询参数。
       例如，对于路径 /foo?user=1，则有 $route.query.user == 1，
       如果没有查询参数，则是个空对象。
     4.$route.hash
       当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。锚点
       5.$route.fullPath
       完成解析后的 URL，包含查询参数和 hash 的完整路径。
     6.$route.matched
       数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
     7.$route.name    当前路径名字
     8.$route.meta  路由元信息*/
      return this.$route.params.userId
    }
  }
};
</script>

<style scoped>

</style>
