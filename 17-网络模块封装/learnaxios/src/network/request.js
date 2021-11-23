//封装网络请求，之所以不用export default是可能扩展为多个实例
import axios from "axios";

//1.传入回调函数封装
export function request(config, success, failure) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })

  //发送真正的网络请求
  instance(config)
    .then(res => {
      console.log(res)
      success(res)
    })
    .catch(err => {
      console.log(err)
      failure(err)
    })
}

//2.将config和回调合并在一起进行封装
export function request1(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })

  //发送真正的网络请求
  instance(config.baseConfig)
    .then(res => {
      console.log(res)
      config.success(res)
    })
    .catch(err => {
      console.log(err)
      config.failure(err)
    })
}

//3.Promise方式
export function request2(config) {
  return new Promise(((resolve, reject) => {
    //1.创建axios的实例
    const instance = axios.create({
      baseURL: 'http://httpbin.org',
      timeout: 5000
    })

    //发送真正的网络请求
    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  }))
}

//4.最终方案，其实axios本来就是使用的promise方式，直接返回就可以
export function request3(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })

  //发送真正的网络请求
  return instance(config)
}


//6.axios拦截器
export function request4(config) {
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://httpbin.org',
    timeout: 5000
  })

  //发送真正的网络请求
  return instance(config)
}

//拦截请求
request4.interceptors.request.use(
  //成功处理
  config => {
    console.log(config);
    //可以在此进行处理的东西
    //1.比如config中的一些信息不符合服务器的要求
    //2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    //3.某些网络请求，必须携带一些特殊的信息（如token），必须进行校验

    //最后要把config返回出去，不然最终请求的时候就没有config了
    return config
  },
  //失败处理
  err => {
    console.log(err);
  }
)

//拦截响应
request4.interceptors.response.use(
  res => {
    console.log(res);
    //一般只需要data吧
    return res.data
  },
  err => {
    console.log(err);
  }
)
