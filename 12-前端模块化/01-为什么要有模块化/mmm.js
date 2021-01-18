/*
if (flag) {
  console.log('小明是个天才');
}*/


(function () {
  //通过全局的moduleA来使用导出的内容
  if (moduleA.flag) {
    console.log('小明是个天才');
  }
})()