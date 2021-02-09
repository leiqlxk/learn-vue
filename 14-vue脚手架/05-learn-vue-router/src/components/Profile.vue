<template>
  <div>
    <h2>我是Profile</h2>
<!--    获取query参数-->
    <h2>{{$route.query.userName}}</h2>
    <h2>{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: "Profile"
}
</script>

<style scoped>

</style>
