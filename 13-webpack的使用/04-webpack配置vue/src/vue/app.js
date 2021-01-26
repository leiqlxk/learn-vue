//此方式的缺点是模板和js代码没有分离
export default {
  template: `
    <div>
      <h2>{{message}}</h2>
    </div>
  `,
  data() {
    return {
      message: '哈哈哈哈'
    }
  }
}