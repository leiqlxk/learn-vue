import Vue from 'vue'
import App from './App'
import axios from "axios";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//简单的get请求，method不写也可以，默认的就是get请求，返回的是一个Promise
axios({
  //httpbin.org可以进行网络测试
  url: 'http://httpbin.org',
  method: 'get'
}).then(res => {
  console.log(res);
})

//axios全局配置
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 5000

axios({
  //httpbin.org可以进行网络测试
  url: '/get',
  method: 'get',
  //专门针对get请求的参数拼接，或者自己通过?拼接到地址后面也可以
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})

//两个请求都要完成才能往下走,类似于Promise.all,返回的是一个数组
axios.all([axios({
  url: '/get'
}), axios({
    url: 'get'
  })]).then(results => {
  console.log(results);
})

//返回的数组可以是用axios.spread来解开
axios.all([axios({
  url: 'http://httpbin.org'
}), axios({
  url: 'http://httpbin.org'
})]).then(axios.spread((res1, res2) =>
{
  console.log(res1);
  console.log(res2);
}))

//正常我们不会直接使用全局的axios，而是取创建一个实例，这样我们就可以创建多个实例，根据接口去选择使用哪个实例
const instance = axios.create({
  baseURL: 'http://****.****.***:****',
  timeout: 5000
})

instance({
  url: '/***/***'
}).then(res => {
  console.log(res);
})


//1. 通过传入回调函数使用封装后的reques模块
import {request} from './network/request'

request({
  url: '/home'
}, res => {
  console.log(res);
}, err => {
  console.log(err);
})

//2. config和回调函数封装在一个对象中的reques模块
import {request1} from './network/request'

request1({
  baseConfig: {
    url: '/home'
  },
  success(res) {

  },
  failure(err) {

  }
})

//3.使用Promise方式
import {request2} from './network/request'

request2({
  url: '/home'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

//4.最终方式
import {request3} from './network/request'

request3({
  url: '/home'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})


