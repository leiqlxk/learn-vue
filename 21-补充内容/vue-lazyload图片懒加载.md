### 图片懒加载
当图片需要显示在屏幕上的时候再加载
### 安装
npm install vue-lazyload --save
### 使用
```javascript
import VueLazyload from 'vue-lazyload'

// 最简单的使用方法
Vue.use(VueLazyload)

// 传入options指定错误图片，占位图等
Vue.use(VueLazyload, {
  loading: require('/xxx/xxx/xx')
})

// 将<img src="">替换为<img v-lazy="">
```
