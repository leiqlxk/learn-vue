<template>
  <div>
    <h2>{{message}}</h2>
    <cpn/>
  </div>
</template>

<script>
//组件引用组件，则形成了组件树
import Cpn from "./Cpn.vue";
export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: '哈哈哈哈'
    }
  }
}
</script>

<style scoped>

</style>
