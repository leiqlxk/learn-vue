### 安装插件
npm install postcss-px-to-viewport --save-dev
### 在postcss.config.js中配置
```javascript
module.exports = {
  plugins: {
    autoprefixer: {
      'postcss-px-to-viewport': {
        viewportWidth: 375, // 一般设计稿都是以iphone6给的设计，分辨率为750*1337，但真实宽高位375*667，一个像素点两个像素视窗宽度，对应的是我们设计稿的宽度
        viewportHeight: 667, // 视窗高度，对应的是我们设计稿的高度（可不配置）
        unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不需要转换的类
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
        mediaQuery: false // 允许媒体查询中转换`px`
      }
    }
  }
}

// js中使用正则：/正则相关规则/
// 1> ^abc:表示以abc开头
// 2> abc$:表示以abc结尾
// 3> y+:表示一个或多个y
// 4> y*:表示0个或多个y
// 5> y?:表示0个或1个y
// 6> RegExp.$1:表示匹配的结果
```
