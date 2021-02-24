<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar'
}
</script>

<style scoped>
  #tab-bar {
    /*flex布局*/
    display: flex;
    background-color: #f6f6f6;

    /*定位*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*阴影 x轴偏移量  y轴偏移量 阴影宽度 */
    box-shadow: 0px -3px 1px rgba(100, 100, 100, .1);
  }
</style>
