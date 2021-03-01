export default {
  aUpdateInfo(context, payload) {
    /*setTimeout(() => {
      //最终还是要使用mutations来更新state
      context.commit(INCREMENT)
      // console.log(payload);
      console.log(payload.message);
      payload.success();
    }, 1000)*/
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit(INCREMENT)
        console.log(payload);
        resolve('1111111111')
      }, 1000)
    })
  }
}
