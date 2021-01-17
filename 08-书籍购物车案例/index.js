const app = new Vue({
  el: '#app',
  data: {
    books:[
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-2',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2009-9',
        price: 75.00,
        count: 1
      }
    ],
    deDisabled: false,
  },
  computed: {
    totalPrice() {
      //普通for循环
      // let totalPrice = 0;
     /* for (let i = 0; i < this.books.length; i++) {
        totalPrice += this.books[i].price * this.books[i].count;
      }*/

      //for (let i of/in this.books)
     /* for (let i in this.books) {
        totalPrice += this.books[i].price * this.books[i].count;
      }*/

    /* for (let item of this.books) {
        totalPrice += item.price * item.count;
      }*/

      // return totalPrice;

      //函数式编程（第一公民：函数）/面向对象编程（第一公民：对象）
      //filter/map/reduce
      //reduce(参数一（函数：参数为前一个值，当前值，当前值的index），参数2（初始值）)

      return  this.books.reduce((preValue, curValue) => preValue + curValue.price * curValue.count, 0)
    }
  },
  //过滤器
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2);
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    }
  }
});