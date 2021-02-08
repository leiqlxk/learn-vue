import Vue from 'vue';
import App from './App';
//当导入的时候只写到目录时，默认会找目录下的index.js则可以省略
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //将router实例挂载到vue实例中
  router,
  render: h => h(App),
});
