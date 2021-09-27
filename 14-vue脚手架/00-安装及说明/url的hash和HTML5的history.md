## url的hash
![img_15.png](img_15.png)    
    改变url的hash使得url变更，但是页面并不会刷新，即没有去服务器重新请求资源。正常url的变更会使浏览器去服务器重新请求资源并刷新页面，如location.href就会刷新页面。当使用hash方式改变url时，我们可以在前端
去监听hash的变化，并维护一个url的映射，则可以实现前端路由。
## HTML 5的history
![img_17.png](img_17.png)    
    使用HTML 5的的history.pushState同样能够实现hash的效果，实际上pushState就是将变量压入一个栈中，当前的url永远是栈顶的地址，从而实现回退（history.back()）、前进（history.forward()）之类的功能。    
![img_18.png](img_18.png)    
    history.replace()也能改变url而不刷新页面，但是其只是简单替换，而没有pushState的出入栈操作，即不管是back()方法还是浏览器的返回按钮都是无效的。    
![img_19.png](img_19.png)    
    但使用go()方法可以跳转到指定的页面但必须使用的是pushState，replaceState情况下是无效的，go方法参数不仅仅只能是负数，也能用正数。
