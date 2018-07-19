import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import list from '../views/list'
import cart from '../views/cart'
import product from '../views/productDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/list',
      meta: {
      	title:'商品列表'
      },
      component: list
    },
    {
    	path:'/cart',
    	meta: {
    		title: '购物车'
    	},
    	component: cart
    },
    {
    	path:'/productDetails/:id',
    	meta: {
    		title:'商品详情'
      },
      component: product
    },
    {
        path: '*',
        redirect: '/list'
    }
  ],
   mode: "history"//干掉地址栏里边的#号键
})
