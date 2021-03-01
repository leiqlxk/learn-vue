// 配置路由的相关信息
import Vue from 'vue';
import Router from 'vue-router';
// 导入组件
import About from '@/components/About';
import User from '@/components/User';

// 1. 通过Vue.use(插件)来安装插件，不仅仅是router，任何vue的插件都需要
Vue.use(Router);

// 2. 创建路由对象并通过export default导出
const router = new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      // 配置首页
      /*
      path中加不加/都可以，都可以表示为缺省值，此种方式不会显示首页的地址，我们可以使用重定向
      path: '',
      component: Home*/
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      //路由懒加载
      component: () => import('@/components/Home'),
      meta: {
        title: '首页'
      },
      beforeEnter: ((to, from, next) => {
        console.log('独享守卫');
        next();
      }),
      children: [
        {
          path: '',
          redirect: 'news'
        },
        {
          path: 'news',
          component: () => import('@/components/HomeNews')
        },
        {
          path: 'message',
          component: () => import('@/components/HomeMessage')
        }
      ]
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      //动态路由
      path: '/user/:userId',
      name: 'User',
      component: User
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/components/Profile')
    }
  ],
  // 修改路由为history
  mode: 'history',
  // 修改router-link的默认激活样式
  linkActiveClass: 'active'
});

//全局导航守卫，前置钩子即跳转之前回调
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  console.log('+++++++++');
  next();
})

//后置钩子，即页面跳转完成后回调
router.afterEach((to, from) => {
  console.log('------------');
})
export default router;
